import { COMPONENT_INFO_TYPE } from "@enums/positions.enum";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";

export interface ComponentInfo {
  name: string;
  type?: string;
  componentType: COMPONENT_INFO_TYPE;
}

export function infoExchange({ name, type }: Exchange): ComponentInfo {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.EXCHANGE,
  }
}

export function infoProducer({ name, type }: Producer): ComponentInfo {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.PRODUCER,
  }
}

export function infoConsumer({ channel_details: { name, user } }: Consumer): ComponentInfo {
  return {
    name,
    type: user,
    componentType: COMPONENT_INFO_TYPE.CONSUMER,
  }
}

export function infoQueue({ name, type }: Queue): ComponentInfo {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.QUEUE,
  }
}

export const builder = {
  producer: infoProducer,
  exchange: infoExchange,
  queue: infoQueue,
  consumer: infoConsumer
}
