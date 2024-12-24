import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the variant styles for the input using `class-variance-authority`
const inputVariants = cva(
  "flex h-[50px] w-full rounded-md px-5 py-2 border focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-background placeholder:text-text-input rounded-full border-transparent hover:bg-background-hover focus:bg-white focus:border-border outline-none transition duration-150 ease-in-out",
        outline: "bg-white rounded-2xl",
      },
      hasPrefix: {
        true: "pl-[60px]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hasPrefix: false,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix">,
    VariantProps<typeof inputVariants> {
  className?: string; // Classes for the wrapper `<div>`
  inputClassName?: string; // Classes for the `<input>` element
  prefix?: React.ReactNode; // Optional prefix element (e.g., an icon)
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      type = "text",
      variant,
      prefix,
      hasPrefix,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn("relative flex items-center text-text-input", className)}
      >
        {prefix && (
          <span className="absolute left-6 flex items-center pointer-events-none [&_svg]:fill-text">
            {prefix}
          </span>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ variant, hasPrefix: !!prefix }),
            inputClassName
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
