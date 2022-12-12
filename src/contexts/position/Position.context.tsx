import React, { useContext } from 'react'
import { PositionComponents, createPositionsComponents, definePositionsComponents, Components, DefineComponentsResult, DefineComponentsDTO, DefineLinksBetweenComponentsDTO, DefineLinksBetweenComponentsResult, definePositionLinksBetweenComponents } from './functions/definePositionsComponents';

type PositionStateProps = {
  children: React.ReactNode;
};

interface UsePosition {
  createPositionsComponents: (data: Components) => PositionComponents
  definePositionsComponents: (data: DefineComponentsDTO) => DefineComponentsResult[]
  definePositionLinksBetweenComponents(queues: DefineLinksBetweenComponentsDTO[]): DefineLinksBetweenComponentsResult[]
}

export const PositionContext = React.createContext<UsePosition>({} as UsePosition);

export function PositionState({ children }: PositionStateProps) {
  return (
    <PositionContext.Provider value={{ createPositionsComponents, definePositionsComponents, definePositionLinksBetweenComponents }}>{children}</PositionContext.Provider>
  )
}

export function usePosition(): UsePosition {
  return useContext(PositionContext);
}
