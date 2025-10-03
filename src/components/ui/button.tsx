import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-electric-blue text-white hover:bg-blue-700 shadow-sm hover:shadow-md',
        destructive:
          'bg-red text-white hover:bg-red-700 shadow-sm hover:shadow-md',
        outline:
          'border border-deep-navy bg-white text-deep-navy hover:bg-light-gray dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white/10',
        secondary:
          'bg-light-gray text-deep-navy hover:bg-gray-200 dark:bg-deep-navy dark:text-white dark:hover:bg-gray-700',
        ghost: 'hover:bg-light-gray hover:text-deep-navy dark:hover:bg-deep-navy dark:hover:text-white',
        link: 'text-electric-blue underline-offset-4 hover:underline hover:text-blue-700 dark:text-teal-green dark:hover:text-teal-400',
        success: 'bg-teal-green text-white hover:bg-teal-700 shadow-sm hover:shadow-md',
        warning: 'bg-amber text-white hover:bg-amber-600 shadow-sm hover:shadow-md',
        info: 'bg-info text-white hover:bg-blue-700 shadow-sm hover:shadow-md',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
