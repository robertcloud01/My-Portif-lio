import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'group relative overflow-hidden rounded-2xl border border-[#1E1E2E] bg-[#0A0A14]/80 backdrop-blur-sm p-6 transition-all duration-500 hover:border-[#6366F1]/40 hover:bg-[#0A0A14]',
      className
    )}
    {...props}
  >
    {/* Gradient border effect on hover */}
    <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366F1] via-[#A78BFA] to-[#06B6D4] opacity-20 blur-sm"></div>
    </div>
    
    {/* Subtle glow effect */}
    <div className="absolute -inset-40 bg-gradient-to-r from-[#6366F1]/5 to-[#A78BFA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    
    {/* Content */}
    <div className="relative z-10">
      {children}
    </div>
  </div>
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 pb-4', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-xl font-bold leading-tight tracking-tight text-white group-hover:text-[#F0F0F5] transition-colors duration-300', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm text-[#8888A0] leading-relaxed', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center pt-4', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
