import { Components } from "@contexts/interfaces/components.interface"
import { activity_status } from "@services/rabbitmq/interfaces/consumer.interface"
import { Type } from "@services/rabbitmq/interfaces/exchange.interface"

export const components: Components = {
  "consumer": {
    "depth": 9,
    "dimension": {
      "width": 1,
      "height": 1,
      "depth": 1
    },
    "quantity": 1,
    "items": [
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
  },
  "exchange": {
    "depth": 3,
    "dimension": {
      "width": 1,
      "height": 1,
      "depth": 1
    },
    "quantity": 9,
    "items": [
      {
        "arguments": {},
        "auto_delete": false,
        "durable": true,
        "internal": false,
        "name": "",
        "type": Type.direct,
        "user_who_performed_action": "rmq-internal",
        "vhost": "/",
        "bindings": [
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-1",
            "destination_type": "queue",
            "routing_key": "queue-1",
            "arguments": {},
            "properties_key": "queue-1"
          },
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-1-dead-letter",
            "destination_type": "queue",
            "routing_key": "queue-1-dead-letter",
            "arguments": {},
            "properties_key": "queue-1-dead-letter"
          },
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-2",
            "destination_type": "queue",
            "routing_key": "queue-2",
            "arguments": {},
            "properties_key": "queue-2"
          },
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-3",
            "destination_type": "queue",
            "routing_key": "queue-3",
            "arguments": {},
            "properties_key": "queue-3"
          },
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-4",
            "destination_type": "queue",
            "routing_key": "queue-4",
            "arguments": {},
            "properties_key": "queue-4"
          }
        ]
      },
      {
        "arguments": {},
        "auto_delete": false,
        "durable": true,
        "internal": false,
        "name": "amq.direct",
        "type": Type.direct,
        "user_who_performed_action": "rmq-internal",
        "vhost": "/",
        "bindings": []
      },
      {
        "arguments": {},
        "auto_delete": false,
        "durable": true,
        "internal": false,
        "name": "amq.fanout",
        "type": Type.fanout,
        "user_who_performed_action": "rmq-internal",
        "vhost": "/",
        "bindings": []
      },
      {
        "arguments": {},
        "auto_delete": false,
        "durable": true,
        "internal": false,
        "name": "amq.headers",
        "type": Type.headers,
        "user_who_performed_action": "rmq-internal",
        "vhost": "/",
        "bindings": []
      },
      {
        "arguments": {},
        "auto_delete": false,
        "durable": true,
        "internal": false,
        "name": "amq.match",
        "type": Type.headers,
        "user_who_performed_action": "rmq-internal",
        "vhost": "/",
        "bindings": []
      },
      {
        "arguments": {},
        "auto_delete": false,
        "durable": true,
        "internal": true,
        "name": "amq.rabbitmq.trace",
        "type": Type.topic,
        "user_who_performed_action": "rmq-internal",
        "vhost": "/",
        "bindings": []
      },
      {
        "arguments": {},
        "auto_delete": false,
        "durable": true,
        "internal": false,
        "name": "amq.topic",
        "type": Type.topic,
        "user_who_performed_action": "rmq-internal",
        "vhost": "/",
        "bindings": []
      },
      {
        "arguments": {},
        "auto_delete": false,
        "durable": true,
        "internal": false,
        "name": "dead-letter-exchange-queue-1",
        "type": Type.direct,
        "user_who_performed_action": "guest",
        "vhost": "/",
        "bindings": [
          {
            "source": "dead-letter-exchange-queue-1",
            "vhost": "/",
            "destination": "queue-1-dead-letter",
            "destination_type": "queue",
            "routing_key": "",
            "arguments": {},
            "properties_key": "~"
          }
        ]
      },
      {
        "arguments": {},
        "auto_delete": false,
        "durable": true,
        "internal": false,
        "name": "exchange-queue-1-topic",
        "type": Type.topic,
        "user_who_performed_action": "guest",
        "vhost": "/",
        "bindings": [
          {
            "source": "exchange-queue-1-topic",
            "vhost": "/",
            "destination": "queue-1",
            "destination_type": "queue",
            "routing_key": "routing-key-to-exchange-fila-1-topic",
            "arguments": {
              "x-dead-letter-exchange": "dead-letter-exchange-queue-1"
            },
            "properties_key": "routing-key-to-exchange-fila-1-topic~14m-KQ"
          },
          {
            "source": "exchange-queue-1-topic",
            "vhost": "/",
            "destination": "queue-2",
            "destination_type": "queue",
            "routing_key": "routing-key-exchange-queue-2",
            "arguments": {},
            "properties_key": "routing-key-exchange-queue-2"
          }
        ]
      }
    ]
  },
  "queue": {
    "depth": 6,
    "dimension": {
      "width": 1,
      "height": 1,
      "depth": 1
    },
    "quantity": 5,
    "items": [
      {
        "arguments": {
          "x-queue-type": "classic"
        },
        "name": "queue-1",
        "node": "rabbit@rabbit-mapper-host",
        "vhost": "/",
        "type": "classic",
        "bindings": [
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-1",
            "destination_type": "queue",
            "routing_key": "queue-1",
            "arguments": {},
            "properties_key": "queue-1"
          },
          {
            "source": "exchange-queue-1-topic",
            "vhost": "/",
            "destination": "queue-1",
            "destination_type": "queue",
            "routing_key": "routing-key-to-exchange-fila-1-topic",
            "arguments": {
              "x-dead-letter-exchange": "dead-letter-exchange-queue-1"
            },
            "properties_key": "routing-key-to-exchange-fila-1-topic~14m-KQ"
          }
        ],
        "consumers_register": [
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
      },
      {
        "arguments": {
          "x-queue-type": "classic"
        },
        "name": "queue-1-dead-letter",
        "node": "rabbit@rabbit-mapper-host",
        "vhost": "/",
        "type": "classic",
        "bindings": [
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-1-dead-letter",
            "destination_type": "queue",
            "routing_key": "queue-1-dead-letter",
            "arguments": {},
            "properties_key": "queue-1-dead-letter"
          },
          {
            "source": "dead-letter-exchange-queue-1",
            "vhost": "/",
            "destination": "queue-1-dead-letter",
            "destination_type": "queue",
            "routing_key": "",
            "arguments": {},
            "properties_key": "~"
          }
        ],
        "consumers_register": []
      },
      {
        "arguments": {
          "x-queue-type": "classic"
        },
        "name": "queue-2",
        "node": "rabbit@rabbit-mapper-host",
        "vhost": "/",
        "type": "classic",
        "bindings": [
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-2",
            "destination_type": "queue",
            "routing_key": "queue-2",
            "arguments": {},
            "properties_key": "queue-2"
          },
          {
            "source": "exchange-queue-1-topic",
            "vhost": "/",
            "destination": "queue-2",
            "destination_type": "queue",
            "routing_key": "routing-key-exchange-queue-2",
            "arguments": {},
            "properties_key": "routing-key-exchange-queue-2"
          }
        ],
        "consumers_register": []
      },
      {
        "arguments": {
          "x-queue-type": "classic"
        },
        "name": "queue-3",
        "node": "rabbit@rabbit-mapper-host",
        "vhost": "/",
        "type": "classic",
        "bindings": [
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-3",
            "destination_type": "queue",
            "routing_key": "queue-3",
            "arguments": {},
            "properties_key": "queue-3"
          }
        ],
        "consumers_register": []
      },
      {
        "arguments": {
          "x-queue-type": "classic"
        },
        "name": "queue-4",
        "node": "rabbit@rabbit-mapper-host",
        "vhost": "/",
        "type": "classic",
        "bindings": [
          {
            "source": "",
            "vhost": "/",
            "destination": "queue-4",
            "destination_type": "queue",
            "routing_key": "queue-4",
            "arguments": {},
            "properties_key": "queue-4"
          }
        ],
        "consumers_register": []
      }
    ]
  },
  "producer": {
    "depth": 0,
    "dimension": {
      "width": 1,
      "height": 1,
      "depth": 1
    },
    "quantity": 1,
    "items": [
      {
        "id": "abcb88fe-cff7-4c16-b241-a15d2d891e84",
        "host": "172.18.0.2",
        "name": "172.18.0.1:42740 -> 172.18.0.2:5672",
        "node": "rabbit@rabbit-mapper-host",
        "user": "project-nextjs-producer",
        "client_properties": {
          "capabilities": {
            "authentication_failure_close": true,
            "basic.nack": true,
            "connection.blocked": true,
            "consumer_cancel_notify": true,
            "exchange_exchange_bindings": true,
            "publisher_confirms": true
          },
          "information": "http://squaremo.github.io/amqp.node",
          "platform": "Node.JS v18.12.0",
          "product": "amqplib",
          "version": "0.8.0"
        },
        "user_who_performed_action": "project-nextjs-producer",
        "vhost": "/",
        "port": 5672,
        "type": "network",
        "messages": [
          {
            "exchange": "amq.direct",
            "routeKey": "",

            "payload": "{\n\"fila\":\"direct\"\n}",
            "id": "284d1cbc-b9c7-4d9e-baf9-1827dc1daae4",
            "color": "#7a2d16"
          },
          {
            "exchange": "amq.fanout",
            "routeKey": "",

            "payload": "{\n\"fila\":\"fanout\"\n}",
            "id": "e570d66e-5526-4013-9354-65a764e35d1d",
            "color": "#59b651"
          },
          {
            "exchange": "amq.headers",
            "routeKey": "",
            "payload": "{\n\"fila\":\"headers\"\n}",
            "id": "cf73c63e-8eb1-4d4e-b077-b07333ba810d",
            "color": "#1cc0c2"
          },
          {
            "exchange": "amq.match",
            "routeKey": "",

            "payload": "{\n\"fila\":\"match\"\n}",
            "id": "b1ebcb65-d165-4a39-b975-299f0706a146",
            "color": "#6e1e9d"
          },
          {
            "exchange": "amq.topic",
            "routeKey": "route-key-topic",

            "payload": "{\n\"fila\":\"route-key-topic\"\n}",
            "id": "063bb02b-dc70-443e-b9c7-76ab50d05404",
            "color": "#1ad1a6"
          },
          {
            "exchange": "exchange-queue-1-topic",
            "routeKey": "many.queue-3",

            "payload": "{\n\"fila\":\"route-key-topic\"\n}",
            "id": "063bb02b-dc70-443e-b9c7-76ab50d05674",
            "color": "#361c34"
          }
        ]
      }
    ]
  }
}

export const componentsPositions = [
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-1",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-1",
        "destination_type": "queue",
        "routing_key": "queue-1",
        "arguments": {},
        "properties_key": "queue-1",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "4e08b399-71cb-4592-8a3b-5d87e5aa5bb3"
        },
        "id": "53defb18-003f-4fc1-96cf-d9e88ccdcfb9"
      },
      {
        "source": "exchange-queue-1-topic",
        "vhost": "/",
        "destination": "queue-1",
        "destination_type": "queue",
        "routing_key": "routing-key-to-exchange-fila-1-topic",
        "arguments": {
          "x-dead-letter-exchange": "dead-letter-exchange-queue-1"
        },
        "properties_key": "routing-key-to-exchange-fila-1-topic~14m-KQ",
        "position": {
          "position": [
            7,
            2,
            3
          ],
          "info": {
            "name": "exchange-queue-1-topic",
            "type": Type.topic,
            "componentType": "exchange"
          },
          "id": "90eb440a-769c-4eb9-904a-2da0001df7da"
        },
        "id": "d05b7db3-5b04-4097-a997-87a6f39c6fbe"
      }
    ],
    "consumers_register": [
      {
        "arguments": {},
        "ack_required": true,
        "active": true,
        "activity_status": activity_status.up,
        "channel_details": {
          "connection_name": "172.18.0.1:43834 -> 172.18.0.2:5672",
          "name": "172.18.0.1:43834 -> 172.18.0.2:5672 (1)",
          "node": "rabbit@rabbit-mapper-host",
          "number": 1,
          "peer_host": "172.18.0.1",
          "peer_port": 43834,
          "user": "project-nextjs-consumer"
        },
        "consumer_tag": "amq.ctag-HHf3DU8LcvcnDXdZFoCwMw",
        "exclusive": false,
        "prefetch_count": 10,
        "queue": {
          "name": "queue-1",
          "vhost": "/"
        },
        "position": {
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
          "id": "3ee4be48-ad3c-4765-8643-478fae878355"
        },
        "id": "b982f90c-e9ab-49ed-b888-0de81de302c9"
      }
    ],
    "id": "dc57a394-c553-4249-959a-97ab39e8bee2",
    "position": {
      "position": [
        0,
        1,
        6
      ],
      "info": {
        "name": "queue-1",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "f00bc162-f3b5-48a0-8d05-dba21e00731f"
    }
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-1-dead-letter",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-1-dead-letter",
        "destination_type": "queue",
        "routing_key": "queue-1-dead-letter",
        "arguments": {},
        "properties_key": "queue-1-dead-letter",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "4e08b399-71cb-4592-8a3b-5d87e5aa5bb3"
        },
        "id": "af1c8c6d-b90e-4a99-ad4d-b69755e63fea"
      },
      {
        "source": "dead-letter-exchange-queue-1",
        "vhost": "/",
        "destination": "queue-1-dead-letter",
        "destination_type": "queue",
        "routing_key": "",
        "arguments": {},
        "properties_key": "~",
        "position": {
          "position": [
            5,
            2,
            3
          ],
          "info": {
            "name": "dead-letter-exchange-queue-1",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "2cb4e399-f325-4118-a788-de159b7dccb1"
        },
        "id": "5fe2ba12-3212-45ed-a77a-21e39a52551a"
      }
    ],
    "consumers_register": [],
    "id": "1e730d6e-cec3-4291-b104-ffc6a141a9e6",
    "position": {
      "position": [
        2,
        1,
        6
      ],
      "info": {
        "name": "queue-1-dead-letter",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "1a453aa5-46c4-41c6-bf34-1c99db57d0bd"
    }
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-2",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-2",
        "destination_type": "queue",
        "routing_key": "queue-2",
        "arguments": {},
        "properties_key": "queue-2",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "4e08b399-71cb-4592-8a3b-5d87e5aa5bb3"
        },
        "id": "52121d3a-eec6-459f-9319-0d185eb00bc4"
      },
      {
        "source": "exchange-queue-1-topic",
        "vhost": "/",
        "destination": "queue-2",
        "destination_type": "queue",
        "routing_key": "routing-key-exchange-queue-2",
        "arguments": {},
        "properties_key": "routing-key-exchange-queue-2",
        "position": {
          "position": [
            7,
            2,
            3
          ],
          "info": {
            "name": "exchange-queue-1-topic",
            "type": Type.topic,
            "componentType": "exchange"
          },
          "id": "90eb440a-769c-4eb9-904a-2da0001df7da"
        },
        "id": "4a574d7a-43eb-4c46-ba5f-6b20bcbfaad3"
      }
    ],
    "consumers_register": [],
    "id": "e590aff0-63ed-4b11-98db-4303eca45f3e",
    "position": {
      "position": [
        4,
        1,
        6
      ],
      "info": {
        "name": "queue-2",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "847296c7-6946-446e-8e60-c68e251a861c"
    }
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-3",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-3",
        "destination_type": "queue",
        "routing_key": "queue-3",
        "arguments": {},
        "properties_key": "queue-3",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "4e08b399-71cb-4592-8a3b-5d87e5aa5bb3"
        },
        "id": "29d2ca5a-12e2-4f60-8fad-ce5028280c7a"
      }
    ],
    "consumers_register": [],
    "id": "9c378793-46ee-4b78-b678-01b39af98b4e",
    "position": {
      "position": [
        1,
        2,
        6
      ],
      "info": {
        "name": "queue-3",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "e50d65b1-8c30-4814-bc74-d8066521643b"
    }
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-4",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-4",
        "destination_type": "queue",
        "routing_key": "queue-4",
        "arguments": {},
        "properties_key": "queue-4",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "4e08b399-71cb-4592-8a3b-5d87e5aa5bb3"
        },
        "id": "d5cb5b2b-d601-4d5e-a77d-9c26d4761c8a"
      }
    ],
    "consumers_register": [],
    "id": "c0896e25-8ec6-4fd8-81e6-05e89460ba59",
    "position": {
      "position": [
        3,
        2,
        6
      ],
      "info": {
        "name": "queue-4",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "30206d61-e483-4932-9128-789506ddda2e"
    }
  }
]

export const componentsLines = [
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-1",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-1",
        "destination_type": "queue",
        "routing_key": "queue-1",
        "arguments": {},
        "properties_key": "queue-1",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "6502915e-cb66-458e-84ab-d80673c16c37"
        },
        "id": "e7988356-defb-4524-aea8-3f948c30f289",
        "lines": {
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
        }
      },
      {
        "source": "exchange-queue-1-topic",
        "vhost": "/",
        "destination": "queue-1",
        "destination_type": "queue",
        "routing_key": "routing-key-to-exchange-fila-1-topic",
        "arguments": {
          "x-dead-letter-exchange": "dead-letter-exchange-queue-1"
        },
        "properties_key": "routing-key-to-exchange-fila-1-topic~14m-KQ",
        "position": {
          "position": [
            7,
            2,
            3
          ],
          "info": {
            "name": "exchange-queue-1-topic",
            "type": Type.topic,
            "componentType": "exchange"
          },
          "id": "819581f2-fd17-4d48-8f2e-c58a9db773ad"
        },
        "id": "f33781ea-7a5d-456a-b17c-1665d8628353",
        "lines": {
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
        }
      }
    ],
    "consumers_register": [
      {
        "arguments": {},
        "ack_required": true,
        "active": true,
        "activity_status": activity_status.up,
        "channel_details": {
          "connection_name": "172.18.0.1:44474 -> 172.18.0.2:5672",
          "name": "172.18.0.1:44474 -> 172.18.0.2:5672 (1)",
          "node": "rabbit@rabbit-mapper-host",
          "number": 1,
          "peer_host": "172.18.0.1",
          "peer_port": 44474,
          "user": "project-nextjs-consumer"
        },
        "consumer_tag": "amq.ctag-LsHO3r9zm9dqq5riojnkVA",
        "exclusive": false,
        "prefetch_count": 10,
        "queue": {
          "name": "queue-1",
          "vhost": "/"
        },
        "position": {
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
          "id": "2d2e1403-cece-47e1-af48-b5bb5ea35b2a"
        },
        "id": "565c7b8b-b344-4fbf-a7d1-a16af604fbea",
        "lines": {
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
      }
    ],
    "id": "18e545f9-d0e5-4dc6-94a7-1b1d0416f067",
    "position": {
      "position": [
        0,
        1,
        6
      ],
      "info": {
        "name": "queue-1",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "b04d9a75-1eac-4e19-9322-e4d48fc045e3"
    }
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-1-dead-letter",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-1-dead-letter",
        "destination_type": "queue",
        "routing_key": "queue-1-dead-letter",
        "arguments": {},
        "properties_key": "queue-1-dead-letter",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "6502915e-cb66-458e-84ab-d80673c16c37"
        },
        "id": "9b2d74a3-e5bc-415f-8bf1-901a27f04cc3",
        "lines": {
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
        }
      },
      {
        "source": "dead-letter-exchange-queue-1",
        "vhost": "/",
        "destination": "queue-1-dead-letter",
        "destination_type": "queue",
        "routing_key": "",
        "arguments": {},
        "properties_key": "~",
        "position": {
          "position": [
            5,
            2,
            3
          ],
          "info": {
            "name": "dead-letter-exchange-queue-1",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "856a7a79-062e-45d1-8cfb-d27fc055d10c"
        },
        "id": "7bf2f6a0-84cf-4ef9-8cfa-88c190fc11a8",
        "lines": {
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
        }
      }
    ],
    "consumers_register": [],
    "id": "adb641dc-25e7-41a0-914e-acae21c9fa45",
    "position": {
      "position": [
        2,
        1,
        6
      ],
      "info": {
        "name": "queue-1-dead-letter",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "3deb8243-c55d-46d1-914c-4268d525262f"
    }
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-2",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-2",
        "destination_type": "queue",
        "routing_key": "queue-2",
        "arguments": {},
        "properties_key": "queue-2",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "6502915e-cb66-458e-84ab-d80673c16c37"
        },
        "id": "5fe5fa5e-9b1c-40c4-be33-8e4310bcdaaf",
        "lines": {
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
        }
      },
      {
        "source": "exchange-queue-1-topic",
        "vhost": "/",
        "destination": "queue-2",
        "destination_type": "queue",
        "routing_key": "routing-key-exchange-queue-2",
        "arguments": {},
        "properties_key": "routing-key-exchange-queue-2",
        "position": {
          "position": [
            7,
            2,
            3
          ],
          "info": {
            "name": "exchange-queue-1-topic",
            "type": Type.topic,
            "componentType": "exchange"
          },
          "id": "819581f2-fd17-4d48-8f2e-c58a9db773ad"
        },
        "id": "f59fb4ad-8972-40f0-aa07-4fe6b0a14103",
        "lines": {
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
        }
      }
    ],
    "consumers_register": [],
    "id": "27dfa405-ca6f-4058-be7b-e3cac751fb8a",
    "position": {
      "position": [
        4,
        1,
        6
      ],
      "info": {
        "name": "queue-2",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "524631ff-39e0-4e5f-9781-e13a9a313383"
    }
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-3",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-3",
        "destination_type": "queue",
        "routing_key": "queue-3",
        "arguments": {},
        "properties_key": "queue-3",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "6502915e-cb66-458e-84ab-d80673c16c37"
        },
        "id": "0d5bd8b9-f4f2-4a0f-870c-af8bd5e88fb3",
        "lines": {
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
        }
      }
    ],
    "consumers_register": [],
    "id": "b327a3a7-18bf-424a-b87d-1b46c64b1565",
    "position": {
      "position": [
        1,
        2,
        6
      ],
      "info": {
        "name": "queue-3",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "4b1538f7-b88f-4ecd-a869-6a544cd5c48f"
    }
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "name": "queue-4",
    "node": "rabbit@rabbit-mapper-host",
    "vhost": "/",
    "type": "classic",
    "bindings": [
      {
        "source": "",
        "vhost": "/",
        "destination": "queue-4",
        "destination_type": "queue",
        "routing_key": "queue-4",
        "arguments": {},
        "properties_key": "queue-4",
        "position": {
          "position": [
            0,
            1,
            3
          ],
          "info": {
            "name": "",
            "type": Type.direct,
            "componentType": "exchange"
          },
          "id": "6502915e-cb66-458e-84ab-d80673c16c37"
        },
        "id": "0bec714d-0365-478d-b9cd-43f48b299693",
        "lines": {
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
      }
    ],
    "consumers_register": [],
    "id": "392a0251-1333-4289-9acc-6b8601626e5c",
    "position": {
      "position": [
        3,
        2,
        6
      ],
      "info": {
        "name": "queue-4",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "b386ba63-3ef7-4513-9fe9-8229783a493f"
    }
  }
]