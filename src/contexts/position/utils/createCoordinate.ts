import { Position } from "@constants/position.constant";
import { Component } from "@contexts/interfaces/components.interface";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { findColumn } from "@utils/positions";

interface CreateCoordinateParams {
  component: Component<Producer> | Component<Exchange> | Component<Queue> | Component<Consumer>;
  positionsIndexes: number[];
  indexPosition: number;
  positionsQuantityIndexes: number;
  row?: number;
}

export function createCoordinate({ indexPosition, component }: CreateCoordinateParams): Position {
  // const x = row + indexPosition; linear positions
  const x = indexPosition % component.quantity;
  const y = findColumn(component.quantity, indexPosition)
  const z = component.depth
  const position: Position = [x, y, z]
  return position
}