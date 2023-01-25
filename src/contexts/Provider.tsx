import React from "react";
import { PositionState } from "@contexts/position/Position.context";
import { SchemaState } from "./schema/Schema.context";
import { ComponentState } from "./components/Component.context";

type ProviderStateProps = {
  children: React.ReactNode;
};

export function ProviderStates({ children }: ProviderStateProps) {
  return (
    <SchemaState>
      <ComponentState>
        <PositionState>
          {children}
        </PositionState>
      </ComponentState>
    </SchemaState>
  )
}