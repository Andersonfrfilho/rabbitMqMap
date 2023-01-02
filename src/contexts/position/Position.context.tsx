import React, { useContext } from 'react'
import { PositionComponents, createPositionsComponents, definePositionsComponents, Components, DefineComponentsResult, DefineComponentsDTO, DefineLinksBetweenComponentsDTO, DefineLinksBetweenComponentsResult, definePositionLinksBetweenComponents, GetLinksLinesDTO, GetLinksPointsDTO, getLinksPoints, getPositions, GetPositionsDTO, getLinksLines, ComponentWithPosition, GetLinksLinesResult, GetPointsLinesResult, defineMessagePositions, DefineMessagePositionsParams } from './functions/definePositionsComponents';
import { ProducerWithMessageWithPosition } from '@services/rabbitmq/interfaces/producer.interface';

type PositionStateProps = {
  children: React.ReactNode;
};

interface UsePosition {
  createPositionsComponents: (data: Components) => PositionComponents
  definePositionsComponents: (data: DefineComponentsDTO) => DefineComponentsResult
  definePositionLinksBetweenComponents(queues: DefineLinksBetweenComponentsDTO[]): DefineLinksBetweenComponentsResult[]
  getPositions: (data: GetPositionsDTO) => ComponentWithPosition[]
  getLinksPoints: (data: GetLinksPointsDTO) => GetPointsLinesResult[]
  getLinksLines: (data: GetLinksLinesDTO) => GetLinksLinesResult[]
  defineMessagePositions: (data: DefineMessagePositionsParams) => ProducerWithMessageWithPosition[]
}

export const PositionContext = React.createContext<UsePosition>({} as UsePosition);

export function PositionState({ children }: PositionStateProps) {
  return (
    <PositionContext.Provider value={{ createPositionsComponents, definePositionsComponents, definePositionLinksBetweenComponents, getLinksPoints, getPositions, getLinksLines, defineMessagePositions }}>{children}</PositionContext.Provider>
  )
}

export function usePosition(): UsePosition {
  return useContext(PositionContext);
}
