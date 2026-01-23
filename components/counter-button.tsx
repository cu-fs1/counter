import * as React from "react";

import { Button } from "@/components/ui/button";

export type CounterButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
};

export function CounterButton({
  label,
  onClick,
  className,
  disabled,
  ariaLabel,
}: CounterButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {label}
    </Button>
  );
}
