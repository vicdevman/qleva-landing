import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
          variant === "default" &&
            "bg-foreground text-background hover:bg-foreground/90",
          variant === "outline" &&
            "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5",
          variant === "ghost" &&
            "bg-transparent text-foreground hover:bg-foreground/5",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
