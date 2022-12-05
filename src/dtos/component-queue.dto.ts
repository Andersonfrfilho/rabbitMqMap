import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Queue as QueueComponent } from "@contexts/position/functions/definePositionsComponents";

export function componentQueueDTO(data: Queue[]): QueueComponent {
  return {} as QueueComponent
}