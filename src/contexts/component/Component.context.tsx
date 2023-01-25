import React, { useContext } from 'react'
import { Producer } from '@services/rabbitmq/interfaces/producer.interface';
import { AddMessageInProducersParams, addMessageInProducers } from './utils/addMessageInProducers';
import { RemoveMessageInProducersParams, removeMessageInProducers } from './utils/removeMessageInProducers';

type ComponentStateProps = {
  children: React.ReactNode;
};

interface UseComponent {
  addMessageInProducers({ producers, message }: AddMessageInProducersParams): Producer[]
  removeMessageInProducers({ producers, producerId, messageId }: RemoveMessageInProducersParams): Producer[]
}

export const ComponentContext = React.createContext<UseComponent>({} as UseComponent);

export function ComponentState({ children }: ComponentStateProps) {
  return (
    <ComponentContext.Provider value={{
      addMessageInProducers,
      removeMessageInProducers
    }}>{children}</ComponentContext.Provider>
  )
}

export function useComponent(): UseComponent {
  return useContext(ComponentContext);
}
