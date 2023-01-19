import React from "react";
import { PositionState } from "@contexts/position/Position.context";
import { SchemaState } from "./schema/Schema.context";

type ProviderStateProps = {
  children: React.ReactNode;
};

export function ProviderStates({ children }: ProviderStateProps) {
  return (
    <SchemaState>
      <PositionState>
        {children}
      </PositionState>
    </SchemaState>
  )
}