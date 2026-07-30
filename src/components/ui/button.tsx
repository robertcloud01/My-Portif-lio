import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-[#6366F1] text-white hover:bg-[#4F46E5] shadow-xl shadow-[#6366F1]/30 hover:shadow-[#6366F1]/40',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-[#1E1E2E] bg-transparent hover:bg-[#0A0A14] text-[#F0F0F5] hover:border-[#6366F1]/40',
        secondary: 'bg-[#0A0A14] text-[#F0F0F5] hover:bg-[#1E1E2E] border border-[#1E1E2E]',
        ghost: 'hover:bg-[#0A0A14] text-[#F0F0F5]',
        link: 'text-[#6366F1] underline-offset-4 hover:underline',
        premium: 'bg-gradient-to-r from-[#6366F1] to-[#A78BFA] text-white shadow-xl shadow-[#6366F1]/40 hover:shadow-[#6366F1]/50 hover:scale-[1.02] active:scale-[0.98]',
        accent: 'bg-[#A78BFA]/10 text-[#A78BFA] hover:bg-[#A78BFA]/20 border border-[#A78BFA]/20',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 rounded-lg px-3',
        lg: 'h-13 rounded-xl px-9 text-base',
        xl: 'h-15 rounded-2xl px-12 text-lg',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Shine effect on hover */}
        <span className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <span className="absolute -left-[20%] top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shine"></span>
        </span>
        <span className="relative z-10">{props.children}</span>
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
