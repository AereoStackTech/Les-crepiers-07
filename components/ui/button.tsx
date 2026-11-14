import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream-batter disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-espresso-dark text-cream-batter hover:bg-espresso-dark/90',
        whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp/90 shadow-sm',
        caramel: 'bg-caramel-gold text-white hover:bg-caramel-gold/90',
        outline:
          'border border-espresso-dark/15 bg-transparent text-espresso-dark hover:bg-espresso-dark/5',
        ghost: 'text-espresso-dark hover:bg-espresso-dark/5',
      },
      size: {
        default: 'min-h-11 px-5 py-2.5',
        sm: 'min-h-9 px-3.5 py-2 text-xs',
        lg: 'min-h-12 px-6 py-3 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { buttonVariants };
