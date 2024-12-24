import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[25px] [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white hover:bg-accent/90 [&_svg]:fill-white rounded-2xl",
        rounded:
          "bg-accent text-white hover:bg-accent/90 rounded-full [&_svg]:fill-white",
        secondary: "bg-background hover:bg-background/90 [&_svg]:fill-text",
        secondaryRounded:
          "bg-background hover:bg-background-hover rounded-full [&_svg]:fill-text",
        shadowRounded:
          "bg-white hover:bg-white/90 rounded-full shadow [&_svg]:fill-text",
        icon: "[&_svg]:fill-text-accent",
      },
      size: {
        default: "h-[40px] sm:h-[50px] px-6 py-2",
        icon: "size-[40px] sm:size-[50px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
