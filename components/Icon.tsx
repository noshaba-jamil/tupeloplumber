export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const props = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.75, viewBox: "0 0 24 24" };
  switch (name) {
    case "wrench":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L4 16.7 7.3 20l5.3-5.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2-2 2.6-2.6Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "droplet":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 3s6 6.5 6 10.5a6 6 0 1 1-12 0C6 9.5 12 3 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "flame":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 3c1 3-3 4-3 7a3 3 0 1 0 6 0c1 1 1.5 2.3 1.5 3.5A4.5 4.5 0 0 1 12 18a5 5 0 0 1-5-5c0-4 3-5 5-10Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "pipe":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M4 8h9a4 4 0 0 1 4 4v4M4 8V5m0 3v3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17" cy="17" r="2.2" />
        </svg>
      );
    case "home":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M4 11.5 12 4l8 7.5M6 10v9h12v-9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "building":
      return (
        <svg {...props} aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" rx="1" />
          <path d="M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" strokeLinecap="round" />
        </svg>
      );
    case "alert":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 3 2 20h20L12 3Z" strokeLinejoin="round" />
          <path d="M12 10v4" strokeLinecap="round" />
          <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...props} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 12 15 8" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" strokeLinejoin="round" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg {...props} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

// Maps a service cluster to a representative icon — used in place of photography
// until real, licensed business photos are available.
export function clusterIcon(cluster: string): string {
  switch (cluster) {
    case "Core Plumbing":
      return "wrench";
    case "Drain & Sewer":
      return "pipe";
    case "Water Heaters":
      return "flame";
    case "Leaks & Pipes":
      return "droplet";
    case "Fixtures":
      return "home";
    case "Specialized":
      return "shield";
    default:
      return "wrench";
  }
}