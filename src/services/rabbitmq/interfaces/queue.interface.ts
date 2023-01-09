import { PropertyPosition } from "@contexts/interfaces/positions.interface"
import { Binding, BindingPosition, BindingPositionLines, PropertyBindings } from "./binding.interface"
import { ConsumerPosition, ConsumerPositionLines, PropertyConsumersRegister } from "./consumer.interface"

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

export interface QueueBindingConsumerRegister extends Queue, PropertyBindings, PropertyConsumersRegister { }

export interface QueueBindingConsumerRegisterPosition extends QueueBindingConsumerRegister, PropertyPosition {
  bindings: BindingPosition[];
  consumers_register: ConsumerPosition[];
}

export interface QueueBindingConsumerRegisterPositionLines extends QueueBindingConsumerRegisterPosition {
  bindings: BindingPositionLines[];
  consumers_register: ConsumerPositionLines[];
}