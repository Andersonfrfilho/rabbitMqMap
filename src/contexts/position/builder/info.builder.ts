import { COMPONENT_INFO_TYPE } from "@enums/components.enum";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { PositionComponents } from "../functions/definePositionsComponents";

export function infoExchange({ name, type }: Exchange): PositionComponents {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.EXCHANGE,
  }
}

export function infoProducer({ user, type }: Producer): PositionComponents {
  return {
    name: user,
    type,
    componentType: COMPONENT_INFO_TYPE.PRODUCER,
  }
}

export function infoConsumer({ channel_details: { user }, queue: { name } }: Consumer): PositionComponents {
  return {
    name,
    type: user,
    componentType: COMPONENT_INFO_TYPE.CONSUMER,
  }
}

export function infoQueue({ name, type }: Queue): PositionComponents {
  return {
    name,
    type,
    componentType: COMPONENT_INFO_TYPE.QUEUE,
  }
}

interface BuilderComponentParams {
  componentName: keyof PositionComponents;
  data: Queue & Producer & Exchange & Consumer;
}

export function builderInfoComponent({ componentName, data }: BuilderComponentParams): ComponentInfo {
  switch (componentName) {
    case COMPONENT_INFO_TYPE.PRODUCER:
      return infoProducer(data)
    case COMPONENT_INFO_TYPE.EXCHANGE:
      return infoExchange(data)
    case COMPONENT_INFO_TYPE.QUEUE:
      return infoQueue(data)
    case COMPONENT_INFO_TYPE.CONSUMER:
      return infoConsumer(data)
    default:
      throw new Error("not component info type define found!");
  }
}

