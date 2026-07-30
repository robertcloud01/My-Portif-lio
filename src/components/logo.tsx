import { cn } from '@/lib/utils';

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Valhallas TechForge logomark.
 * A monogram "V" split by a forward slash — nods to the brand name (V)
 * and to code/engineering (the slash), set in a gradient badge.
 */
export function Logo({ size = 36, className }: LogoProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#6366F1] to-[#A78BFA] shadow-lg shadow-[#6366F1]/25',
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.56}
        height={size * 0.56}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 4.5L10.6 18.5C11.1 19.47 12.5 19.47 13 18.5L20.1 4.5"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.2 4.5L15.6 4.5"
          stroke="white"
          strokeOpacity="0.55"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
