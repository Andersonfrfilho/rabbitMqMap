import React, { useContext, useState } from 'react'
import { PositionComponents, definePositionsComponents, Components } from './functions/definePositionsComponents';

type PositionStateProps = {
  children: React.ReactNode;
};

interface UsePosition {
  definePositionsComponents: (data: Components) => PositionComponents
}

export const PositionContext = React.createContext<UsePosition>({} as UsePosition);

export function PositionState({ children }: PositionStateProps) {
  return (
    <PositionContext.Provider value={{ definePositionsComponents }}>{children}</PositionContext.Provider>
  )
}

export function usePosition(): UsePosition {
  return useContext(PositionContext);
}
