export enum COMPONENTS {
  producer,
  exchange,
  queue,
  consumer
}

export enum COMPONENT_INFO_TYPE {
  PRODUCER = "producer",
  EXCHANGE = "exchange",
  QUEUE = "queue",
  CONSUMER = "consumer"
}

export enum COMPONENT_TYPE {
  BINDING = "bindings",
  CONSUMER = "consumers_register"
}

export enum LINK_TYPE {
  LINES = "lines",
  POINTS = "points"
}
