export enum COMPONENTS {
  producer,
  exchange,
  queue,
  consumer
}

export enum DEPTH {
  PRODUCER = 0,
  EXCHANGE = 3,
  QUEUE = 6,
  CONSUMER = 9
}

export enum COMPONENT_TYPE {
  BINDING = "bindings",
  CONSUMER = "consumers_register"
}

export enum LINK_TYPE {
  LINES = "lines",
  POINTS = "points"
}