import React, { useContext } from 'react'
import { Producer } from '@services/rabbitmq/interfaces/producer.interface';
import { Components } from '@contexts/interfaces/components.interface';
import { CreateComponentsParams, createComponents } from './functions/createComponents';
import { AddMessageInProducersParams, addMessageInProducers } from './functions/addMessageInProducers';
import { RemoveMessageInProducersParams, removeMessageInProducers } from './functions/removeMessageInProducers';
import { getConsumers } from './functions/getConsumers';
import { QueueBindingConsumerRegister } from '@services/rabbitmq/interfaces/queue.interface';
import { Consumer } from '@services/rabbitmq/interfaces/consumer.interface';

type ComponentStateProps = {
  children: React.ReactNode;
};

interface UseComponent {
  addMessageInProducers(data: AddMessageInProducersParams): Producer[]
  removeMessageInProducers(data: RemoveMessageInProducersParams): Producer[]
  createComponents(data: CreateComponentsParams): Components
  getConsumers(queues: QueueBindingConsumerRegister[]): Consumer[]
}

export const ComponentContext = React.createContext<UseComponent>({} as UseComponent);

export function ComponentState({ children }: ComponentStateProps) {
  return (
    <ComponentContext.Provider value={{
      addMessageInProducers,
      removeMessageInProducers,
      createComponents,
      getConsumers
    }}>{children}</ComponentContext.Provider>
  )
}

export function useComponent(): UseComponent {
  return useContext(ComponentContext);
}
