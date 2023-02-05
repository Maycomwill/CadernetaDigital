import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  version?: "PRIMARY" | "SECONDARY";
  size?: "xsm" | "sm" | "md" | "lg";
  textSize?: "xsm" | "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  textSize,
  version = "PRIMARY",
  size = "md",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "bg-green-500 rounded font-semibold text-gray-900 w-full transition-colors outline-none focus:ring-2 ring-gray-100 hover:bg-green-300 flex items-center justify-center",
        {
          "py px-1": size === "xsm",
          "py-1 px-2": size === "sm",
          "py-3 px-4": size === "md",
          "py-4 px-6": size === "lg",
        },
        {
          "text-xxs md:text-xsm": textSize === "xsm",
          "text-xsm md:text-sm": textSize === "sm",
          "text-sm md:text-md": textSize === "md",
          "text-md md:text-lg": textSize === "lg",
        },
        {
          "bg-red-500": version === "SECONDARY",
          "hover:bg-red-800": version === "SECONDARY",
          "ring-red-300": version === "SECONDARY",
          "text-gray-100": version === "SECONDARY",
        },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
