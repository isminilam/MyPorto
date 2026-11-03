import React from 'react';

export interface TechIconProps {
  size?: number;
  className?: string;
}

// 1. Python Official Logo
export function PythonIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 255" fill="none" className={className}>
      <defs>
        <linearGradient id="pyGrad1" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.203%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="pyGrad2" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%">
          <stop offset="0%" stopColor="#FFE873" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <path
        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.58 34.475-33.319V28.187S193.899.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
        fill="url(#pyGrad1)"
      />
      <path
        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.71c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.58-34.475 33.32v61.434s4.468 28.474 71.449 28.474zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
        fill="url(#pyGrad2)"
      />
    </svg>
  );
}

// 2. SQL Official / Database Icon
export function SqlIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="#00758F" fillOpacity="0.2" stroke="#00A8CD" strokeWidth="2" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#00A8CD" strokeWidth="2" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#00A8CD" strokeWidth="2" />
      <path d="M12 12v3" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 17h8" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 3. Microsoft Power BI Official Logo
export function PowerBiIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Power BI 3 vertical bars */}
      <rect x="2" y="11" width="5" height="11" rx="1.5" fill="#E6AD10" />
      <rect x="9.5" y="6" width="5" height="16" rx="1.5" fill="#F2C811" />
      <rect x="17" y="2" width="5" height="20" rx="1.5" fill="#F9DE43" />
    </svg>
  );
}

// 4. MySQL Official Logo
export function MySqlIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21.5 15.5c-1.2 0-2.3-.5-3.1-1.3-.9 1.4-2.4 2.3-4.2 2.3-1.8 0-3.3-.9-4.2-2.3-.8.8-1.9 1.3-3.1 1.3-1.9 0-3.5-1.2-4.1-2.9C2.4 11.2 3.3 9.7 4.9 9c.7-.3 1.4-.4 2.1-.4 1.1 0 2.2.4 3 1 .8-.8 1.9-1.3 3.1-1.3 1.2 0 2.3.5 3.1 1.3.8-.6 1.9-1 3-1 .7 0 1.4.1 2.1.4 1.6.7 2.5 2.2 2.1 3.6-.6 1.7-2.2 2.9-4.1 2.9z"
        fill="#00618A"
        fillOpacity="0.15"
      />
      <path
        d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 21l7.03-3.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z"
        stroke="#00758F"
        strokeWidth="1.5"
      />
      <path
        d="M9.5 9c.8 1.5 2 2.5 3.5 3 1.5-.5 2.7-1.5 3.5-3"
        stroke="#F29111"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="9" cy="8" r="1" fill="#00758F" />
      <circle cx="15" cy="8" r="1" fill="#00758F" />
    </svg>
  );
}

// 5. PostgreSQL Official Elephant Logo
export function PostgreSqlIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 16.8c-2.4 0-4.4-1.2-5.4-3 .5-.4 1.2-.6 2.1-.6 1.3 0 2.2.4 3.3.4 1.2 0 2.3-.5 3-1.4.2.3.4.6.6 1-.8 2.2-2.1 3.6-3.6 3.6zm4.8-5.3c-.6.8-1.5 1.3-2.6 1.3-.9 0-1.7-.3-2.8-.3-1.2 0-2.2.3-3.1.8-.1-.4-.2-.8-.2-1.3 0-2.9 2.3-5.3 5.2-5.3.8 0 1.6.2 2.3.5.8.4 1.4 1.1 1.7 1.9.3.8.3 1.6-.5 2.4z"
        fill="#336791"
      />
      <circle cx="14" cy="9.5" r="1.2" fill="#FFFFFF" />
      <path d="M10 12c-1.5 0-2.5 1-3 2.5" stroke="#68A5D6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 6. Microsoft Office 365 Official Logo
export function MicrosoftOfficeIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="9.5" height="9.5" rx="1.5" fill="#F25022" />
      <rect x="12.5" y="2" width="9.5" height="9.5" rx="1.5" fill="#7FBA00" />
      <rect x="2" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#FFB900" />
    </svg>
  );
}

// 6b. Microsoft Excel Official Logo
export function ExcelIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14.5 4H20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5.5V4z" fill="#185C37" />
      <path d="M14.5 4H20a1 1 0 0 1 1 1v3H14.5V4z" fill="#33C481" />
      <path d="M14.5 8H21v4h-6.5V8z" fill="#21A366" />
      <path d="M14.5 12H21v4h-6.5V12z" fill="#107C41" />
      <path d="M14.5 16H21v3a1 1 0 0 1-1 1h-5.5v-4z" fill="#185C37" />
      <rect x="2.5" y="4.5" width="12" height="15" rx="1.5" fill="#107C41" />
      <path
        d="M5.8 8.5h1.6l1.3 2.5 1.3-2.5h1.6l-2.1 3.5 2.2 3.5h-1.6l-1.4-2.5-1.4 2.5H5.7l2.2-3.5L5.8 8.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 7. Google Workspace Official 4-Color Logo
export function GoogleWorkspaceIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Google stylized G / workspace shape */}
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

// 8. Git Official Logo
export function GitIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21.62 10.43 13.57 2.38a2.2 2.2 0 0 0-3.14 0l-1.9 1.9 2.5 2.5a2.6 2.6 0 0 1 3.28 3.33l2.4 2.4a2.6 2.6 0 1 1-1.57 1.53l-2.24-2.24v5.36a2.6 2.6 0 1 1-2.2 0V11.5a2.6 2.6 0 0 1-1.4-3.41L6.85 5.64 2.38 10.11a2.2 2.2 0 0 0 0 3.14l8.05 8.05a2.2 2.2 0 0 0 3.14 0l8.05-8.05a2.2 2.2 0 0 0 0-3.14z"
        fill="#F05032"
      />
    </svg>
  );
}

// 9. GitHub Official Mark
export function GitHubTechIcon({ size = 32, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// 10. React Official Logo
export function ReactIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// 11. JavaScript Official Logo
export function JavaScriptIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M6.5 17.5c.5.8 1.4 1.3 2.5 1.3 1.3 0 2.2-.7 2.2-2.3v-6.5h-1.8v6.4c0 .7-.3 1-1 1-.5 0-.9-.3-1.1-.6l-.8.7zm7.4.2c.8.7 1.9 1.1 3.2 1.1 2.2 0 3.4-1.2 3.4-2.8 0-1.7-1.1-2.4-2.6-3-.9-.4-1.6-.7-1.6-1.3 0-.6.5-1 1.4-1 .8 0 1.5.3 2 .8l.8-.9c-.7-.7-1.6-1-2.8-1-2 0-3.2 1.2-3.2 2.6 0 1.6 1 2.3 2.5 2.9.9.4 1.7.8 1.7 1.4 0 .7-.6 1.2-1.7 1.2-1.1 0-1.9-.4-2.4-1.1l-.8.8z"
        fill="#000000"
      />
    </svg>
  );
}

// 12. TypeScript Official Logo
export function TypeScriptIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M4 8h7v2.2H8.8v6.8H6.5v-6.8H4V8zm9.5 5.5c.6.5 1.3.8 2.2.8 1.4 0 2.2-.7 2.2-1.7 0-1-.7-1.5-1.7-1.9l-.7-.3c-1.3-.5-2.2-1.2-2.2-2.5 0-1.6 1.3-2.6 3.1-2.6 1.2 0 2.2.4 2.9 1.1l-1.1 1.6c-.5-.5-1.1-.8-1.8-.8-.8 0-1.3.4-1.3 1 0 .7.6 1.1 1.6 1.5l.7.3c1.6.6 2.4 1.4 2.4 2.8 0 1.8-1.4 2.8-3.4 2.8-1.4 0-2.6-.5-3.3-1.4l1.1-1.7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 13. Docker Official Logo
export function DockerIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13.98 10.02h1.66V8.36H13.98v1.66zm-2.08 0h1.66V8.36H11.9v1.66zm-2.08 0h1.66V8.36H9.82v1.66zm-2.08 0H9.4V8.36H7.74v1.66zm6.24-2.08h1.66V6.28h-1.66v1.66zm-2.08 0h1.66V6.28H11.9v1.66zm-2.08 0h1.66V6.28H9.82v1.66zm-2.08 0H9.4V6.28H7.74v1.66zm6.24-2.08h1.66V4.2h-1.66v1.66zm8.8 6.55c-.47-.32-1.42-.42-2.18-.18-.15-.65-.55-1.22-1.17-1.63l-.53-.35-.38.52c-.44.6-.62 1.34-.51 2.07-.48.24-1.32.32-2.22.32H2.2c-.3 1.6.14 3.25 1.18 4.54 1.58 1.95 3.93 2.89 7.02 2.89 5.86 0 9.87-3.15 10.96-8.24.57.06 1.42.02 1.83-.55l.2-.29-.39-.1z"
        fill="#2496ED"
      />
    </svg>
  );
}

// 14. Nginx Official Logo
export function NginxIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 1.5L2 7.27v11.46L12 24.5l10-5.77V7.27L12 1.5zm6.5 14.8l-2.8-4.4v4.4h-2.1V7.7h2.1l2.8 4.4V7.7h2.1v8.6h-2.1zM9.9 16.3H7.8L5.5 12V7.7h2.1l2.3 4.3v-4.3h2.1v8.6h-2.1z"
        fill="#009639"
      />
    </svg>
  );
}

// 15. Linux (Tux) Logo
export function LinuxIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="14" rx="6" ry="7" fill="#F4F4F5" stroke="#27272A" strokeWidth="1.2" />
      <ellipse cx="12" cy="7" rx="4.5" ry="4.5" fill="#27272A" />
      <ellipse cx="10.5" cy="6" rx="1.2" ry="1.5" fill="#FFF" />
      <circle cx="10.5" cy="6" r="0.6" fill="#000" />
      <ellipse cx="13.5" cy="6" rx="1.2" ry="1.5" fill="#FFF" />
      <circle cx="13.5" cy="6" r="0.6" fill="#000" />
      <path d="M10 8c0 1.2 1 2 2 2s2-.8 2-2z" fill="#F59E0B" />
      <path d="M6 14c-.8 1.5-.5 4 0 5s2 1 2 1" stroke="#27272A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M18 14c.8 1.5.5 4 0 5s-2 1-2 1" stroke="#27272A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="9.5" cy="21" rx="2.5" ry="1.2" fill="#F59E0B" />
      <ellipse cx="14.5" cy="21" rx="2.5" ry="1.2" fill="#F59E0B" />
    </svg>
  );
}

// 16. Node.js Official Logo
export function NodeJsIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2z" fill="#339933" />
      <path d="M12 5.5l6.5 3.8v7.4L12 20.5l-6.5-3.8V9.3L12 5.5z" fill="#215732" />
      <path
        d="M12 11c-1.5 0-2.5.5-2.5 1.5 0 1.2 1.2 1.5 2.5 1.8 1.8.4 2.5.8 2.5 1.7 0 1.2-1 2-2.5 2-1.4 0-2.3-.6-2.5-1.5l1.4-.4c.2.6.6.9 1.1.9.7 0 1.1-.3 1.1-.8 0-.6-.5-.9-1.5-1.2-1.7-.4-2.5-.9-2.5-1.8 0-1.3 1-2 2.4-2 1.2 0 2 .5 2.3 1.3l-1.3.5c-.2-.4-.5-.5-1-.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 17. Express.js Logo
export function ExpressIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
      <path
        d="M4.5 15.5l3.5-5.5-3.5-5.5h2.2l2.4 3.9 2.4-3.9h2.2L10.2 10l3.5 5.5h-2.2l-2.4-3.9-2.4 3.9H4.5z"
        fill="#FFFFFF"
      />
      <path
        d="M16 12.5c0-1.8 1.2-3 2.8-3s2.7 1.2 2.7 3v.5h-4.2c.1.9.7 1.4 1.6 1.4.7 0 1.2-.3 1.4-.7l1.1.5c-.5.9-1.4 1.4-2.5 1.4-2 0-2.9-1.3-2.9-3.1zm4.2-.7c-.1-.7-.6-1.2-1.4-1.2s-1.3.5-1.4 1.2h2.8z"
        fill="#38BDF8"
      />
    </svg>
  );
}

// 18. Tailwind CSS Official Logo
export function TailwindIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#06B6D4"
      />
    </svg>
  );
}

// 19. Supabase Official Logo
export function SupabaseIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="sbGradient" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#249361" />
        </linearGradient>
      </defs>
      <path
        d="M13.4 22.8c-.8.8-2.1.2-2-.9l1.1-9.9H3.8c-.9 0-1.4-1.1-.8-1.7L12.5 1.2c.8-.8 2.1-.2 2 .9l-1.1 9.9h8.7c.9 0 1.4 1.1.8 1.7L13.4 22.8z"
        fill="url(#sbGradient)"
      />
    </svg>
  );
}

// 20. OpenAI Official Logo
export function OpenAIIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.22-9.61a4.482 4.482 0 0 1 2.342-1.974v5.674a.795.795 0 0 0 .393.681l5.84 3.372-2.02 1.168a.076.076 0 0 1-.065 0L4.03 14.82a4.499 4.499 0 0 1-1.65-6.126zM18.17 12.82l-5.84-3.372 2.02-1.168a.076.076 0 0 1 .065 0l4.839 2.793a4.494 4.494 0 0 1-.692 8.016v-5.588a.79.79 0 0 0-.392-.681zm2.23-3.616l-.14-.085-4.783-2.759a.775.775 0 0 0-.78 0L8.854 9.73V7.397a.079.079 0 0 1 .033-.062l4.84-2.795a4.5 4.5 0 0 1 6.674 4.664zM9.99 13.916l-2.02-1.168a.07.07 0 0 1-.038-.052V7.113a4.49 4.49 0 0 1 7.37-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681v6.737zm1.1-2.524l2.607-1.506 2.608 1.506v3.01l-2.608 1.506-2.607-1.506v-3.01z" />
    </svg>
  );
}

// 21. FastAPI Official Logo
export function FastAPIIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#009688" />
      <path d="M13 3L6 13h5l-1 8 8-11h-5l1-7z" fill="#FFFFFF" />
    </svg>
  );
}

// 22. TensorFlow Official Logo
export function TensorFlowIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L3 7.2v9.6L6 15V8.8l6-3.4 6 3.4V15l3 1.8V7.2L12 2z" fill="#FF6F00" />
      <path d="M10.5 9.2v12.6l3 1.7V9.2l-3 0z" fill="#FFA000" />
      <path d="M6 10.5l4.5 2.6v3.2L6 13.7v-3.2zm12 0l-4.5 2.6v3.2l4.5-2.6v-3.2z" fill="#FF6F00" />
    </svg>
  );
}

// 23. HTML5 Official Logo
export function HtmlIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3z" fill="#E34F26" />
      <path d="M12 3.8v16.9l5.8-1.8 1.3-15.1H12z" fill="#EF652A" />
      <path d="M12 7.7H7.3l.3 3.3H12v-3.3zm0 6.6H9.7l-.2-2.1H7.4l.4 4.5 4.2 1.2V14.3zM12 7.7v3.3h4.4l-.4 4.4-4 1.1v2.3l6.2-1.7.9-9.4H12z" fill="#FFFFFF" />
    </svg>
  );
}

// 24. Streamlit Official Logo
export function StreamlitIcon({ size = 20, className = '' }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14.5 6.5L19 14.5H10l4.5-8zm-5 4L14 18.5H5l4.5-8zm7 4.5l2.5 4H14l2.5-4z" fill="#FF4B4B" />
    </svg>
  );
}

/**
 * Helper component: Maps any technology tag name to its official brand icon
 */
export function TechTagIcon({ name, size = 14, className = '' }: { name: string; size?: number; className?: string }) {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes('python')) return <PythonIcon size={size} className={className} />;
  if (normalized.includes('react')) return <ReactIcon size={size} className={className} />;
  if (normalized.includes('express')) return <ExpressIcon size={size} className={className} />;
  if (normalized.includes('postgres')) return <PostgreSqlIcon size={size} className={className} />;
  if (normalized.includes('docker')) return <DockerIcon size={size} className={className} />;
  if (normalized.includes('nginx')) return <NginxIcon size={size} className={className} />;
  if (normalized.includes('linux')) return <LinuxIcon size={size} className={className} />;
  if (normalized.includes('node')) return <NodeJsIcon size={size} className={className} />;
  if (normalized.includes('tailwind')) return <TailwindIcon size={size} className={className} />;
  if (normalized.includes('supabase')) return <SupabaseIcon size={size} className={className} />;
  if (normalized.includes('openai')) return <OpenAIIcon size={size} className={`text-emerald-400 ${className}`} />;
  if (normalized.includes('typescript') || normalized === 'ts') return <TypeScriptIcon size={size} className={className} />;
  if (normalized.includes('javascript') || normalized === 'js') return <JavaScriptIcon size={size} className={className} />;
  if (normalized.includes('fastapi')) return <FastAPIIcon size={size} className={className} />;
  if (normalized.includes('tensorflow')) return <TensorFlowIcon size={size} className={className} />;
  if (normalized.includes('power bi')) return <PowerBiIcon size={size} className={className} />;
  if (normalized.includes('excel')) return <ExcelIcon size={size} className={className} />;
  if (normalized.includes('streamlit')) return <StreamlitIcon size={size} className={className} />;
  if (normalized.includes('html')) return <HtmlIcon size={size} className={className} />;
  if (normalized.includes('git')) return <GitIcon size={size} className={className} />;
  if (normalized.includes('sql') || normalized.includes('mysql')) return <MySqlIcon size={size} className={className} />;

  return null;
}
