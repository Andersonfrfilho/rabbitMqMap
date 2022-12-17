import React from "react";
import { PositionState } from "@contexts/position/Position.context";
import { RabbiMqState } from "./rabbitmq/RabbitMq.context";

type ProviderStateProps = {
  children: React.ReactNode;
};

export function ProviderStates({ children }: ProviderStateProps) {
  return (
    <PositionState><RabbiMqState>{children}</RabbiMqState></PositionState>
  )
}