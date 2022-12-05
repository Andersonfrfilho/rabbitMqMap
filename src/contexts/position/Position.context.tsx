import React, { useContext, useState } from 'react'
import { DefinePositionQueueDTO, PositionComponents, definePositionsComponents } from './functions/definePositionsComponents';

type PositionStateProps = {
  children: React.ReactNode;
};

interface UsePosition {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  definePositionsComponents: (data: DefinePositionQueueDTO) => PositionComponents
}

export const PositionContext = React.createContext<UsePosition>({} as UsePosition);

export function PositionState({ children }: PositionStateProps) {
  const [state, setState] = useState('whatever');

  return (
    <PositionContext.Provider value={{ state, setState, definePositionsComponents }}>{children}</PositionContext.Provider>
  )
}

export function usePosition(): UsePosition {
  return useContext(PositionContext);
}
