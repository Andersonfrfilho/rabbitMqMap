import { Component } from "@contexts/interfaces/components.interface";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";

interface VerifyFourDirectionHasElementInPositionParams {
  component: Component<Producer> | Component<Exchange> | Component<Queue> | Component<Consumer>;
  positionsIndexes: number[];
  indexPosition: number;
  positionsQuantityIndexes: number;
  row: number;
}

export function verifyFourDirectionHasElement({ component, positionsQuantityIndexes, positionsIndexes, indexPosition, row }: VerifyFourDirectionHasElementInPositionParams): boolean {
  const anteriorPositionHasElement = positionsIndexes.some(indexCurrentPosition => indexPosition > 0 && indexPosition - 1 === indexCurrentPosition)
  const posteriorPositionHasElement = positionsIndexes.some(indexCurrentPosition => indexPosition < positionsQuantityIndexes - 1 && (indexPosition + 1) === indexCurrentPosition)
  const upPositionHasElement = positionsIndexes.some(indexCurrentPosition => {
    return indexPosition >= component.quantity && (indexPosition - component.quantity) === indexCurrentPosition
  })
  const downPositionHasElement = positionsIndexes.some(indexCurrentPosition => row < component.quantity - 1 && (indexPosition + component.quantity) === indexCurrentPosition)

  return anteriorPositionHasElement || posteriorPositionHasElement || upPositionHasElement || downPositionHasElement
}