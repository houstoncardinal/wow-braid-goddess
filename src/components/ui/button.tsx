import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground shadow-lg hover:bg-destructive/90 hover:shadow-xl transition-all duration-300",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-lg transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80 hover:shadow-lg transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        luxury: "bg-gradient-to-r from-gold via-gold-light to-terracotta text-white font-bold shadow-luxury hover:shadow-premium hover:scale-105 transition-all duration-500 relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:left-[100%] before:transition-all before:duration-700",
        premium: "bg-gradient-to-r from-deep-brown via-terracotta to-gold text-white font-bold shadow-premium hover:shadow-luxury hover:scale-105 transition-all duration-500 backdrop-blur-sm",
        hero: "bg-gradient-to-r from-gold to-terracotta text-white font-bold shadow-luxury hover:shadow-premium hover:scale-105 transition-all duration-500 relative overflow-hidden",
        "outline-hero": "border-2 border-white/30 bg-white/10 text-white font-bold backdrop-blur-sm hover:bg-white/20 hover:border-white/50 hover:shadow-glow transition-all duration-500",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-glass hover:bg-white/20 hover:shadow-premium transition-all duration-500",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-lg",
        xl: "h-16 rounded-xl px-12 text-xl",
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
