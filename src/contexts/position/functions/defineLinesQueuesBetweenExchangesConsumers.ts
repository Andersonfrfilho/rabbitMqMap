import { QueueBindingConsumerRegisterPosition, QueueBindingConsumerRegisterPositionLines } from "@services/rabbitmq/interfaces/queue.interface";
import { createTwoPointsCoordinateToLine } from "../utils/createTwoPointsCoordinateToLine";



export function defineLinesQueuesBetweenExchangesConsumers(queues: QueueBindingConsumerRegisterPosition[]): QueueBindingConsumerRegisterPositionLines[] {
  const queuesWithPositions = queues.map((queue) => ({
    ...queue,
    bindings: queue.bindings.map(binding => {
      const initialPosition = { name: queue.name, position: queue.position.position }
      const lines = createTwoPointsCoordinateToLine({
        initialPosition, lastPosition: { name: binding.source, destination: binding.destination, destinationType: binding.destination_type, routingKey: binding.routing_key, position: binding.position.position },
      })
      return {
        ...binding,
        lines,
      }
    }),
    consumers_register: queue.consumers_register.map(consumer => {
      const initialPosition = { name: queue.name, position: queue.position.position }
      const lines = createTwoPointsCoordinateToLine({
        initialPosition, lastPosition: { name: consumer.channel_details.name, position: consumer.position.position },
      })
      return {
        ...consumer,
        lines,
      }
    })
  }))

  return queuesWithPositions
}