import * as React from "react";

import { Button } from "@/components/ui/button";
import { inter } from "@/fonts";

export type CounterButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
};

export function CounterButton({
  label,
  onClick,
  className,
  ariaLabel,
}: CounterButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`text-white cursor-pointer ${className} ${inter.className}`}
      aria-label={ariaLabel}
    >
      {label}
    </Button>
  );
}
