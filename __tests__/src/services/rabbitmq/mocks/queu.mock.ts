const queues = [
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
        "activity_status": "up",
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

const positions = [
  {
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
    "id": "c64974af-1812-4775-8d46-81470c7fe6db"
  },
  {
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
    "id": "a3379d9e-dd53-4097-8f90-e46d91450366"
  },
  {
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
    "id": "c53f4a54-5b54-4965-a9cf-7d28c171abd6"
  },
  {
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
    "id": "40a71aa9-b019-4256-9c9c-3419b150b72b"
  },
  {
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
    "id": "dd80bd2b-1fad-4192-9277-60e50c96ca56"
  }
]