import { NUMBER_POINTS } from "@constants/components.constant";
import { INITIAL_POSITION } from "@constants/position.constant";

interface MessageInfo {
  source: string;
  destination: string;
  payload: any;
}

export interface MessagePoint {
  id: string;
  position: number[];
  info: MessageInfo
}

export function createPointsBetweenTwoCoordinates({ initialPosition, lastPosition, payload, numberPoints = NUMBER_POINTS }: GetPointsBetweenTwoCoordinatesParams): MessagePoint[] {
  const arrayLinks = new Array(numberPoints).fill(INITIAL_POSITION)
  const [x1, y1, z1] = initialPosition.position as number[]
  const [x2, y2, z2] = lastPosition.position as number[]
  const xDiference = x2 - x1;
  const yDiference = y2 - y1;
  const zDiference = z2 - z1;
  const points = arrayLinks.map((element, indexLink): MessagePoint => {
    const x = x1 + (xDiference * indexLink / NUMBER_POINTS)
    const y = y1 + (yDiference * indexLink / NUMBER_POINTS)
    const z = z1 + (zDiference * indexLink / NUMBER_POINTS)
    return {
      id: uuidV4(),
      position: [x, y, z],
      info: {
        source: initialPosition.info.name,
        destination: lastPosition.info.name,
        payload
      }
    }
  })
  return points
}