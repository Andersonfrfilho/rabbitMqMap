import { Position as TypePosition } from "@constants/position.constant";

interface Info {
  source: string;
  destination: string;
  payload: any;
}

export interface MessagePoint {
  id: string;
  position: TypePosition;
  info: Info
}

interface Message {
  exchange: string;
  routeKey?: string;
  messagePayload?: string;
  id: string;
  color: string;
}

export interface PropertyMessage {
  messages: Message[]
}

export interface MessagePositions extends Message {
  positions: {
    producerBetweenExchange: MessagePoint[];
    exchangeBetweenQueue: MessagePoint[];
    queueBetweenConsumer: MessagePoint[];
  }
}

export interface PropertyMessagePositions {
  messages: MessagePositions[]
}