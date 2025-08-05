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
        rainbow: "bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-green-500 text-white hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 hover:rotate-1 bg-[length:200%_200%] animate-[gradient_3s_ease_infinite] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-pink-400/30 before:to-green-400/30 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 relative overflow-hidden",
        cosmic: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white border border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/60 hover:-translate-y-2 hover:scale-110 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-indigo-400/20 before:to-pink-400/20 before:blur-xl before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-700 relative overflow-hidden after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500",
        fire: "bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 text-white hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 hover:skew-x-2 bg-[length:200%_200%] animate-[gradient_2s_ease_infinite] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-orange-400/40 before:to-yellow-400/40 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 relative overflow-hidden",
        diamond: "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white border-2 border-gray-400/50 hover:border-white hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1 hover:rotate-2 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/10 before:to-gray-300/10 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 relative overflow-hidden after:absolute after:top-1/4 after:left-1/4 after:w-1/2 after:h-1/2 after:bg-gradient-to-br after:from-white/20 after:to-transparent after:rounded-full after:blur-sm after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
        electric: "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white hover:shadow-2xl hover:shadow-blue-500/60 hover:-translate-y-1 bg-[length:200%_200%] animate-[gradient_1.5s_ease_infinite] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-400/30 before:to-purple-400/30 before:blur-lg before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 relative overflow-hidden after:absolute after:inset-0 after:bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.3)_50%,transparent_70%)] after:transform after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-700",
      },
      size: {
        tiny: "h-5 rounded px-1.5 text-[10px]",
        xs: "h-6 rounded-md px-2 text-xs",
        sm: "h-7 rounded-lg px-2.5 text-xs",
        default: "h-8 px-4 py-1.5 text-sm",
        lg: "h-10 rounded-xl px-6 text-base",
        xl: "h-12 rounded-2xl px-8 text-lg",
        icon: "h-6 w-6",
        "icon-sm": "h-5 w-5",
        "icon-tiny": "h-4 w-4",
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
