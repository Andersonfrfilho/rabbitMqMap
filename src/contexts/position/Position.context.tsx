import React, { useContext } from 'react'
import { GetQueuePositionsParams, getQueuePositionsCoordinates } from './utils/getQueuePositionsCoordinates';
import { Position } from '@contexts/interfaces/positions.interface';
import { CreatePositionsComponentsParams, createPositionsComponents } from './functions/createPositionComponents';
import { ComponentsPositions } from '@contexts/interfaces/components.interface';
import { DefinePositionsComponentsResult, DefinePositionsComponentsParams, definePositionsComponents } from './functions/definePositionsComponents';
import { QueueBindingConsumerRegisterPosition, QueueBindingConsumerRegisterPositionLines } from '@services/rabbitmq/interfaces/queue.interface';
import { defineLinesQueuesBetweenExchangesConsumers } from './functions/defineLinesQueuesBetweenExchangesConsumers';
import { GetLinksLinesCoordinatesDTO, getLinksLinesCoordinates } from './utils/getLinksLinesCoordinates';
import { Point } from '@contexts/interfaces/lines.interface';

type PositionStateProps = {
  children: React.ReactNode;
};

interface UsePosition {
  getQueuePositionsCoordinates(data: GetQueuePositionsParams): Position[]
  createPositionsComponents(components: CreatePositionsComponentsParams): ComponentsPositions
  definePositionsComponents(data: DefinePositionsComponentsParams): DefinePositionsComponentsResult
  defineLinesQueuesBetweenExchangesConsumers(queues: QueueBindingConsumerRegisterPosition[]): QueueBindingConsumerRegisterPositionLines[]
  getLinksLinesCoordinates({ componentLinks, componentType }: GetLinksLinesCoordinatesDTO): Point[]
  // createPositionsComponents: (data: Components) => PositionComponents
  // definePositionsComponents: (data: DefineComponentsDTO) => DefineComponentsResult
  // defineLinesQueuesBetweenExchangesConsumers(queues: DefineLinksBetweenComponentsDTO[]): DefineLinksBetweenComponentsResult[]
  // getPositionsCoordinates: (data: GetPositionsDTO) => ComponentWithPosition[]
  // getLinksPoints: (data: GetLinksPointsDTO) => GetPointsLinesResult[]
  // getLinksLines: (data: GetLinksLinesDTO) => GetLinksLinesResult[]
  // defineMessagePositions: (data: DefineMessagePositionsParams) => ProducerWithMessageWithPosition[]
}

export const PositionContext = React.createContext<UsePosition>({} as UsePosition);

export function PositionState({ children }: PositionStateProps) {
  return (
    <PositionContext.Provider value={{ getQueuePositionsCoordinates, createPositionsComponents, definePositionsComponents, defineLinesQueuesBetweenExchangesConsumers, getLinksLinesCoordinates }}>{children}</PositionContext.Provider>
  )
}

export function usePosition(): UsePosition {
  return useContext(PositionContext);
}
