import { PropertyPosition } from "@contexts/interfaces/positions.interface";
import { PropertyMessage, PropertyMessagePositions } from "./message.interface";
import { PropertyManyLines } from "@contexts/interfaces/lines.interface";

interface Capabilities {
  authentication_failure_close: boolean;
  "basic.nack": boolean;
  "connection.blocked": boolean;
  consumer_cancel_notify: boolean;
  exchange_exchange_bindings: boolean;
  publisher_confirms: boolean;
}

export interface ClientProperties {
  capabilities: Capabilities;
  information: string;
  platform: string;
  product: string;
  version: string
}

export interface Connection {
  host: string;
  name: string;
  node: string;
  user: string;
  user_who_performed_action: string;
  vhost: string;
  client_properties: ClientProperties;
  type: string;
  port: number;
}

interface PropertyId {
  id: string;
}

export interface Producer extends Connection, PropertyId, PropertyMessage { }
interface Message {
  exchange: string;
  routeKey?: string;
  messagePayload?: string;
  time: number;
  id: string;
  color: string;
}

export interface ProducerPosition extends Connection, PropertyId, PropertyMessage, PropertyPosition { }

export interface ProducerPositionLinesMessages extends Connection, PropertyId, PropertyMessage, PropertyPosition { }

export interface ProducerPositionLinesMessagePosition extends Connection, PropertyId, PropertyManyLines, PropertyMessagePositions { }