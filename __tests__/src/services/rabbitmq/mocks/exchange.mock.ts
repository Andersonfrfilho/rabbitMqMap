const exchanges = [
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "",
    "type": "direct",
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
    "type": "direct",
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
    "type": "fanout",
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
    "type": "headers",
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
    "type": "headers",
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
    "type": "topic",
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
    "type": "topic",
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
    "type": "direct",
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
    "type": "topic",
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

const exchangesPosition = [
  {
    "id": "f93b414e-2d76-43c9-9372-adb24095d0dc",
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "",
    "type": "direct",
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
    ],
    "position": {
      "position": [
        0,
        1,
        3
      ],
      "info": {
        "name": "",
        "type": "direct",
        "componentType": "exchange"
      },
      "id": "4e08b399-71cb-4592-8a3b-5d87e5aa5bb3"
    }
  },
  {
    "id": "5d2fc601-4a7c-4253-9c78-6a282138860b",
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.direct",
    "type": "direct",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/",
    "bindings": [],
    "position": {
      "position": [
        2,
        1,
        3
      ],
      "info": {
        "name": "amq.direct",
        "type": "direct",
        "componentType": "exchange"
      },
      "id": "ecca8f8b-5209-44e4-9d9b-0a6dc1b1bf6c"
    }
  },
  {
    "id": "939cd45c-8935-433c-8062-c7ab50f1a1dd",
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.fanout",
    "type": "fanout",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/",
    "bindings": [],
    "position": {
      "position": [
        4,
        1,
        3
      ],
      "info": {
        "name": "amq.fanout",
        "type": "fanout",
        "componentType": "exchange"
      },
      "id": "b3118389-8de6-4b94-8f8c-7b362605a106"
    }
  },
  {
    "id": "f1787995-6d59-4a0d-9c4f-9c796a4da8c4",
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.headers",
    "type": "headers",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/",
    "bindings": [],
    "position": {
      "position": [
        6,
        1,
        3
      ],
      "info": {
        "name": "amq.headers",
        "type": "headers",
        "componentType": "exchange"
      },
      "id": "3aa6d2c2-6c27-4b30-be99-f085288a48e1"
    }
  },
  {
    "id": "d8ce61d1-a756-4211-b5a5-4ad55c9cafcc",
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.match",
    "type": "headers",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/",
    "bindings": [],
    "position": {
      "position": [
        8,
        1,
        3
      ],
      "info": {
        "name": "amq.match",
        "type": "headers",
        "componentType": "exchange"
      },
      "id": "e148d35d-0cc9-47a0-96b9-295c6ade532a"
    }
  },
  {
    "id": "b21b2deb-765f-4c75-bbfc-ef383b738d2b",
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": true,
    "name": "amq.rabbitmq.trace",
    "type": "topic",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/",
    "bindings": [],
    "position": {
      "position": [
        1,
        2,
        3
      ],
      "info": {
        "name": "amq.rabbitmq.trace",
        "type": "topic",
        "componentType": "exchange"
      },
      "id": "c2e5afaf-fb09-4c02-8987-cdde7c39cb73"
    }
  },
  {
    "id": "af8b9c79-f385-4e1d-8234-4b3ef6f700e0",
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.topic",
    "type": "topic",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/",
    "bindings": [],
    "position": {
      "position": [
        3,
        2,
        3
      ],
      "info": {
        "name": "amq.topic",
        "type": "topic",
        "componentType": "exchange"
      },
      "id": "51a6f7e5-c5fa-449b-b76c-019b2f20fe31"
    }
  },
  {
    "id": "16ad73e2-cdb4-4edb-8d9a-aa87dbf2eb72",
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "dead-letter-exchange-queue-1",
    "type": "direct",
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
    ],
    "position": {
      "position": [
        5,
        2,
        3
      ],
      "info": {
        "name": "dead-letter-exchange-queue-1",
        "type": "direct",
        "componentType": "exchange"
      },
      "id": "2cb4e399-f325-4118-a788-de159b7dccb1"
    }
  },
  {
    "id": "903a2f78-11a7-4fdc-99b3-fade77d78063",
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "exchange-queue-1-topic",
    "type": "topic",
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
    ],
    "position": {
      "position": [
        7,
        2,
        3
      ],
      "info": {
        "name": "exchange-queue-1-topic",
        "type": "topic",
        "componentType": "exchange"
      },
      "id": "90eb440a-769c-4eb9-904a-2da0001df7da"
    }
  }
]

const positions = [
  {
    "position": [
      0,
      1,
      3
    ],
    "info": {
      "name": "",
      "type": "direct",
      "componentType": "exchange"
    },
    "id": "1c4866c8-3c04-4767-9f91-a103e2b6a003"
  },
  {
    "position": [
      2,
      1,
      3
    ],
    "info": {
      "name": "amq.direct",
      "type": "direct",
      "componentType": "exchange"
    },
    "id": "c894e41b-b877-499f-8eaa-83400925c27a"
  },
  {
    "position": [
      4,
      1,
      3
    ],
    "info": {
      "name": "amq.fanout",
      "type": "fanout",
      "componentType": "exchange"
    },
    "id": "9ec52a6e-ef61-454f-b19e-1303cada8883"
  },
  {
    "position": [
      6,
      1,
      3
    ],
    "info": {
      "name": "amq.headers",
      "type": "headers",
      "componentType": "exchange"
    },
    "id": "086db4b3-42f3-41ad-8256-555904b8acd7"
  },
  {
    "position": [
      8,
      1,
      3
    ],
    "info": {
      "name": "amq.match",
      "type": "headers",
      "componentType": "exchange"
    },
    "id": "5bfd24b8-f40b-4d11-a545-ac7cfe7ea5e8"
  },
  {
    "position": [
      1,
      2,
      3
    ],
    "info": {
      "name": "amq.rabbitmq.trace",
      "type": "topic",
      "componentType": "exchange"
    },
    "id": "b8b919cb-ce8c-4ffa-bb62-0e8244e71466"
  },
  {
    "position": [
      3,
      2,
      3
    ],
    "info": {
      "name": "amq.topic",
      "type": "topic",
      "componentType": "exchange"
    },
    "id": "8dd87f07-d5e5-409c-8f7d-579b2112c721"
  },
  {
    "position": [
      5,
      2,
      3
    ],
    "info": {
      "name": "dead-letter-exchange-queue-1",
      "type": "direct",
      "componentType": "exchange"
    },
    "id": "5b2a2251-8287-499a-9d5b-e809fabf8128"
  },
  {
    "position": [
      7,
      2,
      3
    ],
    "info": {
      "name": "exchange-queue-1-topic",
      "type": "topic",
      "componentType": "exchange"
    },
    "id": "08251a80-76cb-41cf-b33f-9b7dd50223e7"
  }
]