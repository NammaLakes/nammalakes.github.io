import React from "react";
import { ArrowRight } from "lucide-react";
import { Book } from "lucide-react";
import { cn } from "@/lib/utils";
interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: "arrow" | "book";
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, icon = "arrow", ...props }, ref) => {
  const Icon = icon === "book" ? Book : ArrowRight;
  
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full bg-background p-2 px-6 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8] bg-blue-600"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 bg-blue-600">
        <span>{children}</span>
        <Icon />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
