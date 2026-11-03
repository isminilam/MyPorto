import * as THREE from 'three';

/**
 * Creates a soft, circular luminous starlight sprite with smooth falloff (no harsh glare)
 */
export function createStarTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // Ultra-soft celestial glow gradient
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.18, 'rgba(255, 255, 255, 0.85)');
    grad.addColorStop(0.42, 'rgba(125, 211, 252, 0.35)'); // Soft sky/cyan aura
    grad.addColorStop(0.75, 'rgba(165, 180, 252, 0.1)');  // Soft indigo mist
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export interface StarfieldSystem {
  points: THREE.Points;
  update: (elapsed: number, speedFactor: number, scrollProgress: number, isScrolling?: boolean) => void;
  dispose: () => void;
}

/**
 * Initializes a calm, minimalist 3D starfield with ~260 softly twinkling, depth-spaced stars
 */
export function createStarfield(starTexture: THREE.CanvasTexture): StarfieldSystem {
  // Reduced by ~80% (from 1,400 to 260) for an elegant, calm, spacious feel
  const starCount = 260;
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  const starBaseColors: THREE.Color[] = [];
  const starTwinklePhases = new Float32Array(starCount);
  const starTwinkleSpeeds = new Float32Array(starCount);

  // Soft starlight palette
  const colorWhite = new THREE.Color(0xf8fafc);
  const colorCyan = new THREE.Color(0x38bdf8);
  const colorViolet = new THREE.Color(0xa5b4fc);
  const colorIndigo = new THREE.Color(0x818cf8);

  for (let i = 0; i < starCount; i++) {
    // Spacious 3D volume
    const x = (Math.random() - 0.5) * 65;
    const y = (Math.random() - 0.5) * 55;
    const z = (Math.random() - 0.5) * 45 - 5;

    starPositions[i * 3] = x;
    starPositions[i * 3 + 1] = y;
    starPositions[i * 3 + 2] = z;

    // Mostly pristine starlight white with subtle cool accents
    const rand = Math.random();
    let c = colorWhite;
    if (rand > 0.82) c = colorCyan;
    else if (rand > 0.70) c = colorViolet;
    else if (rand > 0.60) c = colorIndigo;

    starBaseColors.push(c.clone());
    starColors[i * 3] = c.r;
    starColors[i * 3 + 1] = c.g;
    starColors[i * 3 + 2] = c.b;

    starTwinklePhases[i] = Math.random() * Math.PI * 2;
    // Slow, serene breathing frequency (0.4 - 1.1)
    starTwinkleSpeeds[i] = 0.4 + Math.random() * 0.7;
  }

  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

  const starMaterial = new THREE.PointsMaterial({
    size: 0.28,
    map: starTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    vertexColors: true,
    opacity: 0.82,
  });

  const starField = new THREE.Points(starGeometry, starMaterial);

  const update = (
    elapsed: number,
    speedFactor: number,
    scrollProgress: number,
    isScrolling = false
  ) => {
    // Gentle, slow cosmic drift
    starField.rotation.y = elapsed * 0.003 * speedFactor + scrollProgress * 0.15;
    starField.rotation.x = elapsed * 0.0015 * speedFactor;

    if (isScrolling) return;

    // Calm breathing twinkling effect
    const colorAttr = starGeometry.attributes.color as THREE.BufferAttribute;
    const colArray = colorAttr.array as Float32Array;

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const phase = starTwinklePhases[i];
      const speed = starTwinkleSpeeds[i];
      const baseColor = starBaseColors[i];

      const twinkle = 0.75 + Math.sin(elapsed * speed * speedFactor + phase) * 0.25;
      colArray[i3] = baseColor.r * twinkle;
      colArray[i3 + 1] = baseColor.g * twinkle;
      colArray[i3 + 2] = baseColor.b * twinkle;
    }
    colorAttr.needsUpdate = true;
  };

  const dispose = () => {
    starGeometry.dispose();
    starMaterial.dispose();
  };

  return {
    points: starField,
    update,
    dispose,
  };
}
