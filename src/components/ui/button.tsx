import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-500 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-rajdhani font-semibold tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-primary/20 before:to-primary-glow/20 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 relative overflow-hidden",
        destructive:
          "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground hover:shadow-2xl hover:shadow-destructive/40 hover:-translate-y-1 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-destructive/20 before:to-red-600/20 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 relative overflow-hidden",
        outline:
          "border-2 border-primary/30 bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-primary/10 before:to-primary-glow/10 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 relative overflow-hidden",
        secondary:
          "bg-gradient-to-r from-secondary to-accent text-secondary-foreground hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-1 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-secondary/20 before:to-accent/20 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 relative overflow-hidden",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground hover:shadow-lg hover:-translate-y-0.5 backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-primary-glow after:transition-all after:duration-300 hover:after:w-full",
        premium: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold hover:shadow-2xl hover:shadow-yellow-500/40 hover:-translate-y-1 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-yellow-400/30 before:to-yellow-600/30 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 relative overflow-hidden",
        glass: "bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 before:absolute before:inset-0 before:rounded-xl before:bg-white/5 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 relative overflow-hidden",
        neon: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-cyan-400/30 before:to-blue-500/30 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 relative overflow-hidden animate-pulse",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-lg",
        xl: "h-16 rounded-2xl px-12 text-xl",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
