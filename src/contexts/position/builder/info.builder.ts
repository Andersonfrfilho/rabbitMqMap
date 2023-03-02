import { ComponentsPositions } from "@contexts/interfaces/components.interface";
import { Info } from "@contexts/interfaces/positions.interface";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";

export function infoProducer({ user, type }: Producer): Info {
  return {
    name: user,
    type,
    componentType: COMPONENT_INFO_TYPE.PRODUCER,
  }
}

export function infoExchange({ name, type }: Exchange): Info {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.EXCHANGE,
  }
}

export function infoQueue({ name, type }: Queue): Info {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.QUEUE,
  }
}

export function infoConsumer({ channel_details: { user }, queue: { name } }: Consumer): Info {
  console.log(user, name)
  return {
    name,
    type: user,
    componentType: COMPONENT_INFO_TYPE.CONSUMER,
  }
}


interface BuilderComponentParams {
  componentName: COMPONENT_INFO_TYPE;
  data: Queue | Producer | Exchange | Consumer;
}

export function builderInfoComponent({ componentName, data }: BuilderComponentParams): Info {
  switch (componentName) {
    case COMPONENT_INFO_TYPE.PRODUCER:
      return infoProducer(data as Producer)
    case COMPONENT_INFO_TYPE.EXCHANGE:
      return infoExchange(data as Exchange)
    case COMPONENT_INFO_TYPE.QUEUE:
      return infoQueue(data as Queue)
    case COMPONENT_INFO_TYPE.CONSUMER:
      return infoConsumer(data as Consumer)
    default:
      throw new Error("not component info type define found!");
  }
}

