type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
});

export function GitHubIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function MailIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export function DownloadIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" />
    </svg>
  );
}

export function ExternalIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export function PinIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function DocIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

export function SunIcon({ size = 17 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon({ size = 17 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

export function PhoneIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function GlobeIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}

// Iconos de línea para grupos y tecnologías sin logo oficial
const line = (size: number) => ({
  ...base(size),
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function CodeIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  );
}

export function CubeIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <path d="M12 2.5 3.5 7v10l8.5 4.5 8.5-4.5V7L12 2.5Z" />
      <path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
    </svg>
  );
}

export function DevicesIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <rect x="2" y="4" width="15" height="11" rx="1.5" />
      <path d="M6 19h7M9.5 15v4" />
      <rect x="16" y="9" width="6" height="11" rx="1.2" />
    </svg>
  );
}

export function DatabaseIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}

export function SparklesIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <path d="M10 3.5 11.6 8a2 2 0 0 0 1.4 1.4l4.5 1.6-4.5 1.6a2 2 0 0 0-1.4 1.4L10 18.5 8.4 14a2 2 0 0 0-1.4-1.4L2.5 11 7 9.4A2 2 0 0 0 8.4 8L10 3.5ZM18.5 2.5v4M16.5 4.5h4M19 16v3M17.5 17.5h3" />
    </svg>
  );
}

export function TranslateIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <path d="M3 5h9M7.5 3v2M5 5c.8 3.4 3 6 6 7.5M10 5c-.8 3.6-3.2 6.6-7 8.5M12.5 21l4-9 4 9M14 18h5" />
    </svg>
  );
}

export function ChipIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <path d="M9.5 9.5h5v5h-5zM9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
    </svg>
  );
}

export function NodesIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <rect x="2.5" y="4" width="7" height="5.5" rx="1.2" />
      <rect x="14.5" y="14.5" width="7" height="5.5" rx="1.2" />
      <rect x="14.5" y="4" width="7" height="5.5" rx="1.2" />
      <path d="M9.5 6.8h5M9.5 6.8c3 0 2 10.4 5 10.4" />
    </svg>
  );
}

export function NetworkIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <rect x="9" y="2.5" width="6" height="5" rx="1" />
      <rect x="2.5" y="16.5" width="6" height="5" rx="1" />
      <rect x="15.5" y="16.5" width="6" height="5" rx="1" />
      <path d="M12 7.5v4.5M5.5 16.5V12h13v4.5" />
    </svg>
  );
}

export function HashIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <path d="M12 2.5 3.8 7.2v9.6L12 21.5l8.2-4.7V7.2L12 2.5Z" />
      <path d="M10.3 8.5 9.3 15.5M14.7 8.5l-1 7M8.5 10.5h7M8.3 13.5h7" />
    </svg>
  );
}

export function BriefcaseIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8.5 7V5a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 5v2M2.5 12.5h19" />
    </svg>
  );
}

export function CapIcon({ size = 16 }: IconProps) {
  return (
    <svg {...line(size)}>
      <path d="M12 4 1.5 9 12 14l10.5-5L12 4Z" />
      <path d="M6 11.2V16c0 1.3 2.7 3 6 3s6-1.7 6-3v-4.8M21 9.5v5" />
    </svg>
  );
}
