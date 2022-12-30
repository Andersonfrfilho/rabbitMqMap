import { Binding } from "./binding.interface"
import { Consumer } from "./consumer.interface"
import { ComponentWithPosition } from "@contexts/position/functions/definePositionsComponents"

type ArgumentsQueue = {
  "x-queue-type": string
}

export type Queue = {
  arguments: ArgumentsQueue,
  name: string,
  node: string,
  type: string,
  vhost: string
}

export interface BindingWithPosition extends Binding {
  position: ComponentWithPosition;
  id: string;
}

export interface ConsumerWithPosition extends Consumer {
  position: ComponentWithPosition;
  id: string;
}

export interface QueueBindingConsumers extends Queue {
  bindings: Binding[];
  consumers_register: Consumer[];
}