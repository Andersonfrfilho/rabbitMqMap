import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { QueueBindingConsumerRegister } from "@services/rabbitmq/interfaces/queue.interface";

export function getConsumers(queues: QueueBindingConsumerRegister[]): Consumer[] {
  return queues.map(queue => queue.consumers_register).reduce((accumulator, consumerCurrent) => [...accumulator, ...consumerCurrent], [])
}
