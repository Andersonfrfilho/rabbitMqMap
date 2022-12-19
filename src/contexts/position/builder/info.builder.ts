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

//Exchange[] | Producer[] | Consumer[] | Queue[]
export function infoExchange({ name, type }: Exchange): ComponentInfo {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.exchange,
  }
}

export function infoProducer({ name, type }: Producer): ComponentInfo {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.producer,
  }
}

export function infoConsumer({ channel_details: { name, user } }: Consumer): ComponentInfo {
  return {
    name,
    type: user,
    componentType: COMPONENT_INFO_TYPE.consumer,
  }
}

export function infoQueue({ name, type }: Queue): ComponentInfo {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.consumer,
  }
}