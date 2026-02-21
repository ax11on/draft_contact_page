import React from "react";

type Props = {
  children: React.ReactNode;
};

// Minimal no-op provider to satisfy imports.
export function TooltipProvider({ children }: Props) {
  return <>{children}</>;
}
