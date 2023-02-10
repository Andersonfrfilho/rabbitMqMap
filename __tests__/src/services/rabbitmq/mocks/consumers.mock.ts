import { Consumer, activity_status } from "@services/rabbitmq/interfaces/consumer.interface"

export const consumers: Consumer[] = [
  {
    "arguments": {},
    "ack_required": true,
    "active": true,
    "activity_status": activity_status.up,
    "channel_details": {
      "connection_name": "172.18.0.1:42732 -> 172.18.0.2:5672",
      "name": "172.18.0.1:42732 -> 172.18.0.2:5672 (1)",
      "node": "rabbit@rabbit-mapper-host",
      "number": 1,
      "peer_host": "172.18.0.1",
      "peer_port": 42732,
      "user": "project-nextjs-consumer"
    },
    "consumer_tag": "amq.ctag-wJc45PmSbgdYxvUHA3y6pQ",
    "exclusive": false,
    "prefetch_count": 10,
    "queue": {
      "name": "queue-1",
      "vhost": "/"
    }
  }
]

export const positions = [
  {
    "position": [
      0,
      -1,
      9
    ],
    "info": {
      "name": "queue-1",
      "type": "project-nextjs-consumer",
      "componentType": "consumer"
    },
    "id": "eaac372b-d318-4447-9547-ea7796ac367f"
  }
]

export const consumersLines = [
  {
    "id": "b726effb-6f32-40ff-a320-3a335b40fa00",
    "positions": [
      [
        0,
        1,
        6
      ],
      [
        0,
        -1,
        9
      ]
    ],
    "info": {
      "children": "172.18.0.1:44474 -> 172.18.0.2:5672 (1)",
      "father": "queue-1"
    }
  }
]

export const bindingsLines = [
  {
    "id": "7b350f0b-4e7e-44b3-992a-0eeb739f7158",
    "positions": [
      [
        0,
        1,
        6
      ],
      [
        0,
        1,
        3
      ]
    ],
    "info": {
      "children": "",
      "father": "queue-1"
    }
  },
  {
    "id": "847e0c39-9af8-42f1-a982-69261611a773",
    "positions": [
      [
        0,
        1,
        6
      ],
      [
        7,
        2,
        3
      ]
    ],
    "info": {
      "children": "exchange-queue-1-topic",
      "father": "queue-1"
    }
  },
  {
    "id": "404e3ebe-d50b-45b4-8142-48a121bc3231",
    "positions": [
      [
        2,
        1,
        6
      ],
      [
        0,
        1,
        3
      ]
    ],
    "info": {
      "children": "",
      "father": "queue-1-dead-letter"
    }
  },
  {
    "id": "cf32987e-ab3e-4d69-b7df-651941e3e035",
    "positions": [
      [
        2,
        1,
        6
      ],
      [
        5,
        2,
        3
      ]
    ],
    "info": {
      "children": "dead-letter-exchange-queue-1",
      "father": "queue-1-dead-letter"
    }
  },
  {
    "id": "efccf008-ff5d-4d2e-bcc3-2499b378ab84",
    "positions": [
      [
        4,
        1,
        6
      ],
      [
        0,
        1,
        3
      ]
    ],
    "info": {
      "children": "",
      "father": "queue-2"
    }
  },
  {
    "id": "d1f9b333-b5d1-4205-8d73-b31113945a04",
    "positions": [
      [
        4,
        1,
        6
      ],
      [
        7,
        2,
        3
      ]
    ],
    "info": {
      "children": "exchange-queue-1-topic",
      "father": "queue-2"
    }
  },
  {
    "id": "e937f4ee-6fd6-4cae-a3a8-09136010e1b8",
    "positions": [
      [
        1,
        2,
        6
      ],
      [
        0,
        1,
        3
      ]
    ],
    "info": {
      "children": "",
      "father": "queue-3"
    }
  },
  {
    "id": "942707c2-dd3a-4b03-851a-2de65347524d",
    "positions": [
      [
        3,
        2,
        6
      ],
      [
        0,
        1,
        3
      ]
    ],
    "info": {
      "children": "",
      "father": "queue-4"
    }
  }
]