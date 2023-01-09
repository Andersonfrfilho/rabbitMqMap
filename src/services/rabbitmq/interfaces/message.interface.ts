interface Message {
  exchange: string;
  routeKey?: string;
  messagePayload?: string;
  time: number;
  id: string;
}

export interface PropertyMessage {
  messages: Message[]
}

// export interface ProducerBetweenExchange {
//   initial: GetLinksLinesResult;
//   last: GetLinksLinesResult;
// }

// export interface Lines {
//   producerBetweenExchange: ProducerBetweenExchange
// }

// interface WithLines {
//   lines: MakeVerticalCoordinateSeparationResult[]
// }
// export interface MessageWithPositions extends Message {
//   positions: {
//     producerBetweenExchange: MessagePoint[];
//     exchangeBetweenQueue: MessagePoint[];
//     queueBetweenConsumer: MessagePoint[];
//   }
// }

// interface WithMessageWithPositions {
//   messages: MessageWithPositions[]
// }