import { DEPTH } from "@enums/positions.enum";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Position } from "./positions.interface";

export interface Dimension {
  width: number;
  height: number;
  depth: number;
}

export interface Component<T> {
  quantity: number;
  depth: DEPTH;
  dimension: Dimension;
  items: T[];
}

export interface Components {
  producer: Component<Producer>;
  exchange: Component<Exchange>;
  queue: Component<Queue>;
  consumer: Component<Consumer>;
}

export interface ComponentsPositions {
  producer: Position[];
  exchange: Position[];
  queue: Position[];
  consumer: Position[];
}

