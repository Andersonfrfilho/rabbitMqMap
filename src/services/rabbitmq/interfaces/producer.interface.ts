import { GetLinksLinesResult, MakeVerticalCoordinateSeparationResult, MessagePoint } from "@contexts/position/functions/definePositionsComponents";

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
interface WithId {
  id: string;
}

interface Message {
  exchange: string;
  routeKey?: string;
  messagePayload?: string;
  time: number;
  id: string;
}

interface WithMessage {
  messages: Message[]
}

export interface ProducerBetweenExchange {
  initial: GetLinksLinesResult;
  last: GetLinksLinesResult;
}

export interface Lines {
  producerBetweenExchange: ProducerBetweenExchange
}

interface WithLines {
  lines: MakeVerticalCoordinateSeparationResult[]
}
export interface MessageWithPositions extends Message {
  positions: {
    producerBetweenExchange: MessagePoint[];
    exchangeBetweenQueue: MessagePoint[];
    queueBetweenConsumer: MessagePoint[];
  }
}

interface WithMessageWithPositions {
  messages: MessageWithPositions[]
}
export interface Producer extends Connection, WithId, WithMessage { }

export interface ProducerLines extends WithLines { }
export interface ProducerWithMessageWithPosition extends Connection, WithId, WithMessageWithPositions, WithLines { }