import { Point } from "@contexts/interfaces/lines.interface";
import { COMPONENT_TYPE } from "@enums/components.enum";
import { QueueBindingConsumerRegisterPosition } from "@services/rabbitmq/interfaces/queue.interface";

export interface GetLinksLinesCoordinatesDTO { componentLinks: QueueBindingConsumerRegisterPosition[]; componentType: COMPONENT_TYPE; }

export function getLinksLinesCoordinates({ componentLinks, componentType }: GetLinksLinesCoordinatesDTO): Point[] {
  return componentLinks.reduce((accumulator, component): Position[][] => [...accumulator, ...component[componentType].map((componentType): Position[] => componentType.lines)], [])
}