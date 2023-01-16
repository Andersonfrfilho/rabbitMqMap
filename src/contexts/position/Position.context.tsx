import React, { useContext } from 'react'
import { GetQueuePositionsParams, getQueuePositionsCoordinates } from './utils/getQueuePositionsCoordinates';
import { Position } from '@contexts/interfaces/positions.interface';
import { CreatePositionsComponentsParams, createPositionsComponents } from './functions/createPositionComponents';
import { Components, ComponentsPositions } from '@contexts/interfaces/components.interface';
import { DefinePositionsComponentsResult, DefinePositionsComponentsParams, definePositionsComponents } from './functions/definePositionsComponents';
import { QueueBindingConsumerRegister, QueueBindingConsumerRegisterPosition, QueueBindingConsumerRegisterPositionLines } from '@services/rabbitmq/interfaces/queue.interface';
import { defineLinesQueuesBetweenExchangesConsumers } from './functions/defineLinesQueuesBetweenExchangesConsumers';
import { GetLinksLinesCoordinatesDTO, getLinksLinesCoordinates } from './utils/getLinksLinesCoordinates';
import { Point } from '@contexts/interfaces/lines.interface';
import { CreateMessagePositionsParams, defineMessagePositions } from './functions/defineMessagePositions';
import { ProducerPositionLinesMessagePosition } from '@services/rabbitmq/interfaces/producer.interface';
import { Consumer } from '@services/rabbitmq/interfaces/consumer.interface';
import { getConsumers } from './utils/getConsumers';
import { CreateComponentParams, createComponents } from './utils/createComponents';

type PositionStateProps = {
  children: React.ReactNode;
};

interface UsePosition {
  getQueuePositionsCoordinates(data: GetQueuePositionsParams): Position[]
  createPositionsComponents(components: CreatePositionsComponentsParams): ComponentsPositions
  definePositionsComponents(data: DefinePositionsComponentsParams): DefinePositionsComponentsResult
  defineLinesQueuesBetweenExchangesConsumers(queues: QueueBindingConsumerRegisterPosition[]): QueueBindingConsumerRegisterPositionLines[]
  getLinksLinesCoordinates(data: GetLinksLinesCoordinatesDTO): Point[]
  defineMessagePositions(data: CreateMessagePositionsParams): ProducerPositionLinesMessagePosition[]
  getConsumers(queues: QueueBindingConsumerRegister[]): Consumer[]
  createComponents(data: CreateComponentParams): Components
}

export const PositionContext = React.createContext<UsePosition>({} as UsePosition);

export function PositionState({ children }: PositionStateProps) {
  return (
    <PositionContext.Provider value={{
      getQueuePositionsCoordinates,
      createPositionsComponents,
      definePositionsComponents,
      defineLinesQueuesBetweenExchangesConsumers,
      getLinksLinesCoordinates,
      defineMessagePositions,
      getConsumers,
      createComponents
    }}>{children}</PositionContext.Provider>
  )
}

export function usePosition(): UsePosition {
  return useContext(PositionContext);
}
