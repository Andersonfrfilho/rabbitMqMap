import React from "react";
import { PositionState } from "@contexts/position/Position.context";

type ProviderStateProps = {
  children: React.ReactNode;
};

export function ProviderStates({ children }: ProviderStateProps) {
  return (
    <PositionState>{children}</PositionState>
  )
}