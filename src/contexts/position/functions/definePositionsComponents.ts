import { Position } from "@constants/position.constant";
import { COMPONENTS, DEPTH } from "@enums/positions.enum";
import { between } from "@utils/random-number";
import { Exchange as ExchangeService } from "@services/rabbitmq/interfaces/exchange.interface"
import { Queue as QueueService } from "@services/rabbitmq/interfaces/queue.interface"

interface Dimension {
  width: number;
  height: number;
  depth: number;
}

interface Component<T> {
  quantity: number;
  depth: DEPTH;
  dimension: Dimension;
  items: T[]
}

export interface Producer extends Component<null> {
  depth: DEPTH.PRODUCER
}

export interface Exchange extends Component<ExchangeService> {
  depth: DEPTH.EXCHANGE
}

export interface Queue extends Component<QueueService> {
  depth: DEPTH.QUEUE
}

export interface Consumer extends Component<null> {
  depth: DEPTH.CONSUMER
}

interface Components {
  producer: Producer;
  exchange: Exchange;
  queue: Queue;
  consumer: Consumer;
}

export interface DefinePositionQueueDTO extends Components { }

export interface PositionComponents {
  producer: Position[][];
  exchange: Position[][];
  queue: Position[][];
  consumer: Position[][];
}

export const definePositionsComponents = (components: DefinePositionQueueDTO): PositionComponents => {
  const numberComponents = Object.keys(components).length
  let indexComponent = 0;
  const componentsPosition: PositionComponents = {
    producer: [],
    exchange: [],
    queue: [],
    consumer: []
  }
  while (numberComponents <= indexComponent) {
    const component = COMPONENTS[indexComponent] as keyof PositionComponents
    let indexPosition = 0;
    const positions: [x: number, y: number, z: number][] = [];
    let definePosition = false;
    while (components[component].quantity <= indexPosition) {
      while (!definePosition) {
        const initialPosition = 0
        const lastPosition = components[component].quantity
        const horizontalPosition = between({ minimum: initialPosition, maximum: lastPosition })
        const verticalPosition = between({ minimum: initialPosition, maximum: lastPosition })
        definePosition = positions.some(positionCurrent => {
          const horizontalCurrentAlreadyPosition = positionCurrent[0]
          const horizontalPositionPrevious = horizontalPosition > 0 ? horizontalPosition - components[component].dimension.width : 0
          const horizontalPositionLater = horizontalPosition === components[component].quantity - 1 ? horizontalPosition : horizontalPosition + components[component].dimension.width
          const verticalCurrentAlreadyPosition = positionCurrent[1]
          if (horizontalCurrentAlreadyPosition === (horizontalPositionPrevious || horizontalPositionLater || horizontalPosition)) {
            if (verticalCurrentAlreadyPosition === verticalPosition) return false
          }

          const verticalPositionPrevious = verticalPosition > 0 ? verticalPosition - components[component].dimension.height : 0
          const verticalPositionLater = verticalPosition === components[component].quantity - 1 ? verticalPosition : verticalPosition + components[component].dimension.height
          if (verticalCurrentAlreadyPosition === (verticalPositionPrevious || verticalPositionLater || verticalPosition)) {
            if (horizontalCurrentAlreadyPosition === horizontalPosition) return false
          }

          return true
        })

        if (definePosition) {
          positions.push([horizontalPosition, verticalPosition, components[component].dimension.depth])
          indexPosition = + 1;
        }
      }
    }
    indexComponent += 1;
    componentsPosition[component].push(positions)
  }
  return componentsPosition
}