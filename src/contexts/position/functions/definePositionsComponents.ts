import { v4 as uuidV4 } from 'uuid';
import { ComponentsPositions } from "@contexts/interfaces/components.interface";
import { Exchange, ExchangePosition, } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer, ProducerPosition, } from "@services/rabbitmq/interfaces/producer.interface";
import { QueueBindingConsumerRegister, QueueBindingConsumerRegisterPosition } from "@services/rabbitmq/interfaces/queue.interface";
import { Position } from '@contexts/interfaces/positions.interface';

export interface DefinePositionsComponentsParams {
  queues: QueueBindingConsumerRegister[];
  positions: ComponentsPositions;
  producers: Producer[];
  exchanges: Exchange[];
}

export interface DefinePositionsComponentsResult { queues: QueueBindingConsumerRegisterPosition[], exchanges: ExchangePosition[], producers: ProducerPosition[] }

export const definePositionsComponents = ({ queues, positions, producers, exchanges }: DefinePositionsComponentsParams): DefinePositionsComponentsResult => {
  const producerPositions = positions.producer

  const exchangePositions = positions.exchange
  const consumerPositions = positions.consumer

  const exchangeWithPosition = exchanges.map(exchange => {
    const position = exchangePositions[0]
    exchangePositions.shift()
    return {
      id: uuidV4(),
      ...exchange,
      position
    }
  })

  const queuesWithPositions: QueueBindingConsumerRegisterPosition[] = queues.map((queue, index) => ({
    ...queue,
    id: uuidV4(),
    position: positions.queue[index],
    bindings: queue.bindings.map(binding => {
      const position = exchangeWithPosition.find(exchange => exchange.name === binding.source)?.position || {} as Position
      return {
        ...binding,
        position,
        id: uuidV4()
      }
    }),
    consumers_register: queue.consumers_register.map(consumer => {
      const position = consumerPositions[0]
      consumerPositions.shift()
      return {
        ...consumer,
        position,
        id: uuidV4()
      }
    })
  }))



  const producerWithPositions = producers.map((producer) => {
    const position = producerPositions[0]
    producerPositions.shift()
    return {
      ...producer,
      position: position
    }
  })

  return { queues: queuesWithPositions, exchanges: exchangeWithPosition, producers: producerWithPositions }
}



// interface MakeVerticeInfoPosition {
//   position: Position;
//   name: string;
//   destination?: string;
//   destinationType?: string;
//   routingKey?: string;
// }
// interface MakeVerticesCoordinatesSeparation {
//   initialPosition: MakeVerticeInfoPosition;
//   lastPosition: MakeVerticeInfoPosition;
// }
// interface MakePointsByNumberSeparation {
//   initialPosition: MakeVerticeInfoPosition;
//   lastPosition: MakeVerticeInfoPosition;
//   numberPoints: number;
// }



// interface MakePointsByNumberSeparationResult {
//   id: string; position: Position; info?: InfoParent;
// }


// export interface GetLinksLinesDTO { componentLinks: DefineLinksBetweenComponentsResult[]; componentType: COMPONENT_TYPE; }

// interface GetLinkLinesInfo {
//   children: string;
//   father: string;
// }
// export interface GetLinksLinesResult {
//   id: string;
//   positions: Position[];
//   info?: GetLinkLinesInfo | InfoParent | undefined
// }



// export interface GetLinksPointsDTO { componentLinks: DefineLinksBetweenComponentsResult[]; componentType: COMPONENT_TYPE; }

// export interface GetPointsLinesResult extends GetLinksLinesResult { }


// export interface GetPositionsDTO {
//   components: QueueWithPosition[]
//   componentType: COMPONENT_TYPE
// }


// export interface DefineMessagePositionsParams extends DefineComponentsResult { }



// interface GetPointsBetweenTwoCoordinatesParams {
//   initialPosition: ComponentWithPosition;
//   lastPosition: ComponentWithPosition;
//   payload: any;
//   numberPoints?: number
// }



// interface GetQueueByTypeExchangeDTO {
//   type: Type;
//   queue: QueueWithPosition;
// }
