import { PropertyLines } from "@contexts/interfaces/lines.interface"
import { PropertyPosition } from "@contexts/interfaces/positions.interface"

export type Binding = {
  source: string,
  vhost: string,
  destination: string,
  destination_type: string,
  routing_key: string,
  arguments: {},
  properties_key: string
}

export type PropertyBindings = {
  bindings: Binding[]
}

export interface BindingPosition extends Binding, PropertyPosition { }

export interface BindingPositionLines extends BindingPosition, PropertyLines { }
