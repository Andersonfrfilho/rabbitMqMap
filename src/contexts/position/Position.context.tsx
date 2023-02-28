import React, { useContext } from 'react'
import { GetQueuePositionsParams, getQueuePositionsCoordinates } from './utils/getQueuePositionsCoordinates';
import { Position } from '@contexts/interfaces/positions.interface';
import { CreatePositionsComponentParams, createPositionsComponent } from './functions/createPositionComponents';
import { ComponentsPositions } from '@contexts/interfaces/components.interface';
import { DefinePositionsComponentsResult, DefinePositionsComponentsParams, definePositionsComponents } from './functions/definePositionsComponents';
import { QueueBindingConsumerRegisterPosition, QueueBindingConsumerRegisterPositionLines } from '@services/rabbitmq/interfaces/queue.interface';
import { defineLinesQueuesBetweenExchangesConsumers } from './functions/defineLinesQueuesBetweenExchangesConsumers';
import { GetLinksLinesCoordinatesDTO, getLinksLinesCoordinates } from './utils/getLinksLinesCoordinates';
import { Point } from '@contexts/interfaces/lines.interface';
import { CreateMessagePositionsParams, defineMessagePositions } from './functions/defineMessagePositions';
import { ProducerPositionLinesMessagePosition } from '@services/rabbitmq/interfaces/producer.interface';

type PositionStateProps = {
  children: React.ReactNode;
};

interface UsePosition {
  getQueuePositionsCoordinates(data: GetQueuePositionsParams): Position[]
  createPositionsComponent(components: CreatePositionsComponentParams): Position[]
  definePositionsComponents(data: DefinePositionsComponentsParams): DefinePositionsComponentsResult
  defineLinesQueuesBetweenExchangesConsumers(queues: QueueBindingConsumerRegisterPosition[]): QueueBindingConsumerRegisterPositionLines[]
  getLinksLinesCoordinates(data: GetLinksLinesCoordinatesDTO): Point[]
  defineMessagePositions(data: CreateMessagePositionsParams): ProducerPositionLinesMessagePosition[]

}

export const PositionContext = React.createContext<UsePosition>({} as UsePosition);

export function PositionState({ children }: PositionStateProps) {
  return (
    <PositionContext.Provider value={{
      getQueuePositionsCoordinates,
      createPositionsComponent,
      definePositionsComponents,
      defineLinesQueuesBetweenExchangesConsumers,
      getLinksLinesCoordinates,
      defineMessagePositions,
    }}>{children}</PositionContext.Provider>
  )
}

export function usePosition(): UsePosition {
  return useContext(PositionContext);
}
