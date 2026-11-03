import * as THREE from 'three';

export interface Meteor {
  active: boolean;
  cooldown: number;
  progress: number;
  duration: number;
  totalDist: number;
  length: number;
  dirX: number;
  dirY: number;
  dirZ: number;
  startX: number;
  startY: number;
  startZ: number;
  headX: number;
  headY: number;
  headZ: number;
  tailX: number;
  tailY: number;
  tailZ: number;
  opacity: number;
}

export interface MeteorSystem {
  lines: THREE.LineSegments;
  heads: THREE.Points;
  update: (delta: number, speedFactor: number) => void;
  dispose: () => void;
}

export const METEOR_COUNT = 3;

/**
 * Initializes delicate falling meteors / shooting stars with glowing tails and glowing heads
 */
export function createMeteorSystem(
  camera: THREE.Camera,
  starTexture: THREE.CanvasTexture
): MeteorSystem {
  const meteors: Meteor[] = [];

  // Staggered initial cooldowns so they shoot naturally across time
  for (let i = 0; i < METEOR_COUNT; i++) {
    meteors.push({
      active: false,
      cooldown: 0.8 + i * 2.2 + Math.random() * 1.5,
      progress: 0,
      duration: 1.0,
      totalDist: 30,
      length: 3.0,
      dirX: -0.707,
      dirY: -0.707,
      dirZ: 0,
      startX: 0,
      startY: 0,
      startZ: 0,
      headX: 0,
      headY: 0,
      headZ: 0,
      tailX: 0,
      tailY: 0,
      tailZ: 0,
      opacity: 0,
    });
  }

  const resetMeteor = (m: Meteor) => {
    const cx = camera.position.x;
    const cy = camera.position.y;

    // Diagonal streak downward-left (210 to 235 degrees)
    const angle = ((210 + Math.random() * 25) * Math.PI) / 180;
    m.dirX = Math.cos(angle);
    m.dirY = Math.sin(angle);
    m.dirZ = (Math.random() - 0.5) * 0.1;

    // Spawn outside the viewport (above or to the right of current camera view)
    // Screen bounds at z=0 are approx: cx ± 18, cy ± 10
    if (Math.random() > 0.45) {
      // Spawn from above the top edge
      m.startX = cx - 4 + Math.random() * 26;
      m.startY = cy + 13 + Math.random() * 6;
    } else {
      // Spawn from beyond the right edge
      m.startX = cx + 19 + Math.random() * 7;
      m.startY = cy + 3 + Math.random() * 11;
    }
    m.startZ = (Math.random() - 0.5) * 10 - 2;

    // Glowing tail length
    m.length = 3.6 + Math.random() * 2.2;

    // Total travel distance: large enough (~60-75 units) so BOTH head and tail
    // completely exit past the bottom/left edge of the screen before disappearing
    m.totalDist = 62 + Math.random() * 15;

    // Swift speed (approx 1.0s to 1.35s to cross the full screen)
    m.duration = 1.0 + Math.random() * 0.35;
    m.progress = 0;
    m.opacity = 1;
    m.headX = m.startX;
    m.headY = m.startY;
    m.headZ = m.startZ;
    m.tailX = m.startX;
    m.tailY = m.startY;
    m.tailZ = m.startZ;
    m.active = true;
  };

  // Buffer geometry for meteor trail lines (2 vertices per meteor: Tail and Head)
  const meteorLinePositions = new Float32Array(METEOR_COUNT * 2 * 3);
  const meteorLineColors = new Float32Array(METEOR_COUNT * 2 * 3);
  const meteorLineGeo = new THREE.BufferGeometry();
  meteorLineGeo.setAttribute('position', new THREE.BufferAttribute(meteorLinePositions, 3));
  meteorLineGeo.setAttribute('color', new THREE.BufferAttribute(meteorLineColors, 3));

  const meteorLineMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    linewidth: 1.5,
  });
  const meteorLines = new THREE.LineSegments(meteorLineGeo, meteorLineMat);

  // Buffer geometry for meteor glowing heads (1 point per meteor)
  const meteorHeadPositions = new Float32Array(METEOR_COUNT * 3);
  const meteorHeadColors = new Float32Array(METEOR_COUNT * 3);
  const meteorHeadGeo = new THREE.BufferGeometry();
  meteorHeadGeo.setAttribute('position', new THREE.BufferAttribute(meteorHeadPositions, 3));
  meteorHeadGeo.setAttribute('color', new THREE.BufferAttribute(meteorHeadColors, 3));

  const meteorHeadMat = new THREE.PointsMaterial({
    size: 0.55,
    map: starTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    vertexColors: true,
  });
  const meteorHeads = new THREE.Points(meteorHeadGeo, meteorHeadMat);

  const update = (delta: number, speedFactor: number) => {
    const linePosArr = meteorLineGeo.attributes.position.array as Float32Array;
    const lineColArr = meteorLineGeo.attributes.color.array as Float32Array;
    const headPosArr = meteorHeadGeo.attributes.position.array as Float32Array;
    const headColArr = meteorHeadGeo.attributes.color.array as Float32Array;

    for (let i = 0; i < METEOR_COUNT; i++) {
      const m = meteors[i];
      const lineIdx = i * 6; // 2 vertices * 3 coords
      const headIdx = i * 3; // 1 vertex * 3 coords

      if (!m.active) {
        m.cooldown -= delta * speedFactor;
        if (m.cooldown <= 0) {
          resetMeteor(m);
        } else {
          // Hide inactive meteor
          lineColArr[lineIdx + 0] = 0;
          lineColArr[lineIdx + 1] = 0;
          lineColArr[lineIdx + 2] = 0;
          lineColArr[lineIdx + 3] = 0;
          lineColArr[lineIdx + 4] = 0;
          lineColArr[lineIdx + 5] = 0;
          headColArr[headIdx + 0] = 0;
          headColArr[headIdx + 1] = 0;
          headColArr[headIdx + 2] = 0;
          continue;
        }
      }

      // Advance progress
      m.progress += (delta / m.duration) * speedFactor;

      // Meteor has traveled completely across and exited the screen
      if (m.progress >= 1.0) {
        m.active = false;
        m.cooldown = 1.8 + Math.random() * 4.0; // Pause before next shooting star
        // Reset colors to 0
        lineColArr[lineIdx + 0] = 0;
        lineColArr[lineIdx + 1] = 0;
        lineColArr[lineIdx + 2] = 0;
        lineColArr[lineIdx + 3] = 0;
        lineColArr[lineIdx + 4] = 0;
        lineColArr[lineIdx + 5] = 0;
        headColArr[headIdx + 0] = 0;
        headColArr[headIdx + 1] = 0;
        headColArr[headIdx + 2] = 0;
        continue;
      }

      // Keep 100% full brightness across the entire screen!
      // Gentle fade-in only in the first 5% as it enters
      m.opacity = Math.min(1.0, m.progress / 0.05);

      const dist = m.progress * m.totalDist;
      m.headX = m.startX + m.dirX * dist;
      m.headY = m.startY + m.dirY * dist;
      m.headZ = m.startZ + m.dirZ * dist;

      const currentTrailLength = Math.min(m.length, dist);
      m.tailX = m.headX - m.dirX * currentTrailLength;
      m.tailY = m.headY - m.dirY * currentTrailLength;
      m.tailZ = m.headZ - m.dirZ * currentTrailLength;

      // Vertex 1: Tail (Faint cyan-indigo tail aura)
      linePosArr[lineIdx + 0] = m.tailX;
      linePosArr[lineIdx + 1] = m.tailY;
      linePosArr[lineIdx + 2] = m.tailZ;
      lineColArr[lineIdx + 0] = 0.28 * m.opacity;
      lineColArr[lineIdx + 1] = 0.52 * m.opacity;
      lineColArr[lineIdx + 2] = 0.98 * m.opacity;

      // Vertex 2: Head (Bright diamond white / cyan aura)
      linePosArr[lineIdx + 3] = m.headX;
      linePosArr[lineIdx + 4] = m.headY;
      linePosArr[lineIdx + 5] = m.headZ;
      lineColArr[lineIdx + 3] = 0.95 * m.opacity;
      lineColArr[lineIdx + 4] = 1.0 * m.opacity;
      lineColArr[lineIdx + 5] = 1.0 * m.opacity;

      // Head glowing point
      headPosArr[headIdx + 0] = m.headX;
      headPosArr[headIdx + 1] = m.headY;
      headPosArr[headIdx + 2] = m.headZ;
      headColArr[headIdx + 0] = 1.0 * m.opacity;
      headColArr[headIdx + 1] = 1.0 * m.opacity;
      headColArr[headIdx + 2] = 1.0 * m.opacity;
    }

    meteorLineGeo.attributes.position.needsUpdate = true;
    meteorLineGeo.attributes.color.needsUpdate = true;
    meteorHeadGeo.attributes.position.needsUpdate = true;
    meteorHeadGeo.attributes.color.needsUpdate = true;
  };

  const dispose = () => {
    meteorLineGeo.dispose();
    meteorLineMat.dispose();
    meteorHeadGeo.dispose();
    meteorHeadMat.dispose();
  };

  return {
    lines: meteorLines,
    heads: meteorHeads,
    update,
    dispose,
  };
}
