"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none",
    "transition-all duration-300", // smooth background & text transitions
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-colors [&_svg]:duration-300", // smooth icon color transition
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-[#ececec]", // light gray background matching Mn SUPER™ theme
          "hover:bg-[#5aa338]/20", // subtle darker green hover overlay
          "data-[state=on]:bg-[#6abf4b]", // primary green active background
          "data-[state=on]:text-white", // white text on active state
          "data-[state=on]:[&_svg]:text-white", // white icon on active state
          "hover:[&_svg]:text-[#5aa338]", // darker green icon on hover
        ].join(" "),
        outline: [
          "border border-[#6abf4b]", // primary green border
          "bg-transparent",
          "hover:bg-[#5aa338]/20", // subtle darker green hover overlay
          "data-[state=on]:bg-[#6abf4b]", // primary green active background
          "data-[state=on]:text-white", // white text on active state
          "data-[state=on]:[&_svg]:text-white", // white icon on active state
          "hover:[&_svg]:text-[#5aa338]", // darker green icon on hover
        ].join(" "),
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
