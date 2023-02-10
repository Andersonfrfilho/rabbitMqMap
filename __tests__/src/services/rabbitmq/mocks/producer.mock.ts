import { MessagePositions } from "@services/rabbitmq/interfaces/message.interface"
import { ProducerPositionLinesMessagePosition } from "@services/rabbitmq/interfaces/producer.interface"
import { exchanges } from "./exchange.mock"
import { faker } from "@faker-js/faker"
import { MessageFormParam } from "@contexts/component/functions/addMessageInProducers"

export const producers = [
  {
    "id": "a9b5afc7-6bea-4e87-956a-57352031a462",
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
        "time": 1,
        "payload": "{\n\"fila\":\"direct\"\n}",
        "id": "284d1cbc-b9c7-4d9e-baf9-1827dc1daae4",
        "color": "#7a2d16"
      },
      {
        "exchange": "amq.fanout",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"fanout\"\n}",
        "id": "e570d66e-5526-4013-9354-65a764e35d1d",
        "color": "#59b651"
      },
      {
        "exchange": "amq.headers",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"headers\"\n}",
        "id": "cf73c63e-8eb1-4d4e-b077-b07333ba810d",
        "color": "#1cc0c2"
      },
      {
        "exchange": "amq.match",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"match\"\n}",
        "id": "b1ebcb65-d165-4a39-b975-299f0706a146",
        "color": "#6e1e9d"
      },
      {
        "exchange": "amq.topic",
        "routeKey": "route-key-topic",
        "time": 1,
        "payload": "{\n\"fila\":\"route-key-topic\"\n}",
        "id": "063bb02b-dc70-443e-b9c7-76ab50d05404",
        "color": "#1ad1a6"
      },
      {
        "exchange": "exchange-queue-1-topic",
        "routeKey": "many.queue-3",
        "time": 1,
        "payload": "{\n\"fila\":\"route-key-topic\"\n}",
        "id": "063bb02b-dc70-443e-b9c7-76ab50d05674",
        "color": "#361c34"
      }
    ]
  }
]

export const producerPositionMessage = [
  {
    "id": "68d48ccf-66db-4703-8958-13df67f6e180",
    "host": "172.18.0.2",
    "name": "172.18.0.1:43838 -> 172.18.0.2:5672",
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
        "time": 1,
        "payload": "{\n\"fila\":\"direct\"\n}",
        "id": "284d1cbc-b9c7-4d9e-baf9-1827dc1daae4",
        "color": "#7a2d16"
      },
      {
        "exchange": "amq.fanout",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"fanout\"\n}",
        "id": "e570d66e-5526-4013-9354-65a764e35d1d",
        "color": "#59b651"
      },
      {
        "exchange": "amq.headers",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"headers\"\n}",
        "id": "cf73c63e-8eb1-4d4e-b077-b07333ba810d",
        "color": "#1cc0c2"
      },
      {
        "exchange": "amq.match",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"match\"\n}",
        "id": "b1ebcb65-d165-4a39-b975-299f0706a146",
        "color": "#6e1e9d"
      },
      {
        "exchange": "amq.topic",
        "routeKey": "route-key-topic",
        "time": 1,
        "payload": "{\n\"fila\":\"route-key-topic\"\n}",
        "id": "063bb02b-dc70-443e-b9c7-76ab50d05404",
        "color": "#1ad1a6"
      },
      {
        "exchange": "exchange-queue-1-topic",
        "routeKey": "many.queue-3",
        "time": 1,
        "payload": "{\n\"fila\":\"route-key-topic\"\n}",
        "id": "063bb02b-dc70-443e-b9c7-76ab50d05674",
        "color": "#361c34"
      }
    ],
    "position": {
      "position": [
        0,
        -1,
        0
      ],
      "info": {
        "name": "project-nextjs-producer",
        "type": "network",
        "componentType": "producer"
      },
      "id": "45acdcbf-1abe-4640-ab32-66963652b273"
    }
  }
]

export const positions = [
  {
    "position": [
      0,
      -1,
      0
    ],
    "info": {
      "name": "project-nextjs-producer",
      "type": "network",
      "componentType": "producer"
    },
    "id": "284448aa-9064-4fcb-8ce4-3c0cde26ab03"
  }
]

export const producersPositionMessagesPosition: ProducerPositionLinesMessagePosition[] = [
  {
    "id": "79a3fb8f-916d-4f21-b7cb-65e50e39f187",
    "host": "172.18.0.2",
    "name": "172.18.0.1:44478 -> 172.18.0.2:5672",
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
        "time": 1,
        "payload": "{\n\"fila\":\"direct\"\n}",
        "id": "284d1cbc-b9c7-4d9e-baf9-1827dc1daae4",
        "color": "#7a2d16",
        "positions": {
          "producerBetweenExchange": [
            {
              "id": "588b80df-f969-4fba-9837-d408500f001c",
              "position": [
                0,
                -1,
                0
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "f372a62e-ce72-4ba7-b19c-91b64668582b",
              "position": [
                0.02,
                -0.98,
                0.03
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "7a6fc8a6-9250-4abe-8c3c-e6640f257d7b",
              "position": [
                0.04,
                -0.96,
                0.06
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "dcd540b2-0fe4-46e4-ad94-c2894c355203",
              "position": [
                0.06,
                -0.94,
                0.09
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "21e8e261-e30a-43e0-86ff-73d5ca923205",
              "position": [
                0.08,
                -0.92,
                0.12
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "741eef4e-6e4e-46b1-9fec-efd56de8d048",
              "position": [
                0.1,
                -0.9,
                0.15
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "420e3e0f-9750-4310-aeef-c3be8b731913",
              "position": [
                0.12,
                -0.88,
                0.18
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "278791ef-be23-440f-8193-e7a8921e38ab",
              "position": [
                0.14,
                -0.86,
                0.21
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "1e65d90c-98b1-4dd5-b3b4-f96040987aa9",
              "position": [
                0.16,
                -0.84,
                0.24
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "718204b8-c011-4940-a2a5-a4ae371d6dda",
              "position": [
                0.18,
                -0.8200000000000001,
                0.27
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "f386b004-17b3-48d2-a06a-b46b2088687f",
              "position": [
                0.2,
                -0.8,
                0.3
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "72a875ef-55f6-469e-b12b-04afe8d3bee5",
              "position": [
                0.22,
                -0.78,
                0.33
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "031b2953-b292-415b-b236-5262589e80d7",
              "position": [
                0.24,
                -0.76,
                0.36
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "617fad70-0467-4e79-aba1-0bb57becb4de",
              "position": [
                0.26,
                -0.74,
                0.39
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "5406e963-c30b-437c-a0d6-20c5d376e1bd",
              "position": [
                0.28,
                -0.72,
                0.42
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "e81006d8-5b74-40ad-aa94-7b01219edc3f",
              "position": [
                0.3,
                -0.7,
                0.45
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "70182841-9bc8-44f9-9058-3023a89b445b",
              "position": [
                0.32,
                -0.6799999999999999,
                0.48
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "ca53108e-8477-4fe9-9404-a0ebd9e9dfa4",
              "position": [
                0.34,
                -0.6599999999999999,
                0.51
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "1657ae6f-0041-470b-82a6-2eb9dc634ff1",
              "position": [
                0.36,
                -0.64,
                0.54
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "b4d6ec9b-da14-4d51-aa3f-30046b1cee1e",
              "position": [
                0.38,
                -0.62,
                0.57
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "206b959f-39f1-4194-8bba-6b79eb142bbf",
              "position": [
                0.4,
                -0.6,
                0.6
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "44438e45-7e84-445a-a543-182e06889315",
              "position": [
                0.42,
                -0.5800000000000001,
                0.63
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "d2e9d0d7-9c3c-4104-9673-6356076dfd9d",
              "position": [
                0.44,
                -0.56,
                0.66
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "7d7ddd80-4d86-4e15-9639-6e1432a2c4cb",
              "position": [
                0.46,
                -0.54,
                0.69
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "aab5db06-cbe5-466b-9a1e-0e5aba04e2b4",
              "position": [
                0.48,
                -0.52,
                0.72
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "68802d6b-2a35-4397-9e48-44aa63b43ae8",
              "position": [
                0.5,
                -0.5,
                0.75
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "5a557bf3-1d1b-4d0b-a879-87d4e2534a23",
              "position": [
                0.52,
                -0.48,
                0.78
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "3842d003-e2e0-45fa-8b46-2717e905c03f",
              "position": [
                0.54,
                -0.45999999999999996,
                0.81
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "3388cc06-ba9f-4a7c-970b-91cdffecda70",
              "position": [
                0.56,
                -0.43999999999999995,
                0.84
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "686ddd8a-59b4-4113-b6cb-28d192782be0",
              "position": [
                0.58,
                -0.42000000000000004,
                0.87
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "87154e06-9136-40ee-9a63-5c2b50d8a8e8",
              "position": [
                0.6,
                -0.4,
                0.9
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "611d9603-f4b1-4547-af63-c281d2223580",
              "position": [
                0.62,
                -0.38,
                0.93
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "80d1954c-f461-4bef-b729-a2ea2aed8a4d",
              "position": [
                0.64,
                -0.36,
                0.96
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "8b837b84-7db8-4bd2-8e01-2e40f152f1c7",
              "position": [
                0.66,
                -0.33999999999999997,
                0.99
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "be6d477d-ec64-4712-b906-5542f728eb38",
              "position": [
                0.68,
                -0.31999999999999995,
                1.02
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "cc48d4e6-ae17-485c-94fb-b22ea87cf319",
              "position": [
                0.7,
                -0.30000000000000004,
                1.05
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "d90dc35c-6998-4251-8c89-9186c013d087",
              "position": [
                0.72,
                -0.28,
                1.08
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "8882279b-e445-4ee5-a5e5-91245941d6df",
              "position": [
                0.74,
                -0.26,
                1.11
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "939d58f8-9e37-4277-aafe-9adf78357745",
              "position": [
                0.76,
                -0.24,
                1.14
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "0eeadf06-54df-49d3-a15a-f11752865cad",
              "position": [
                0.78,
                -0.21999999999999997,
                1.17
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "de64a601-387f-4ca3-b060-026fae2db85c",
              "position": [
                0.8,
                -0.19999999999999996,
                1.2
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "2c777dba-f4c9-4992-b5d8-a5b51bb72e3a",
              "position": [
                0.82,
                -0.18000000000000005,
                1.23
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "e9c1ddff-75c1-4f3f-b337-be5ef26198f8",
              "position": [
                0.84,
                -0.16000000000000003,
                1.26
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "404fb3eb-0cd2-41db-83b9-85559584d696",
              "position": [
                0.86,
                -0.14,
                1.29
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "2866c7c1-c516-4ec6-960c-1994798a89a3",
              "position": [
                0.88,
                -0.12,
                1.32
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "1fbff31c-e52c-4286-afaf-ca946fdbb7ac",
              "position": [
                0.9,
                -0.09999999999999998,
                1.35
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "03ad10f6-de61-45b4-a9b1-61450de88d77",
              "position": [
                0.92,
                -0.07999999999999996,
                1.38
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "f4cb1efe-571b-4765-8c62-8fd38d703b67",
              "position": [
                0.94,
                -0.06000000000000005,
                1.41
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "2015d463-a261-4de0-8e72-dc5984137d05",
              "position": [
                0.96,
                -0.040000000000000036,
                1.44
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "e1e1a2aa-7dd4-49cb-bcb3-68d283bc1328",
              "position": [
                0.98,
                -0.020000000000000018,
                1.47
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "06718749-31ba-4f72-becd-5f7d04d15d32",
              "position": [
                1,
                0,
                1.5
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "fe0b7b7e-8936-47f0-8105-3f1f8133f7d9",
              "position": [
                1.02,
                0.020000000000000018,
                1.53
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "cab89843-e00a-4da7-b985-569026c8579a",
              "position": [
                1.04,
                0.040000000000000036,
                1.56
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "bdbe7155-4dc3-4d83-a58e-1472b361a417",
              "position": [
                1.06,
                0.06000000000000005,
                1.59
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "20897ce2-8aaa-43a0-872d-3b2002db9593",
              "position": [
                1.08,
                0.08000000000000007,
                1.62
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "c2d74c41-bbb3-4e9e-870b-0a3a7e7ed8bf",
              "position": [
                1.1,
                0.10000000000000009,
                1.65
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "9a35a2bb-60bc-420a-b03a-5b60dab1d83d",
              "position": [
                1.12,
                0.1200000000000001,
                1.68
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "bec131a5-2827-48cd-8ed0-8b50bdd227ac",
              "position": [
                1.14,
                0.1399999999999999,
                1.71
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "da6402dc-c209-4934-8fe2-2f7d881135d8",
              "position": [
                1.16,
                0.15999999999999992,
                1.74
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "ec418771-8c8f-48ae-8b1d-ffac9f43c55e",
              "position": [
                1.18,
                0.17999999999999994,
                1.77
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "83f8b6f3-d10a-47a5-8f19-f259b31dfc59",
              "position": [
                1.2,
                0.19999999999999996,
                1.8
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "b80fcdef-0ab6-4910-9d69-f51641740191",
              "position": [
                1.22,
                0.21999999999999997,
                1.83
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "19bcc727-287f-45d6-b731-42e6a7027e94",
              "position": [
                1.24,
                0.24,
                1.86
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "323fde1f-f714-4567-baa7-e86e51722293",
              "position": [
                1.26,
                0.26,
                1.89
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "01a2a267-49a1-4ff1-a231-a3470ab79f85",
              "position": [
                1.28,
                0.28,
                1.92
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "7f90aefa-616d-44bd-88c0-35b39a9e9188",
              "position": [
                1.3,
                0.30000000000000004,
                1.95
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "a1c47621-44f8-4b9c-9e7b-4bedfb352d58",
              "position": [
                1.32,
                0.32000000000000006,
                1.98
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "6ff592f6-a88b-4fde-8cc3-a09bfa3ca0e2",
              "position": [
                1.34,
                0.3400000000000001,
                2.01
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "c8ac68d4-4342-4376-a4e8-1c07c1810491",
              "position": [
                1.36,
                0.3600000000000001,
                2.04
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "5503d4e4-279e-4697-bdfe-796859ee6684",
              "position": [
                1.38,
                0.3799999999999999,
                2.07
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "38ade1de-b4ff-4a9c-8043-e8d3b631c1a0",
              "position": [
                1.4,
                0.3999999999999999,
                2.1
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "ab6f95d5-5235-4b96-8d29-797625dcd3c6",
              "position": [
                1.42,
                0.41999999999999993,
                2.13
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "754996a9-9dec-4adf-be5a-3411b3a02953",
              "position": [
                1.44,
                0.43999999999999995,
                2.16
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "4a6a0034-adc8-47ba-a897-24c3471b0a38",
              "position": [
                1.46,
                0.45999999999999996,
                2.19
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "578c4b0d-69a2-460e-8df9-055e47fe2bf5",
              "position": [
                1.48,
                0.48,
                2.22
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "829361f2-e142-41d3-b3e4-b7e3ac85385f",
              "position": [
                1.5,
                0.5,
                2.25
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "0b56754d-d633-4170-84d6-3581e859870d",
              "position": [
                1.52,
                0.52,
                2.28
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "ed22b809-7a79-4913-8a19-85dfe3299051",
              "position": [
                1.54,
                0.54,
                2.31
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "587c5ed1-511a-4a25-8bce-8c3eb9d701e6",
              "position": [
                1.56,
                0.56,
                2.34
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "1b8feda8-79b1-45d8-841c-bc06c5c9cb21",
              "position": [
                1.58,
                0.5800000000000001,
                2.37
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "9490ea70-21b5-4734-8d68-aa819351e6df",
              "position": [
                1.6,
                0.6000000000000001,
                2.4
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "4b366be7-e084-48f6-b29b-5dc0936c7d31",
              "position": [
                1.62,
                0.6200000000000001,
                2.43
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "5c1e6390-466e-40ee-aa6d-4eab039aaa20",
              "position": [
                1.64,
                0.6399999999999999,
                2.46
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "1039142c-58bf-4760-b149-beba265db32d",
              "position": [
                1.66,
                0.6599999999999999,
                2.49
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "aa5cc7c2-fb2c-4f7f-adf7-4b301aaa6754",
              "position": [
                1.68,
                0.6799999999999999,
                2.52
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "122d2581-ddee-4ca7-9932-3ca772a68953",
              "position": [
                1.7,
                0.7,
                2.55
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "e8a00429-665e-45a6-bd8e-ac9267f93d25",
              "position": [
                1.72,
                0.72,
                2.58
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "ff4e6f60-43b4-470b-b797-6c282e180d37",
              "position": [
                1.74,
                0.74,
                2.61
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "7a7b6d6c-3018-4918-9e10-710764a60616",
              "position": [
                1.76,
                0.76,
                2.64
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "d8827534-cd03-4c2c-bf90-fcc94cf85e2d",
              "position": [
                1.78,
                0.78,
                2.67
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "58940590-7b82-4bf1-8951-b0aec0fa49b2",
              "position": [
                1.8,
                0.8,
                2.7
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "11d1d0f6-aa63-413d-9a1a-0551272f490b",
              "position": [
                1.82,
                0.8200000000000001,
                2.73
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "53b1ccf3-27cb-4826-b64f-c39f941c1f1a",
              "position": [
                1.84,
                0.8400000000000001,
                2.76
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "0fd2c7e3-9f9e-40a5-a5da-2d73513d132a",
              "position": [
                1.86,
                0.8600000000000001,
                2.79
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "83a246e8-326b-4578-bf29-3875af992c9d",
              "position": [
                1.88,
                0.8799999999999999,
                2.82
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "c232f150-0ad3-4359-a0ed-9eaf0d370dc1",
              "position": [
                1.9,
                0.8999999999999999,
                2.85
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "3a444e3f-2ee3-4b7f-8f95-fe10ff9f9078",
              "position": [
                1.92,
                0.9199999999999999,
                2.88
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "9682392b-93ec-4902-93f9-ec5fc0cef60c",
              "position": [
                1.94,
                0.94,
                2.91
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "097c7f7f-a1c6-4ec0-8737-29a1e444d2b2",
              "position": [
                1.96,
                0.96,
                2.94
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            },
            {
              "id": "cbddc7db-0546-4658-939a-9b5c6d55fe25",
              "position": [
                1.98,
                0.98,
                2.97
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.direct"
              }
            }
          ],
          "exchangeBetweenQueue": [],
          "queueBetweenConsumer": []
        }
      },
      {
        "exchange": "amq.fanout",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"fanout\"\n}",
        "id": "e570d66e-5526-4013-9354-65a764e35d1d",
        "color": "#59b651",
        "positions": {
          "producerBetweenExchange": [
            {
              "id": "4371853e-ddaf-41b8-a6fa-63c1ee9f9e55",
              "position": [
                0,
                -1,
                0
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "f009342d-8eb6-49e8-a7b0-307a648c6fa8",
              "position": [
                0.04,
                -0.98,
                0.03
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "b323f167-d208-4430-a399-c71f667265bc",
              "position": [
                0.08,
                -0.96,
                0.06
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "a2761f05-6b08-4d63-94df-60a2a0285464",
              "position": [
                0.12,
                -0.94,
                0.09
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "58adcf75-ab73-4bfb-a15c-8d1daa920a3b",
              "position": [
                0.16,
                -0.92,
                0.12
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "cdafb90f-994c-45fa-b09b-a6e7ee646afe",
              "position": [
                0.2,
                -0.9,
                0.15
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "872780dd-f267-4a9d-9a54-c90a98106bb1",
              "position": [
                0.24,
                -0.88,
                0.18
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "fa69a7c4-9cb6-4db6-a641-8de94159feff",
              "position": [
                0.28,
                -0.86,
                0.21
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "1541ca34-5d9a-46ea-b8c2-b6cd91b480ca",
              "position": [
                0.32,
                -0.84,
                0.24
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "c9edf518-8acc-4ee0-bdbb-6d5f25df925d",
              "position": [
                0.36,
                -0.8200000000000001,
                0.27
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "814ca458-cdba-46a6-94f1-d9e098ca37ef",
              "position": [
                0.4,
                -0.8,
                0.3
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "9c060979-6445-427c-8582-f3d19f48035d",
              "position": [
                0.44,
                -0.78,
                0.33
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "12df648b-e9b5-4eea-affe-f24af9394d55",
              "position": [
                0.48,
                -0.76,
                0.36
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "42fb7636-5c5c-4da5-8c4b-33fee2f3b525",
              "position": [
                0.52,
                -0.74,
                0.39
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "4f208607-de56-4aaf-800e-124480446c18",
              "position": [
                0.56,
                -0.72,
                0.42
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "8013a6bc-56dc-4bc5-b55a-92b1ceda08d6",
              "position": [
                0.6,
                -0.7,
                0.45
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "7dde6ed4-442c-4d85-9b2f-b476141a5f41",
              "position": [
                0.64,
                -0.6799999999999999,
                0.48
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "72d4851d-d2d5-427c-9b09-517285358a9c",
              "position": [
                0.68,
                -0.6599999999999999,
                0.51
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "9acbe7ac-84b3-4a53-aa01-0cf6ff2685e8",
              "position": [
                0.72,
                -0.64,
                0.54
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "1dafa636-9fed-4e0d-848f-faab14ed12d4",
              "position": [
                0.76,
                -0.62,
                0.57
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "14af3078-9c97-4449-a1f1-605d2aaa5ac6",
              "position": [
                0.8,
                -0.6,
                0.6
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "288b15e9-269f-4767-80ae-52351a7f4409",
              "position": [
                0.84,
                -0.5800000000000001,
                0.63
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "4f27b4ad-a965-4377-94a0-a2dead3445f6",
              "position": [
                0.88,
                -0.56,
                0.66
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "c00a0fc2-26b1-40dc-8cca-ce8901ca8dd4",
              "position": [
                0.92,
                -0.54,
                0.69
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "d23d4b6d-d9e6-4eaf-8b70-e9c7a0e19076",
              "position": [
                0.96,
                -0.52,
                0.72
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "152fcf33-a2a2-4193-a085-917bdff5106b",
              "position": [
                1,
                -0.5,
                0.75
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "21cd6105-1d3d-4ce8-9a80-faef6a275b94",
              "position": [
                1.04,
                -0.48,
                0.78
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "d1cb95d2-b9c8-4f88-80cc-b7ddfce5e9c8",
              "position": [
                1.08,
                -0.45999999999999996,
                0.81
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "763408a6-9631-497c-8ef2-cb6a0be4d95a",
              "position": [
                1.12,
                -0.43999999999999995,
                0.84
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "80dbc13c-515d-4039-b56f-c4cd87924cc4",
              "position": [
                1.16,
                -0.42000000000000004,
                0.87
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "a911e422-01b1-48b0-abd6-eb062ac3837f",
              "position": [
                1.2,
                -0.4,
                0.9
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "cf22fb30-4493-48ea-aaf4-a23ce12d70ee",
              "position": [
                1.24,
                -0.38,
                0.93
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "72d0981f-e2f7-4fd5-9347-3d9fad59f3e2",
              "position": [
                1.28,
                -0.36,
                0.96
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "60fd45cb-92ab-4133-977b-8e89dd1cd426",
              "position": [
                1.32,
                -0.33999999999999997,
                0.99
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "68e2430b-9b27-4434-ad43-3be16252f548",
              "position": [
                1.36,
                -0.31999999999999995,
                1.02
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "eb4513a7-a047-49c7-9e43-b0d2edd68ac3",
              "position": [
                1.4,
                -0.30000000000000004,
                1.05
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "d190b8a7-c507-49cc-90a8-d65189ae462f",
              "position": [
                1.44,
                -0.28,
                1.08
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "56592fb7-86d2-46c6-84ff-10bdf4a30f4b",
              "position": [
                1.48,
                -0.26,
                1.11
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "79131517-f352-4187-8334-df45fc26092d",
              "position": [
                1.52,
                -0.24,
                1.14
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "ffd46f67-2030-48b0-b626-8352bbaab551",
              "position": [
                1.56,
                -0.21999999999999997,
                1.17
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "e617fc1d-341c-4ff2-99c4-aaa909966bf2",
              "position": [
                1.6,
                -0.19999999999999996,
                1.2
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "ce65adf8-a018-40ee-8b7d-eb779a3fb253",
              "position": [
                1.64,
                -0.18000000000000005,
                1.23
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "83be610b-efe9-4b18-98d2-90b466d1767c",
              "position": [
                1.68,
                -0.16000000000000003,
                1.26
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "10024d3b-2a10-4f05-a07d-0ee409434c94",
              "position": [
                1.72,
                -0.14,
                1.29
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "2cea6eb6-081d-400c-8378-b102f2f43eaf",
              "position": [
                1.76,
                -0.12,
                1.32
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "762f1cc1-14fd-4c65-a293-bd23ea1d39e5",
              "position": [
                1.8,
                -0.09999999999999998,
                1.35
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "d8792d7c-9a18-45cc-a5b0-a5b4b183c0a6",
              "position": [
                1.84,
                -0.07999999999999996,
                1.38
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "6e118c6e-08b3-4112-a480-08b591c97132",
              "position": [
                1.88,
                -0.06000000000000005,
                1.41
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "a7db037d-a345-4307-97ee-2c794069e3f9",
              "position": [
                1.92,
                -0.040000000000000036,
                1.44
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "e5c339a3-0e51-4d04-b50d-1f1a8d06ff6b",
              "position": [
                1.96,
                -0.020000000000000018,
                1.47
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "1562613d-aa2a-4ca6-9edb-6b64f6d21a12",
              "position": [
                2,
                0,
                1.5
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "f71960be-6df7-4567-92f9-894f8513d1e6",
              "position": [
                2.04,
                0.020000000000000018,
                1.53
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "9a728b19-d10f-4e13-b7df-26c5a30feff5",
              "position": [
                2.08,
                0.040000000000000036,
                1.56
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "696f0a3c-6028-4e61-8c4f-059e0ce47066",
              "position": [
                2.12,
                0.06000000000000005,
                1.59
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "08b83076-f142-452d-84ce-5a6464c58f8e",
              "position": [
                2.16,
                0.08000000000000007,
                1.62
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "4bad3c69-2c5f-424e-8de7-da56ff6ca58e",
              "position": [
                2.2,
                0.10000000000000009,
                1.65
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "4b241b49-b9dc-4fc6-a46e-08b6d0dc8915",
              "position": [
                2.24,
                0.1200000000000001,
                1.68
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "8d034a5e-3290-4765-9962-ced6fcb05bb2",
              "position": [
                2.28,
                0.1399999999999999,
                1.71
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "d0888df8-97bb-469e-9603-65dc8d2f2071",
              "position": [
                2.32,
                0.15999999999999992,
                1.74
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "aa7156ba-073f-45c2-b41d-be2d92310aab",
              "position": [
                2.36,
                0.17999999999999994,
                1.77
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "b93f4bb3-e390-44d2-867d-cd9a4944f298",
              "position": [
                2.4,
                0.19999999999999996,
                1.8
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "5c790e77-432f-4999-992b-d52302b85b45",
              "position": [
                2.44,
                0.21999999999999997,
                1.83
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "5d75a723-f3f1-4eb5-9317-72094b07586c",
              "position": [
                2.48,
                0.24,
                1.86
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "c6c932ec-3523-45a3-a86e-48eab1c5728c",
              "position": [
                2.52,
                0.26,
                1.89
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "8d5c8378-ab4c-4ced-831e-7ccd0f1729d8",
              "position": [
                2.56,
                0.28,
                1.92
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "12d6b311-981c-406f-9792-2a4b87e394e5",
              "position": [
                2.6,
                0.30000000000000004,
                1.95
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "180e3cf0-7c29-40b0-9dbb-27725475dc7a",
              "position": [
                2.64,
                0.32000000000000006,
                1.98
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "bbbbe2c4-2aef-4b42-82dd-f2fd71cc2ee3",
              "position": [
                2.68,
                0.3400000000000001,
                2.01
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "d3d63ffd-5bb3-4c2b-a785-c195c9bfb21a",
              "position": [
                2.72,
                0.3600000000000001,
                2.04
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "5a144607-ed51-45fb-987a-b5edbfb6ccb6",
              "position": [
                2.76,
                0.3799999999999999,
                2.07
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "a27bf321-748e-41ee-9fb7-9534ba585557",
              "position": [
                2.8,
                0.3999999999999999,
                2.1
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "729e509e-99f5-4ad1-85a0-5515df6b61f5",
              "position": [
                2.84,
                0.41999999999999993,
                2.13
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "b63fee63-e4df-486c-a9d0-520a10d3bf66",
              "position": [
                2.88,
                0.43999999999999995,
                2.16
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "c0dd544c-9183-4e41-86df-9c3b65ee30a2",
              "position": [
                2.92,
                0.45999999999999996,
                2.19
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "0e54d02d-9410-4154-a836-7a207fd67a3e",
              "position": [
                2.96,
                0.48,
                2.22
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "1f6ea035-2e16-41ea-859f-0f87ad6ac2c2",
              "position": [
                3,
                0.5,
                2.25
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "de275c9c-85e9-47ae-8765-d746ec2cdb66",
              "position": [
                3.04,
                0.52,
                2.28
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "62477b78-524d-4b8d-b2a6-ca8c915d0a9d",
              "position": [
                3.08,
                0.54,
                2.31
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "8bc9dcde-e4f6-4eb6-8091-78c4b9de5bfc",
              "position": [
                3.12,
                0.56,
                2.34
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "551fd932-ee2f-4b52-a37e-8db5db6e7b18",
              "position": [
                3.16,
                0.5800000000000001,
                2.37
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "d042bab1-41bb-4b5f-9282-c4db88572636",
              "position": [
                3.2,
                0.6000000000000001,
                2.4
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "242ad252-dc0f-41ce-b64a-72c4a511f685",
              "position": [
                3.24,
                0.6200000000000001,
                2.43
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "b0accfef-158b-4471-a8f2-9b4f31741cb5",
              "position": [
                3.28,
                0.6399999999999999,
                2.46
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "8c5ff687-4904-44c3-b33c-5bc1a0366a62",
              "position": [
                3.32,
                0.6599999999999999,
                2.49
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "b8ff847c-b6b3-4f61-83d1-c3005da48206",
              "position": [
                3.36,
                0.6799999999999999,
                2.52
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "98a6e5ca-9d84-4ff2-912f-b3d1d9c1f913",
              "position": [
                3.4,
                0.7,
                2.55
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "e6c6c5c6-0424-43a1-9c2f-9a181faf0beb",
              "position": [
                3.44,
                0.72,
                2.58
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "e25462a5-b8d0-4f68-9178-e73871e14581",
              "position": [
                3.48,
                0.74,
                2.61
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "7ff8f981-2824-43f6-afc2-8bf2b352851d",
              "position": [
                3.52,
                0.76,
                2.64
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "e65153df-fa07-4dec-90d4-495a7faf2714",
              "position": [
                3.56,
                0.78,
                2.67
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "94d36c64-6874-4eac-921f-14efa49a27dd",
              "position": [
                3.6,
                0.8,
                2.7
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "00ed870a-b8e5-4ee7-bc82-9fe23cc45b0c",
              "position": [
                3.64,
                0.8200000000000001,
                2.73
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "0f542f76-701f-4c7a-ae7b-adc90be48e49",
              "position": [
                3.68,
                0.8400000000000001,
                2.76
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "a23f339f-6f0d-4734-8ef7-139cbf039cb9",
              "position": [
                3.72,
                0.8600000000000001,
                2.79
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "e28c0bf6-f3da-4a04-9637-dc7838a0ad0f",
              "position": [
                3.76,
                0.8799999999999999,
                2.82
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "76cb3b87-1c67-4a30-a301-b7d3abc90582",
              "position": [
                3.8,
                0.8999999999999999,
                2.85
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "1b2c0d2e-f652-4e10-ac2a-542e5c38036d",
              "position": [
                3.84,
                0.9199999999999999,
                2.88
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "bfff6b5c-9c9a-46db-978a-d721ae56c226",
              "position": [
                3.88,
                0.94,
                2.91
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "fe9ba44f-3a9e-4dd5-846b-c045ce15a658",
              "position": [
                3.92,
                0.96,
                2.94
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            },
            {
              "id": "236a2214-1909-429b-bd3b-2b9c271b8a26",
              "position": [
                3.96,
                0.98,
                2.97
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.fanout"
              }
            }
          ],
          "exchangeBetweenQueue": [],
          "queueBetweenConsumer": []
        }
      },
      {
        "exchange": "amq.headers",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"headers\"\n}",
        "id": "cf73c63e-8eb1-4d4e-b077-b07333ba810d",
        "color": "#1cc0c2",
        "positions": {
          "producerBetweenExchange": [
            {
              "id": "e968731a-ec4a-4344-b048-fc59f1b44279",
              "position": [
                0,
                -1,
                0
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "7d52a9ac-ae32-451e-9db3-13e054542da0",
              "position": [
                0.06,
                -0.98,
                0.03
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "c67b55ae-2d7a-4f1a-9d79-9f982603f27b",
              "position": [
                0.12,
                -0.96,
                0.06
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "07e93482-8a4e-4905-a32e-04a729942342",
              "position": [
                0.18,
                -0.94,
                0.09
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "3862be5e-2530-4001-95ac-d164e8bfb2ae",
              "position": [
                0.24,
                -0.92,
                0.12
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "c1ba61a0-8b2c-43b1-9eec-e17a2b5a17f1",
              "position": [
                0.3,
                -0.9,
                0.15
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "74f1ed76-852e-4ba5-a392-8d155feabf74",
              "position": [
                0.36,
                -0.88,
                0.18
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "f0184d60-02b3-4232-8071-74ce53889d0b",
              "position": [
                0.42,
                -0.86,
                0.21
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "d37e350e-7471-42ce-a254-975fb3608d0b",
              "position": [
                0.48,
                -0.84,
                0.24
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "4c7f2fa8-e1ef-49fe-9674-453eaeb9c262",
              "position": [
                0.54,
                -0.8200000000000001,
                0.27
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "58382ab6-9c7a-4320-9686-017f0101bc9c",
              "position": [
                0.6,
                -0.8,
                0.3
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "310ef25a-63ea-4713-844d-6d56ac0c617d",
              "position": [
                0.66,
                -0.78,
                0.33
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "a763a0cd-3f44-45bb-bbf8-cbdd9cfa1efe",
              "position": [
                0.72,
                -0.76,
                0.36
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "0d449ddb-b322-437b-9fd4-2852bd2188ce",
              "position": [
                0.78,
                -0.74,
                0.39
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "95bf3071-88ad-44c0-87ac-b8b7f780f729",
              "position": [
                0.84,
                -0.72,
                0.42
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "61426d1f-995f-412c-b84a-cc4b7898503f",
              "position": [
                0.9,
                -0.7,
                0.45
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "1d3bae11-ea73-4b69-9067-9b23906874aa",
              "position": [
                0.96,
                -0.6799999999999999,
                0.48
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "030b94ca-391e-4c84-94b1-99e5574cbb0b",
              "position": [
                1.02,
                -0.6599999999999999,
                0.51
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "5422425f-85a1-4594-ad08-bc33032f6c6e",
              "position": [
                1.08,
                -0.64,
                0.54
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "305a0376-6f8b-4fb6-acb9-66bbe2316b96",
              "position": [
                1.14,
                -0.62,
                0.57
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "9d8c4782-f166-4fa1-a9d6-bf6108afa110",
              "position": [
                1.2,
                -0.6,
                0.6
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "90e73f0f-56d1-4de5-9604-d549ca5d9619",
              "position": [
                1.26,
                -0.5800000000000001,
                0.63
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "df9fc098-ef07-4b2f-8450-a7682684bdac",
              "position": [
                1.32,
                -0.56,
                0.66
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "4ff14a84-d6bc-4810-9c2f-a54f7f70592c",
              "position": [
                1.38,
                -0.54,
                0.69
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "8067c85b-b2c1-44fb-9c25-f5d107d06ab9",
              "position": [
                1.44,
                -0.52,
                0.72
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "e7acf506-b9bc-4a13-a886-6c0e690c6e4d",
              "position": [
                1.5,
                -0.5,
                0.75
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "882d08b1-69a9-41f3-a5a7-34150467ef81",
              "position": [
                1.56,
                -0.48,
                0.78
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "2e2cb852-1fe9-4824-b78b-6d66d0c19148",
              "position": [
                1.62,
                -0.45999999999999996,
                0.81
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "e9f41fcf-ccaa-4760-8f6c-b001673f0688",
              "position": [
                1.68,
                -0.43999999999999995,
                0.84
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "345083d4-f1bd-4e56-987e-a53d2d91ded3",
              "position": [
                1.74,
                -0.42000000000000004,
                0.87
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "c7914e2e-8cfc-49d5-9e34-17a16423f373",
              "position": [
                1.8,
                -0.4,
                0.9
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "5d2b88f2-d723-4ebb-b312-9a3b8464aadc",
              "position": [
                1.86,
                -0.38,
                0.93
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "5083e123-df9e-4918-a6f5-b33376d663e3",
              "position": [
                1.92,
                -0.36,
                0.96
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "afe06289-f307-4a6e-8324-88754a41cb7a",
              "position": [
                1.98,
                -0.33999999999999997,
                0.99
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "4356be8f-2a5e-4422-aba7-e3af1d2378e2",
              "position": [
                2.04,
                -0.31999999999999995,
                1.02
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "ef455541-6165-471a-a149-a39706398ece",
              "position": [
                2.1,
                -0.30000000000000004,
                1.05
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "a8b85fa6-9098-4a22-9164-22246b6faf30",
              "position": [
                2.16,
                -0.28,
                1.08
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "99f98ae8-17a4-4dfd-91ae-b5f70159463b",
              "position": [
                2.22,
                -0.26,
                1.11
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "46036fca-5d5b-4476-a769-725042c50c83",
              "position": [
                2.28,
                -0.24,
                1.14
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "79842ab4-066d-4aa2-b054-14d0cdc5f141",
              "position": [
                2.34,
                -0.21999999999999997,
                1.17
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "4a7b52d0-c573-401f-a8e2-c635bdc44b99",
              "position": [
                2.4,
                -0.19999999999999996,
                1.2
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "96c74749-375b-4c21-adb6-71f74f0c87aa",
              "position": [
                2.46,
                -0.18000000000000005,
                1.23
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "b65b0f36-08c1-43a4-8dc8-dba71daf965d",
              "position": [
                2.52,
                -0.16000000000000003,
                1.26
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "ec615e3b-d515-4053-a2ef-7b96d5327432",
              "position": [
                2.58,
                -0.14,
                1.29
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "9dac3036-5c4d-4ad3-89a0-0bbebde2eaf8",
              "position": [
                2.64,
                -0.12,
                1.32
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "6a764753-1dab-4b89-8c71-ffc8534d2786",
              "position": [
                2.7,
                -0.09999999999999998,
                1.35
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "8397ba66-86bd-4405-b509-2c104034c771",
              "position": [
                2.76,
                -0.07999999999999996,
                1.38
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "257998ff-bb0d-4dbc-b11f-5133829c905c",
              "position": [
                2.82,
                -0.06000000000000005,
                1.41
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "a269c654-988f-4828-a2a1-c6c344632342",
              "position": [
                2.88,
                -0.040000000000000036,
                1.44
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "ea4b9f1f-c0ff-42a5-a0c3-8818cfb9ab06",
              "position": [
                2.94,
                -0.020000000000000018,
                1.47
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "416d1151-7072-4821-a0f8-eed748486ab8",
              "position": [
                3,
                0,
                1.5
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "6642e5af-26a7-462a-82f2-262b07745f65",
              "position": [
                3.06,
                0.020000000000000018,
                1.53
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "9090bff7-4826-43a6-abd7-4cf8076b52c2",
              "position": [
                3.12,
                0.040000000000000036,
                1.56
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "5c8b7c0c-6e5b-433e-b297-08665d80585a",
              "position": [
                3.18,
                0.06000000000000005,
                1.59
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "0291197e-53c8-4aab-8906-9055f5c1fc78",
              "position": [
                3.24,
                0.08000000000000007,
                1.62
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "c2d8875c-db6c-40d2-8bc8-ca72c47a0139",
              "position": [
                3.3,
                0.10000000000000009,
                1.65
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "1e3c6040-30b9-450b-be25-4ef9333ce3c7",
              "position": [
                3.36,
                0.1200000000000001,
                1.68
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "713b83cc-8bf8-4b71-86d5-e1b8171ef9c4",
              "position": [
                3.42,
                0.1399999999999999,
                1.71
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "c5f3bd96-3769-4f88-9cd6-b5ec6f93ea3e",
              "position": [
                3.48,
                0.15999999999999992,
                1.74
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "34480ba2-ef41-4092-b781-57a320f9a17c",
              "position": [
                3.54,
                0.17999999999999994,
                1.77
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "8d985c16-b0e8-4319-b30c-6f7604fc1812",
              "position": [
                3.6,
                0.19999999999999996,
                1.8
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "09d7fee5-73b4-48a0-a19a-95b726bc9cfd",
              "position": [
                3.66,
                0.21999999999999997,
                1.83
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "cf4f7678-c92c-4941-845a-8b2ebda32900",
              "position": [
                3.72,
                0.24,
                1.86
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "fca80b68-689d-46c2-b961-7fde4173dfa1",
              "position": [
                3.78,
                0.26,
                1.89
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "f6d712d4-45b8-4bc3-833a-0b14bb75b7d2",
              "position": [
                3.84,
                0.28,
                1.92
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "a492af26-6d44-4a3c-8ad5-c7d5f039ecf1",
              "position": [
                3.9,
                0.30000000000000004,
                1.95
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "1c28b8a2-4400-4bb2-8c12-91a9d17b20f3",
              "position": [
                3.96,
                0.32000000000000006,
                1.98
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "56128fd9-3feb-4ec3-bd88-aaddd3304e79",
              "position": [
                4.02,
                0.3400000000000001,
                2.01
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "8d65fb20-d467-46e4-95dd-3bb1500928f2",
              "position": [
                4.08,
                0.3600000000000001,
                2.04
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "bf4e346d-4259-4bbf-b35f-52e547e2b4ef",
              "position": [
                4.14,
                0.3799999999999999,
                2.07
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "fe9d8899-77dd-45c1-8546-6a7508888c4f",
              "position": [
                4.2,
                0.3999999999999999,
                2.1
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "b8404145-63c1-444b-b01d-5f4cadab576d",
              "position": [
                4.26,
                0.41999999999999993,
                2.13
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "e2c98b51-dfb0-4d7f-bb96-5e7880561a7d",
              "position": [
                4.32,
                0.43999999999999995,
                2.16
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "db827088-3e87-4a86-b387-0837b5207eba",
              "position": [
                4.38,
                0.45999999999999996,
                2.19
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "a22b4472-4098-4fea-88e1-419c8c4349b2",
              "position": [
                4.44,
                0.48,
                2.22
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "f5ec8417-4bd3-4002-a8f0-cba0c64d40d2",
              "position": [
                4.5,
                0.5,
                2.25
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "bf23ece6-f329-43fd-81e2-5277db55612b",
              "position": [
                4.56,
                0.52,
                2.28
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "b077ee85-de04-4961-8e40-5757b2b9393d",
              "position": [
                4.62,
                0.54,
                2.31
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "f1a49740-c98b-4464-b13f-f3b6f2529969",
              "position": [
                4.68,
                0.56,
                2.34
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "2560704d-ede0-4534-908b-d0ebf97c49fc",
              "position": [
                4.74,
                0.5800000000000001,
                2.37
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "ccaf326b-cd17-4ae3-815c-5df05a4c93ca",
              "position": [
                4.8,
                0.6000000000000001,
                2.4
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "e9113314-8247-46c3-b9c6-9cbd3d367abd",
              "position": [
                4.86,
                0.6200000000000001,
                2.43
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "5690cf9f-c452-42e4-bb75-b96a257e4b6f",
              "position": [
                4.92,
                0.6399999999999999,
                2.46
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "5509db85-6d38-462b-870e-343ee12277ba",
              "position": [
                4.98,
                0.6599999999999999,
                2.49
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "1274eb48-e536-41f7-9067-0e2f9812724f",
              "position": [
                5.04,
                0.6799999999999999,
                2.52
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "4e830dda-3ee6-4612-8eed-571dd054a6ca",
              "position": [
                5.1,
                0.7,
                2.55
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "56c54932-20ff-4998-a704-6e3c6b6b3cb6",
              "position": [
                5.16,
                0.72,
                2.58
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "be09ae1a-57db-443e-90b1-7675757cd753",
              "position": [
                5.22,
                0.74,
                2.61
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "156c355f-7d67-41ff-91e3-bdd18d938be2",
              "position": [
                5.28,
                0.76,
                2.64
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "75138786-e938-4c05-932e-71f9ece7b7d0",
              "position": [
                5.34,
                0.78,
                2.67
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "2c2c5f61-c1b0-4b30-bb37-7eca078a1c3c",
              "position": [
                5.4,
                0.8,
                2.7
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "348b1dab-7313-4a87-9a99-0d7d87bc6155",
              "position": [
                5.46,
                0.8200000000000001,
                2.73
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "f9ef5b0e-2e58-4f19-a097-59c017a44368",
              "position": [
                5.52,
                0.8400000000000001,
                2.76
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "4ef19ed3-4992-4ab2-af7c-b37cb0fef5e9",
              "position": [
                5.58,
                0.8600000000000001,
                2.79
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "668e5d09-2f0e-4b4b-9ea1-72c1709e161d",
              "position": [
                5.64,
                0.8799999999999999,
                2.82
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "0c36475d-05db-4331-9279-49355b694821",
              "position": [
                5.7,
                0.8999999999999999,
                2.85
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "c6af1087-91a8-453c-a821-51652588dcc3",
              "position": [
                5.76,
                0.9199999999999999,
                2.88
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "2f87cfca-2821-48a0-95a0-818fa43bd5ac",
              "position": [
                5.82,
                0.94,
                2.91
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "2fecf02d-fe95-4093-b9ce-5a145b59b8a6",
              "position": [
                5.88,
                0.96,
                2.94
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            },
            {
              "id": "d6770ca6-d193-44c3-8361-f5002b5b5207",
              "position": [
                5.94,
                0.98,
                2.97
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.headers"
              }
            }
          ],
          "exchangeBetweenQueue": [],
          "queueBetweenConsumer": []
        }
      },
      {
        "exchange": "amq.match",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"match\"\n}",
        "id": "b1ebcb65-d165-4a39-b975-299f0706a146",
        "color": "#6e1e9d",
        "positions": {
          "producerBetweenExchange": [
            {
              "id": "cb72fa40-1b19-4817-be6f-1a3cbfc6525f",
              "position": [
                0,
                -1,
                0
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "9aa5f32d-c505-45e1-b6d2-3fbd989df3d4",
              "position": [
                0.08,
                -0.98,
                0.03
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "e8f539f7-7ca4-4e5a-9a69-ee32cc4ecbf5",
              "position": [
                0.16,
                -0.96,
                0.06
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "9c89fe83-d254-4cdd-8c62-b4678b00ba41",
              "position": [
                0.24,
                -0.94,
                0.09
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "a5155e18-e615-45b7-8342-45f61b576f29",
              "position": [
                0.32,
                -0.92,
                0.12
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "e69ac5c3-f4af-45b9-81ae-651de96d3498",
              "position": [
                0.4,
                -0.9,
                0.15
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "a853958f-9381-48e1-84e1-021079a83f20",
              "position": [
                0.48,
                -0.88,
                0.18
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "46c00da6-2763-4043-aeac-b47f56880087",
              "position": [
                0.56,
                -0.86,
                0.21
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "a3914763-c6b6-4e6d-b91c-bc8b5b36dd07",
              "position": [
                0.64,
                -0.84,
                0.24
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "f9e41d30-da95-438b-9bd7-dfdb99921ca4",
              "position": [
                0.72,
                -0.8200000000000001,
                0.27
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "a4ab99ff-2a8e-47a0-816b-61dca7932c3c",
              "position": [
                0.8,
                -0.8,
                0.3
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "9f1855dd-04e2-4cd1-b3dd-f419c54bc333",
              "position": [
                0.88,
                -0.78,
                0.33
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "619725a1-aa6a-476e-9dc4-6a9f4e397932",
              "position": [
                0.96,
                -0.76,
                0.36
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "92229c37-a8ec-47c9-9c32-40f3ad1abcfc",
              "position": [
                1.04,
                -0.74,
                0.39
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "78072b7f-bef3-42fd-bee4-4f57eda6f4ad",
              "position": [
                1.12,
                -0.72,
                0.42
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "a0c4b4a4-2098-4e83-acbc-0b0a0db960ee",
              "position": [
                1.2,
                -0.7,
                0.45
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "73bb352f-27e9-4718-8b1f-9060babe31cc",
              "position": [
                1.28,
                -0.6799999999999999,
                0.48
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "31181e88-f690-4a9a-92af-321d1922a0b4",
              "position": [
                1.36,
                -0.6599999999999999,
                0.51
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "e148a563-a3e7-4723-9d85-fcb98ebc40e4",
              "position": [
                1.44,
                -0.64,
                0.54
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "3dd59425-23f3-424d-89b1-08ada63c7218",
              "position": [
                1.52,
                -0.62,
                0.57
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "78b8492b-1f9e-491d-828d-a81bc1ca9a04",
              "position": [
                1.6,
                -0.6,
                0.6
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "0b0eb5c0-6e5f-4b85-a9c7-75ef922bf268",
              "position": [
                1.68,
                -0.5800000000000001,
                0.63
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "5c16e43e-e8a4-473a-8612-932aa802feb9",
              "position": [
                1.76,
                -0.56,
                0.66
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "d6057827-8cfb-4f46-87da-0a36e98351dd",
              "position": [
                1.84,
                -0.54,
                0.69
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "41b48d39-fedd-44f4-9a9a-b813d143571a",
              "position": [
                1.92,
                -0.52,
                0.72
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "f36ceea9-dcde-46e9-93ba-7fd2b622e3fc",
              "position": [
                2,
                -0.5,
                0.75
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "aab3feac-b04f-49d1-a246-14a10dd2036e",
              "position": [
                2.08,
                -0.48,
                0.78
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "b7de5db1-1f57-4211-b767-bbba30c59ed1",
              "position": [
                2.16,
                -0.45999999999999996,
                0.81
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "70839e06-216d-4506-a64c-0b6a4978eeed",
              "position": [
                2.24,
                -0.43999999999999995,
                0.84
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "1768b0ed-8ab3-4a4b-9dff-b4b0822014f3",
              "position": [
                2.32,
                -0.42000000000000004,
                0.87
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "d38726c3-917a-47d2-95fd-e677527be96c",
              "position": [
                2.4,
                -0.4,
                0.9
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "38521138-0144-4d2d-b198-825cd78624bf",
              "position": [
                2.48,
                -0.38,
                0.93
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "dc4a9cf8-a33f-4653-b7a9-adc83e466f0f",
              "position": [
                2.56,
                -0.36,
                0.96
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "d9e57cc0-0896-4511-8a97-50351bcd8c80",
              "position": [
                2.64,
                -0.33999999999999997,
                0.99
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "116b777e-a464-4154-8ab1-533fd3f54aa9",
              "position": [
                2.72,
                -0.31999999999999995,
                1.02
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "8b3207e7-a030-4eee-a223-668966a65d43",
              "position": [
                2.8,
                -0.30000000000000004,
                1.05
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "7c1af6a5-1a10-4e6f-9d71-83dab6bf1dd4",
              "position": [
                2.88,
                -0.28,
                1.08
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "a83b58fe-76e5-4505-ba00-8078561cad56",
              "position": [
                2.96,
                -0.26,
                1.11
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "600f2096-ebcf-42a2-90db-24a00397c0f0",
              "position": [
                3.04,
                -0.24,
                1.14
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "0d502d63-95ab-44e4-bc30-2583c16c9118",
              "position": [
                3.12,
                -0.21999999999999997,
                1.17
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "a2fb993f-91bb-4ee5-af29-bb17cd251882",
              "position": [
                3.2,
                -0.19999999999999996,
                1.2
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "130ab36a-e1be-47f0-b460-de4c2e46e8ba",
              "position": [
                3.28,
                -0.18000000000000005,
                1.23
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "81981ce3-2b54-4240-bdaf-3d049774ea34",
              "position": [
                3.36,
                -0.16000000000000003,
                1.26
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "e34dbda1-57bf-43a0-9208-5511e56b8050",
              "position": [
                3.44,
                -0.14,
                1.29
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "d0fe1ad0-0942-4481-b4b7-dac812044496",
              "position": [
                3.52,
                -0.12,
                1.32
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "bdc4c4e2-1f45-47f4-9b51-26ffd774c81d",
              "position": [
                3.6,
                -0.09999999999999998,
                1.35
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "55237793-c51a-47ea-9fec-a8d67207b0ca",
              "position": [
                3.68,
                -0.07999999999999996,
                1.38
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "17e5b575-1926-4c84-9e3e-35331d0dc812",
              "position": [
                3.76,
                -0.06000000000000005,
                1.41
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "049fc16e-0e62-40c1-bd80-9297282cc7f8",
              "position": [
                3.84,
                -0.040000000000000036,
                1.44
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "e44b00da-7aeb-4ddf-ae73-b33362964902",
              "position": [
                3.92,
                -0.020000000000000018,
                1.47
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "781a27c4-4ba2-444b-9fbd-94989753568a",
              "position": [
                4,
                0,
                1.5
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "d64e8ed5-ffec-4298-bca5-69c4532bf187",
              "position": [
                4.08,
                0.020000000000000018,
                1.53
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "470bb3f2-d151-4a0a-a289-a7ae181621de",
              "position": [
                4.16,
                0.040000000000000036,
                1.56
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "2e4fc158-9d47-4aa4-8d6e-c7f589a0e07c",
              "position": [
                4.24,
                0.06000000000000005,
                1.59
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "89786668-9ec6-47f8-8a57-d734561e0bb9",
              "position": [
                4.32,
                0.08000000000000007,
                1.62
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "e274201a-ec5b-45dd-8c3d-66f69e384fd5",
              "position": [
                4.4,
                0.10000000000000009,
                1.65
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "2eadb95a-88cd-4d23-a148-93fccba68a13",
              "position": [
                4.48,
                0.1200000000000001,
                1.68
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "0d8692a5-ffb4-40cb-a3a7-2fc7f6790924",
              "position": [
                4.56,
                0.1399999999999999,
                1.71
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "622ff5b7-6450-4300-b3e0-35bd823acf11",
              "position": [
                4.64,
                0.15999999999999992,
                1.74
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "72e81788-4c11-4766-a215-7c655fcbda08",
              "position": [
                4.72,
                0.17999999999999994,
                1.77
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "b83fa1cf-6159-47e3-a0d3-d348a96aefa4",
              "position": [
                4.8,
                0.19999999999999996,
                1.8
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "e5ad099d-8e9c-41a0-9370-1552e1644260",
              "position": [
                4.88,
                0.21999999999999997,
                1.83
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "0605e94c-232f-4f21-8144-0d9e5ba33401",
              "position": [
                4.96,
                0.24,
                1.86
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "0348e83c-7d40-44e1-bed4-feb7a17e0b63",
              "position": [
                5.04,
                0.26,
                1.89
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "53e01024-70d7-4b26-8013-b60c600fdf57",
              "position": [
                5.12,
                0.28,
                1.92
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "d1f29f94-4d9c-42de-ab0f-bf233846a924",
              "position": [
                5.2,
                0.30000000000000004,
                1.95
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "8b2dea93-abc3-4216-9681-a3173f89b93d",
              "position": [
                5.28,
                0.32000000000000006,
                1.98
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "ad9ac7c0-0bdb-4134-8538-999e061d4abd",
              "position": [
                5.36,
                0.3400000000000001,
                2.01
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "4a756035-9f46-46c0-883b-9c3098fb4054",
              "position": [
                5.44,
                0.3600000000000001,
                2.04
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "ac410414-7e01-4ed0-a372-9b8ce3192232",
              "position": [
                5.52,
                0.3799999999999999,
                2.07
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "f102e2d4-a26b-4ee0-8ff6-1c3fe7ca282b",
              "position": [
                5.6,
                0.3999999999999999,
                2.1
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "9038ab86-7d18-4b17-b6c8-8f95e10276d4",
              "position": [
                5.68,
                0.41999999999999993,
                2.13
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "6d2ca5d4-b15e-47c5-b4be-3e0bafdeaeb2",
              "position": [
                5.76,
                0.43999999999999995,
                2.16
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "b67400f7-0cf2-407c-8378-9cc8f1fe6b37",
              "position": [
                5.84,
                0.45999999999999996,
                2.19
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "0d47eeb2-24d8-44fb-b590-b831e94aec7a",
              "position": [
                5.92,
                0.48,
                2.22
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "a137182a-b812-418f-906b-02a8431e372a",
              "position": [
                6,
                0.5,
                2.25
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "777881ae-40f4-43d4-ad6e-c4292974ab2f",
              "position": [
                6.08,
                0.52,
                2.28
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "394c33a5-42bb-4417-bf0d-42996b30bd10",
              "position": [
                6.16,
                0.54,
                2.31
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "4a2145ba-0b66-4b99-99f6-f7158fec69df",
              "position": [
                6.24,
                0.56,
                2.34
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "c5ba242d-0012-41a6-ae1a-7e911bbd7475",
              "position": [
                6.32,
                0.5800000000000001,
                2.37
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "98fd493a-7b00-4405-a3bf-f946bdc8dca9",
              "position": [
                6.4,
                0.6000000000000001,
                2.4
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "cf51e5f0-0310-4f17-8449-0066ab3c672e",
              "position": [
                6.48,
                0.6200000000000001,
                2.43
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "67bc1cf5-7259-4815-91cc-4a57d4140037",
              "position": [
                6.56,
                0.6399999999999999,
                2.46
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "5f9784ad-322d-4ac1-9e97-8ec782e21042",
              "position": [
                6.64,
                0.6599999999999999,
                2.49
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "f9d681bd-cc7c-4b9c-8250-52e16fb870a2",
              "position": [
                6.72,
                0.6799999999999999,
                2.52
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "4de0dfa5-4d57-49a8-a096-3e321c0dff06",
              "position": [
                6.8,
                0.7,
                2.55
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "e42c022a-f72e-45e7-be0a-572e7c6019f2",
              "position": [
                6.88,
                0.72,
                2.58
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "facb854e-5748-46ed-8bb4-ebf349e29abd",
              "position": [
                6.96,
                0.74,
                2.61
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "95b31e33-c4f4-4b9f-89e0-1d0c51ecd2f9",
              "position": [
                7.04,
                0.76,
                2.64
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "0cb70a26-8b22-48c8-af2d-f3ace5d2c7f9",
              "position": [
                7.12,
                0.78,
                2.67
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "710c1a4a-27b4-400e-b414-016b07f51b38",
              "position": [
                7.2,
                0.8,
                2.7
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "e68d0cc4-3069-4559-8160-a7742532409d",
              "position": [
                7.28,
                0.8200000000000001,
                2.73
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "ff76ddd7-748d-4a10-9fbd-489639e6b1c7",
              "position": [
                7.36,
                0.8400000000000001,
                2.76
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "3acfe0f7-2afb-4866-8d1d-8572a0381252",
              "position": [
                7.44,
                0.8600000000000001,
                2.79
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "b1469405-3732-4ca3-91b8-1db3ce7bdbe6",
              "position": [
                7.52,
                0.8799999999999999,
                2.82
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "500af802-2f0b-4acc-85c8-d6990972e2d4",
              "position": [
                7.6,
                0.8999999999999999,
                2.85
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "5f63b57f-68f8-42a5-b3de-3f4cdb998e68",
              "position": [
                7.68,
                0.9199999999999999,
                2.88
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "ed0342e6-4a11-417a-9629-a958c4ec46ce",
              "position": [
                7.76,
                0.94,
                2.91
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "646d5a8f-c1c3-48dd-8ca2-e77f3d653adc",
              "position": [
                7.84,
                0.96,
                2.94
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            },
            {
              "id": "178d7840-5195-4a41-a93b-3a72da1ab19c",
              "position": [
                7.92,
                0.98,
                2.97
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.match"
              }
            }
          ],
          "exchangeBetweenQueue": [],
          "queueBetweenConsumer": []
        }
      },
      {
        "exchange": "amq.topic",
        "routeKey": "route-key-topic",
        "time": 1,
        "payload": "{\n\"fila\":\"route-key-topic\"\n}",
        "id": "063bb02b-dc70-443e-b9c7-76ab50d05404",
        "color": "#1ad1a6",
        "positions": {
          "producerBetweenExchange": [
            {
              "id": "fcba53a3-3670-497f-ace6-247fb7d23b65",
              "position": [
                0,
                -1,
                0
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "512f69a1-9bb9-407b-afb2-e3f6b7de503c",
              "position": [
                0.03,
                -0.97,
                0.03
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "d8319b4e-a734-4505-9b93-31b9a0f14063",
              "position": [
                0.06,
                -0.94,
                0.06
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "dd26a9c3-46d1-498a-a826-a9d7f8ad024a",
              "position": [
                0.09,
                -0.91,
                0.09
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "50b7a8c3-ce4a-46c2-a6cc-a7c1072de99f",
              "position": [
                0.12,
                -0.88,
                0.12
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "6b237702-cf93-41f2-bc9a-69db0048f76e",
              "position": [
                0.15,
                -0.85,
                0.15
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "27525434-bcf2-4a6e-ab4d-a8e2008bf5d7",
              "position": [
                0.18,
                -0.8200000000000001,
                0.18
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "acd2eafc-9cd6-418b-ba9a-f15cf8248848",
              "position": [
                0.21,
                -0.79,
                0.21
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "1c22a417-f6a8-4509-a949-5f4abce81bcd",
              "position": [
                0.24,
                -0.76,
                0.24
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "1c09c9c3-d30d-489d-9d03-29c3bdf65e31",
              "position": [
                0.27,
                -0.73,
                0.27
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "a316f9f5-583a-43db-a19b-0365c954979f",
              "position": [
                0.3,
                -0.7,
                0.3
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "9b02f89a-2859-44f9-b67f-38f53643f4f0",
              "position": [
                0.33,
                -0.6699999999999999,
                0.33
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "9439e192-2035-4093-a104-4a14b17781fd",
              "position": [
                0.36,
                -0.64,
                0.36
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "1de873a7-e13b-4cb5-93ec-ce27b9af83e9",
              "position": [
                0.39,
                -0.61,
                0.39
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "b045ba5b-1ec0-43fc-a402-2dbf2c2d5d4e",
              "position": [
                0.42,
                -0.5800000000000001,
                0.42
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "7bda0436-8829-4590-ba7b-f2859c810337",
              "position": [
                0.45,
                -0.55,
                0.45
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "e16fcc88-1cca-4f6d-bc0d-31901694b684",
              "position": [
                0.48,
                -0.52,
                0.48
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "a0775a23-9583-4f69-83b3-47ae32a22bfe",
              "position": [
                0.51,
                -0.49,
                0.51
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "2caa2fcf-bc9c-4651-b30a-3171b33e7efe",
              "position": [
                0.54,
                -0.45999999999999996,
                0.54
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "78d43c69-d3e9-46f6-945c-18cbde5a8366",
              "position": [
                0.57,
                -0.43000000000000005,
                0.57
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "39fdb78b-34be-41be-b736-a8348bdbd0da",
              "position": [
                0.6,
                -0.4,
                0.6
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "ba3f3b4e-647f-43c6-b93d-d8b0295df504",
              "position": [
                0.63,
                -0.37,
                0.63
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "a2627807-cb51-4375-b33f-af26dfc2eb5e",
              "position": [
                0.66,
                -0.33999999999999997,
                0.66
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "58e222f6-6a72-4d82-a6ab-befde8261974",
              "position": [
                0.69,
                -0.31000000000000005,
                0.69
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "9f7205f5-34be-405f-aa03-700bcbcf5fd1",
              "position": [
                0.72,
                -0.28,
                0.72
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "13a51fd1-d3d6-486f-871e-da1720b6defd",
              "position": [
                0.75,
                -0.25,
                0.75
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "66cd5c99-6da6-44be-ba47-3431e1b16590",
              "position": [
                0.78,
                -0.21999999999999997,
                0.78
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "0bca0e07-dffb-45c9-a42f-e11d6380c922",
              "position": [
                0.81,
                -0.18999999999999995,
                0.81
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "5af9e1c3-ffe4-4c6c-a7ab-e5a7eadc5f04",
              "position": [
                0.84,
                -0.16000000000000003,
                0.84
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "ae8bf5cc-e20f-4524-8063-7086f7a003e2",
              "position": [
                0.87,
                -0.13,
                0.87
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "a54644ff-7fe1-4a5a-931e-a5d44d14615f",
              "position": [
                0.9,
                -0.09999999999999998,
                0.9
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "1f45d8fd-38de-45d3-b0af-f0ba13b75186",
              "position": [
                0.93,
                -0.06999999999999995,
                0.93
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "8813ac17-d66a-48a5-9dda-933a463fccf2",
              "position": [
                0.96,
                -0.040000000000000036,
                0.96
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "ae5a5b3f-3ec0-4ec3-b348-c1312b621129",
              "position": [
                0.99,
                -0.010000000000000009,
                0.99
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "9ce41c03-fef0-4999-8878-4f12cd694fc9",
              "position": [
                1.02,
                0.020000000000000018,
                1.02
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "e3f9e3f8-8ffa-4fd4-9e74-2a26d6c92a7b",
              "position": [
                1.05,
                0.050000000000000044,
                1.05
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "19da5484-2a41-4e57-936c-3553b491dd98",
              "position": [
                1.08,
                0.08000000000000007,
                1.08
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "d3794c76-eee5-4395-a016-c20c8dc69bdc",
              "position": [
                1.11,
                0.1100000000000001,
                1.11
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "ebf0441c-86b4-48ca-954f-da283584ed47",
              "position": [
                1.14,
                0.1399999999999999,
                1.14
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "5e9e3dab-49c0-42c7-831d-bb6c19a8bb03",
              "position": [
                1.17,
                0.16999999999999993,
                1.17
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "c5f4d210-53a0-4203-ab5a-cc0480b73de7",
              "position": [
                1.2,
                0.19999999999999996,
                1.2
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "431600b7-0f00-497f-850c-970d1360e9e4",
              "position": [
                1.23,
                0.22999999999999998,
                1.23
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "f0181e20-dda2-47d7-a9bf-8c6c307966d9",
              "position": [
                1.26,
                0.26,
                1.26
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "29127d0d-7e20-4840-9036-ce115e745104",
              "position": [
                1.29,
                0.29000000000000004,
                1.29
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "bf5ba21a-0929-4899-974d-c14873ef7fea",
              "position": [
                1.32,
                0.32000000000000006,
                1.32
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "7323cab2-ab24-47b1-8e10-69e1e9a9cbb4",
              "position": [
                1.35,
                0.3500000000000001,
                1.35
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "9debdd47-329f-403d-a6d5-65c81340ce84",
              "position": [
                1.38,
                0.3799999999999999,
                1.38
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "36726679-ebdc-4d80-80d8-f725274ee92b",
              "position": [
                1.41,
                0.4099999999999999,
                1.41
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "f459ebc7-c8ed-46fc-af41-96ff2c232e42",
              "position": [
                1.44,
                0.43999999999999995,
                1.44
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "c9ea3233-af95-4470-a0b5-71591f8a9aa3",
              "position": [
                1.47,
                0.47,
                1.47
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "e6552b87-74bf-4692-b109-ab19cfe1347e",
              "position": [
                1.5,
                0.5,
                1.5
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "7a484a29-6a75-4831-b5e5-47b709d536fe",
              "position": [
                1.53,
                0.53,
                1.53
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "76e29108-0057-4065-b04c-34dac122ea94",
              "position": [
                1.56,
                0.56,
                1.56
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "4de19ccb-e82b-45d3-865d-114ea46dd50e",
              "position": [
                1.59,
                0.5900000000000001,
                1.59
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "8250c461-96d0-44f9-b62f-7bff930c623c",
              "position": [
                1.62,
                0.6200000000000001,
                1.62
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "5577809b-f73e-42e8-a181-f912d34eb10b",
              "position": [
                1.65,
                0.6499999999999999,
                1.65
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "0c5890cc-b5c0-416e-89d3-e3d32a328213",
              "position": [
                1.68,
                0.6799999999999999,
                1.68
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "b3e869fa-7ae2-45b9-af6d-7802989c5b21",
              "position": [
                1.71,
                0.71,
                1.71
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "5b74d4be-5aba-4f55-8b85-d07da6993569",
              "position": [
                1.74,
                0.74,
                1.74
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "a975a2cb-121b-4608-8dd3-5d52f1ea6f02",
              "position": [
                1.77,
                0.77,
                1.77
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "997f88d4-e03f-450d-bce4-3e3be753de9b",
              "position": [
                1.8,
                0.8,
                1.8
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "466ef239-589f-4df1-9a83-e3dadbfcf245",
              "position": [
                1.83,
                0.8300000000000001,
                1.83
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "b6cca47b-aec3-4d02-87e2-41bd45f7a9d3",
              "position": [
                1.86,
                0.8600000000000001,
                1.86
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "c63176a6-d3b3-4ba5-abc4-e8b260130407",
              "position": [
                1.89,
                0.8899999999999999,
                1.89
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "0f4cabc5-3a36-406b-a50c-92d361b06bb6",
              "position": [
                1.92,
                0.9199999999999999,
                1.92
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "6e6b1951-c50d-4975-9aa2-27aa7833c6e1",
              "position": [
                1.95,
                0.95,
                1.95
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "bd71ef67-d9c3-496d-bb01-b486d34766c9",
              "position": [
                1.98,
                0.98,
                1.98
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "2b103026-67cc-4f7d-a885-ebb38cf6bea1",
              "position": [
                2.01,
                1.0099999999999998,
                2.01
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "a80b6b11-ec8b-4db2-9422-e5a7c08017e9",
              "position": [
                2.04,
                1.04,
                2.04
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "521f05a8-cf67-43c7-9dd1-035d0cbdf8cd",
              "position": [
                2.07,
                1.0699999999999998,
                2.07
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "c3c74543-4219-4ccc-b89b-a5af24be04c3",
              "position": [
                2.1,
                1.1,
                2.1
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "2b088d67-e4d3-42e9-aaef-8a94e7674be9",
              "position": [
                2.13,
                1.13,
                2.13
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "d9bbc758-d450-4df4-9827-908bd7f61505",
              "position": [
                2.16,
                1.1600000000000001,
                2.16
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "fde85ec8-3a74-49e6-8771-7743cae8d907",
              "position": [
                2.19,
                1.19,
                2.19
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "289b0625-cb78-4ada-925e-53a80a9f9c9b",
              "position": [
                2.22,
                1.2200000000000002,
                2.22
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "11321033-2a52-4fee-9e61-091f5a8244df",
              "position": [
                2.25,
                1.25,
                2.25
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "70123c7d-daba-4224-84f2-e7b7958a7e30",
              "position": [
                2.28,
                1.2799999999999998,
                2.28
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "c0d33370-2999-4157-b69d-ab243d1f40d9",
              "position": [
                2.31,
                1.31,
                2.31
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "58931f34-d5a8-4099-aefb-e80559e5408f",
              "position": [
                2.34,
                1.3399999999999999,
                2.34
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "cdd90cd6-6d54-4f50-9f04-7f1ecf2f76c1",
              "position": [
                2.37,
                1.37,
                2.37
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "f07ace6e-4546-47c2-b9a7-64541a9089b5",
              "position": [
                2.4,
                1.4,
                2.4
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "abc5814f-8264-4329-9aba-1c76c2ae9b90",
              "position": [
                2.43,
                1.4300000000000002,
                2.43
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "45d48818-7acd-4dae-90eb-e3ef480adfc5",
              "position": [
                2.46,
                1.46,
                2.46
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "6d8345d9-38cb-49cd-a4f3-9c22e7098bbe",
              "position": [
                2.49,
                1.4900000000000002,
                2.49
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "bf4dfe4c-ec5d-42ab-88b0-bee43d5598c5",
              "position": [
                2.52,
                1.52,
                2.52
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "7c32698d-f066-46fc-9a7d-ff589bdfa663",
              "position": [
                2.55,
                1.5499999999999998,
                2.55
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "81759a95-6a2e-487e-9d30-9a5c6b3bb832",
              "position": [
                2.58,
                1.58,
                2.58
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "36e423cc-e456-4227-b0dc-284dd9fb2cbc",
              "position": [
                2.61,
                1.6099999999999999,
                2.61
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "fd036bbe-0ae9-4a89-8cfc-5c13f93840b7",
              "position": [
                2.64,
                1.6400000000000001,
                2.64
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "dbc107bf-428a-49c2-85dd-1daf3419bb4c",
              "position": [
                2.67,
                1.67,
                2.67
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "c2e37c3d-11b4-4675-891a-2c05d55f6959",
              "position": [
                2.7,
                1.7000000000000002,
                2.7
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "d0684c75-320c-4329-9e8d-3e5344d7856b",
              "position": [
                2.73,
                1.73,
                2.73
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "29672211-197d-4555-9002-acc26f554c4d",
              "position": [
                2.76,
                1.7599999999999998,
                2.76
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "ee60b056-84ee-45bd-bd2a-f43675397144",
              "position": [
                2.79,
                1.79,
                2.79
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "af899006-b2f5-47f8-bc98-ee79730a79f9",
              "position": [
                2.82,
                1.8199999999999998,
                2.82
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "a1782b4a-4b0d-4b33-90d9-1f8a549d5c00",
              "position": [
                2.85,
                1.85,
                2.85
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "89bbeb01-d347-4200-8b75-79377b092f3b",
              "position": [
                2.88,
                1.88,
                2.88
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "50af7823-3d83-4932-b04b-dc8df312196a",
              "position": [
                2.91,
                1.9100000000000001,
                2.91
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "ba7aedaa-8964-480c-bfa1-6f588e53d3d6",
              "position": [
                2.94,
                1.94,
                2.94
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            },
            {
              "id": "ea8ffb67-b46e-4d4d-bcfd-46964054fb4a",
              "position": [
                2.97,
                1.9700000000000002,
                2.97
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "amq.topic"
              }
            }
          ],
          "exchangeBetweenQueue": [],
          "queueBetweenConsumer": []
        }
      },
      {
        "exchange": "exchange-queue-1-topic",
        "routeKey": "many.queue-3",
        "time": 1,
        "payload": "{\n\"fila\":\"route-key-topic\"\n}",
        "id": "063bb02b-dc70-443e-b9c7-76ab50d05674",
        "color": "#361c34",
        "positions": {
          "producerBetweenExchange": [
            {
              "id": "b24ae932-de91-4795-b409-c5d3a57e56d4",
              "position": [
                0,
                -1,
                0
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "72952f1a-d728-4331-afba-2688b1193067",
              "position": [
                0.07,
                -0.97,
                0.03
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "9d6ab7ca-16f9-4a30-8965-29c4d22b9bed",
              "position": [
                0.14,
                -0.94,
                0.06
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "93ddf4ae-088f-453b-a742-c9da56667bf4",
              "position": [
                0.21,
                -0.91,
                0.09
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "218f5024-6d3b-49dc-a3ca-eba88077e570",
              "position": [
                0.28,
                -0.88,
                0.12
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "05fb22bc-751f-4775-aa95-7dfca95feca0",
              "position": [
                0.35,
                -0.85,
                0.15
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "f8a4ff19-c8fb-4970-8d82-df170c9efc9d",
              "position": [
                0.42,
                -0.8200000000000001,
                0.18
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "8d6ebb0e-97a5-43f9-991c-911037687025",
              "position": [
                0.49,
                -0.79,
                0.21
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "3056652c-43e0-4723-af40-ce78fae68c57",
              "position": [
                0.56,
                -0.76,
                0.24
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "c6a44a6c-2603-4e2e-9ad2-66828329f7d8",
              "position": [
                0.63,
                -0.73,
                0.27
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "72425160-5f34-4562-bde2-ba93fe7c1e38",
              "position": [
                0.7,
                -0.7,
                0.3
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "cb77c68d-89d8-47e5-a33e-e1005aff4976",
              "position": [
                0.77,
                -0.6699999999999999,
                0.33
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "fd5f3b6a-3f9b-45d4-9650-f33ffb5ed473",
              "position": [
                0.84,
                -0.64,
                0.36
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "cb845ab3-50d1-4c9b-9f8d-18a5f97c41fb",
              "position": [
                0.91,
                -0.61,
                0.39
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "78ccd53a-3dbc-40e0-bc7d-2eb8f7e9954e",
              "position": [
                0.98,
                -0.5800000000000001,
                0.42
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "ef1b0751-845a-4823-8969-446eca60b1fb",
              "position": [
                1.05,
                -0.55,
                0.45
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "b3238258-432a-4628-bd06-707ba9b395c1",
              "position": [
                1.12,
                -0.52,
                0.48
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "d74ad4a7-bf32-4db5-b530-cf2cc01e8541",
              "position": [
                1.19,
                -0.49,
                0.51
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "91c88583-5356-488d-8a49-f7f5b9bd0b3b",
              "position": [
                1.26,
                -0.45999999999999996,
                0.54
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "d6923dc4-dff3-40bb-91ef-b5bdada96068",
              "position": [
                1.33,
                -0.43000000000000005,
                0.57
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "59c64a6c-6a90-4705-9444-8c957e639502",
              "position": [
                1.4,
                -0.4,
                0.6
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "157e1770-5597-4660-bf55-fa39ad0f1ccd",
              "position": [
                1.47,
                -0.37,
                0.63
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "1ee11d29-652a-4d3e-a70a-0d3ded5a91a4",
              "position": [
                1.54,
                -0.33999999999999997,
                0.66
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "2edbc271-23e6-4d73-b154-7d5c8960f7c2",
              "position": [
                1.61,
                -0.31000000000000005,
                0.69
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "6600081d-4325-4e24-a7cf-b5f44275cd30",
              "position": [
                1.68,
                -0.28,
                0.72
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "f713953d-3a4a-4b88-8bac-336144ea739e",
              "position": [
                1.75,
                -0.25,
                0.75
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "d6b494e7-2b82-40e2-86ce-d6e404784288",
              "position": [
                1.82,
                -0.21999999999999997,
                0.78
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "a7477fe0-72a7-4407-bec9-753635c4df34",
              "position": [
                1.89,
                -0.18999999999999995,
                0.81
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "3efdbf0c-0314-462e-82f4-7544ca4729ed",
              "position": [
                1.96,
                -0.16000000000000003,
                0.84
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "932158dd-cf95-4e0e-887d-480e4ef1c955",
              "position": [
                2.03,
                -0.13,
                0.87
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "e31ad78c-4e47-4fde-b15e-2445dc9fa657",
              "position": [
                2.1,
                -0.09999999999999998,
                0.9
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "22a9d7dc-6199-4a17-91e1-2876e612a084",
              "position": [
                2.17,
                -0.06999999999999995,
                0.93
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "ec278da9-bf3f-4a5b-b372-17907f1f081d",
              "position": [
                2.24,
                -0.040000000000000036,
                0.96
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "cf808359-10fe-4c25-b05e-d5c40dfced55",
              "position": [
                2.31,
                -0.010000000000000009,
                0.99
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "69f07c4c-aea6-4807-a547-36ef95aec6ab",
              "position": [
                2.38,
                0.020000000000000018,
                1.02
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "7df1fa3e-89b4-4a02-b5c2-75cec231aed2",
              "position": [
                2.45,
                0.050000000000000044,
                1.05
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "ddbb0d3d-0157-42ab-b689-3c3a39f19c1e",
              "position": [
                2.52,
                0.08000000000000007,
                1.08
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "63111121-906d-40a8-a6fb-b69f6e076547",
              "position": [
                2.59,
                0.1100000000000001,
                1.11
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "432dbb61-0ec6-40de-ae15-8610400a8421",
              "position": [
                2.66,
                0.1399999999999999,
                1.14
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "998c12fd-7763-47b4-9863-18d0280a1173",
              "position": [
                2.73,
                0.16999999999999993,
                1.17
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "2a11ee20-a8a2-4fbe-ad8e-9b1001c3cfe3",
              "position": [
                2.8,
                0.19999999999999996,
                1.2
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "65869380-931d-4a8f-95fc-507abf37092e",
              "position": [
                2.87,
                0.22999999999999998,
                1.23
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "ddced680-b864-409c-bce8-7578ccbedd09",
              "position": [
                2.94,
                0.26,
                1.26
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "8feca0ae-bd9a-4777-90c5-899d6131ee89",
              "position": [
                3.01,
                0.29000000000000004,
                1.29
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "ff8d6e2c-be84-451e-99eb-a7b66c361d02",
              "position": [
                3.08,
                0.32000000000000006,
                1.32
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "fc4ff52b-525b-4ee8-ae98-de7f9660d1dc",
              "position": [
                3.15,
                0.3500000000000001,
                1.35
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "68240008-cce4-47ad-856f-90cd76e9dfa7",
              "position": [
                3.22,
                0.3799999999999999,
                1.38
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "8b5024ee-477f-46d3-90b8-8d6f98a2a1bd",
              "position": [
                3.29,
                0.4099999999999999,
                1.41
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "3cc08011-9a9c-4319-8daf-9a61e321069b",
              "position": [
                3.36,
                0.43999999999999995,
                1.44
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "3570ec24-0b45-4f5a-b492-92e12d227d68",
              "position": [
                3.43,
                0.47,
                1.47
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "c9348040-bbdf-41e5-9f4d-14e9ce47de0e",
              "position": [
                3.5,
                0.5,
                1.5
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "b207c0ac-8051-4198-a460-3594427f534b",
              "position": [
                3.57,
                0.53,
                1.53
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "4e7e9972-a2e6-477f-ad1b-8720358ea0f6",
              "position": [
                3.64,
                0.56,
                1.56
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "7e631d89-a628-4b76-bd60-f852edf46aff",
              "position": [
                3.71,
                0.5900000000000001,
                1.59
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "481ddb42-782b-41ab-a95a-bf9a8c720137",
              "position": [
                3.78,
                0.6200000000000001,
                1.62
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "029324e0-43f3-48d7-abe6-e5994a02b36e",
              "position": [
                3.85,
                0.6499999999999999,
                1.65
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "31bc860d-1e11-47b0-9694-6d6fe7f977f4",
              "position": [
                3.92,
                0.6799999999999999,
                1.68
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "0c6ac553-d1ad-45a4-8883-2187c733a6ab",
              "position": [
                3.99,
                0.71,
                1.71
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "121bc11e-8ae3-429b-8b3d-2a26111434ee",
              "position": [
                4.06,
                0.74,
                1.74
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "81dd1960-f729-4e8a-900e-4c6e83f07815",
              "position": [
                4.13,
                0.77,
                1.77
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "5f697276-9808-4a28-9cc9-b0a71e0a5707",
              "position": [
                4.2,
                0.8,
                1.8
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "62694ae3-4fe3-4d4a-b00b-f132fc155e7c",
              "position": [
                4.27,
                0.8300000000000001,
                1.83
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "c3bcc04b-0eed-418b-9b3b-2a105c9b6ed7",
              "position": [
                4.34,
                0.8600000000000001,
                1.86
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "af21bd93-5975-4ba6-a688-933bb2dc3f2c",
              "position": [
                4.41,
                0.8899999999999999,
                1.89
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "c42fca08-ff77-45b7-9450-614f01e8847a",
              "position": [
                4.48,
                0.9199999999999999,
                1.92
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "53210b40-3dae-48d4-ae8c-74a9a698f98f",
              "position": [
                4.55,
                0.95,
                1.95
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "6982cafa-acc4-42bb-88cc-60dc807a5d81",
              "position": [
                4.62,
                0.98,
                1.98
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "07f7245e-c61b-4625-8487-05697585a7be",
              "position": [
                4.69,
                1.0099999999999998,
                2.01
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "4cf16ab2-2059-4f9e-acbe-7ba0cfe44ac6",
              "position": [
                4.76,
                1.04,
                2.04
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "5c04fa60-be9f-4ccb-99b7-6f146f791779",
              "position": [
                4.83,
                1.0699999999999998,
                2.07
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "4fb72e8a-1e4d-4b2d-96c4-899747bb3150",
              "position": [
                4.9,
                1.1,
                2.1
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "8b83c622-e992-45e8-ae5a-af2c6ddcb7b0",
              "position": [
                4.97,
                1.13,
                2.13
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "6ad59aba-3e89-445d-b4c2-8883560b213b",
              "position": [
                5.04,
                1.1600000000000001,
                2.16
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "c1a578e4-42be-4b7b-94e0-3e5df75fa02d",
              "position": [
                5.11,
                1.19,
                2.19
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "60d1eaa7-3b0f-403e-b1a0-7c56d2939ea5",
              "position": [
                5.18,
                1.2200000000000002,
                2.22
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "949d0818-e207-4cdf-9919-4addee31b75c",
              "position": [
                5.25,
                1.25,
                2.25
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "26388339-3e85-4a89-8726-fa0e0fb3cc21",
              "position": [
                5.32,
                1.2799999999999998,
                2.28
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "c0bb8c26-429b-40c0-8261-14059f868218",
              "position": [
                5.39,
                1.31,
                2.31
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "52599e2f-41c3-45d4-9aa8-637f44bf62c3",
              "position": [
                5.46,
                1.3399999999999999,
                2.34
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "e2c6df71-5c7c-4cd1-9c30-deb9c40a1f10",
              "position": [
                5.53,
                1.37,
                2.37
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "fa9b8977-2a75-4e3f-a9a7-1e71d4ff4fdd",
              "position": [
                5.6,
                1.4,
                2.4
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "4750af61-669f-4cf5-b4f0-cac45e13d1e0",
              "position": [
                5.67,
                1.4300000000000002,
                2.43
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "9b41c9d9-af2c-48b4-a448-99d206c9d52a",
              "position": [
                5.74,
                1.46,
                2.46
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "395f7e99-4ede-40e5-a957-3740039d883f",
              "position": [
                5.81,
                1.4900000000000002,
                2.49
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "3003c181-2ec8-40b3-b010-09dac236009b",
              "position": [
                5.88,
                1.52,
                2.52
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "ca71a380-808b-4b78-8967-e4ad6966918f",
              "position": [
                5.95,
                1.5499999999999998,
                2.55
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "67e56d58-0b85-401f-9155-948204d36a07",
              "position": [
                6.02,
                1.58,
                2.58
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "f074d960-5499-4541-854f-69e36581727a",
              "position": [
                6.09,
                1.6099999999999999,
                2.61
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "792ba8b5-fe15-4802-b778-01478ddacc53",
              "position": [
                6.16,
                1.6400000000000001,
                2.64
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "a1d13912-8aec-4c9e-94b4-79e6b0a47cab",
              "position": [
                6.23,
                1.67,
                2.67
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "0309b7c7-b32e-49a3-a0c7-e7bdf08eb353",
              "position": [
                6.3,
                1.7000000000000002,
                2.7
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "01b925b0-8f73-4037-8658-c86e0084c134",
              "position": [
                6.37,
                1.73,
                2.73
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "9fd6c86e-f459-4703-8136-f92a0996d35e",
              "position": [
                6.44,
                1.7599999999999998,
                2.76
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "fa0c62ed-079c-41be-88a0-502dda80818b",
              "position": [
                6.51,
                1.79,
                2.79
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "6384042a-1c78-4c74-9c63-598954566413",
              "position": [
                6.58,
                1.8199999999999998,
                2.82
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "72485c89-b5bc-48e1-9b4e-56c39175e503",
              "position": [
                6.65,
                1.85,
                2.85
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "ebef659f-4078-4aa2-833d-f20f62a41747",
              "position": [
                6.72,
                1.88,
                2.88
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "95e89d64-183d-483c-8f43-93767a082302",
              "position": [
                6.79,
                1.9100000000000001,
                2.91
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "e9049282-52a5-4d24-87ef-6dc48ed17003",
              "position": [
                6.86,
                1.94,
                2.94
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            },
            {
              "id": "54b34307-8743-476f-a33d-11cb7a461d97",
              "position": [
                6.93,
                1.9700000000000002,
                2.97
              ],
              "info": {
                "source": "project-nextjs-producer",
                "destination": "exchange-queue-1-topic"
              }
            }
          ],
          "exchangeBetweenQueue": [
            {
              "id": "7701b7c5-73c7-422e-8a45-c937e7d3e787",
              "position": [
                7,
                2,
                3
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "dbb42043-c45b-4cc0-b000-4e9c3775b429",
              "position": [
                6.93,
                1.99,
                3.03
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "a49f55ae-061f-4631-a71c-777920e3066a",
              "position": [
                6.86,
                1.98,
                3.06
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "10f68c97-4ba8-4439-89b4-0f065dedbbd4",
              "position": [
                6.79,
                1.97,
                3.09
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "67e84350-b4cc-42ea-836e-0f7938a79b46",
              "position": [
                6.72,
                1.96,
                3.12
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "ea283dca-0070-4b03-9b32-20a7f9be2f12",
              "position": [
                6.65,
                1.95,
                3.15
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "75768534-63c6-4c08-8959-d71b98eca1ee",
              "position": [
                6.58,
                1.94,
                3.18
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "f50d8510-562f-4e33-9ecd-322d5443b772",
              "position": [
                6.51,
                1.93,
                3.21
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "1b2a4925-57f5-48f7-b83e-c1998656766b",
              "position": [
                6.4399999999999995,
                1.92,
                3.24
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "494b1607-44bf-415e-b247-5fb319a10305",
              "position": [
                6.37,
                1.91,
                3.27
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "6f8be4fc-af3d-46f1-a6e9-92a77c614271",
              "position": [
                6.3,
                1.9,
                3.3
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "4d6f33ca-7062-4e8a-b3cd-bfde05b7ad6b",
              "position": [
                6.23,
                1.89,
                3.33
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "fdb5ddf0-ba12-4f5c-a210-e65e07200f2f",
              "position": [
                6.16,
                1.88,
                3.36
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "92b3c748-6af0-4460-ad00-695097483f89",
              "position": [
                6.09,
                1.87,
                3.39
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "e3d5c9ca-9aab-46e9-a42b-0012456157bb",
              "position": [
                6.02,
                1.8599999999999999,
                3.42
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "e09a8fe5-aa05-4861-b052-2d8f3fab8102",
              "position": [
                5.95,
                1.85,
                3.45
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "b3ee1e6d-5684-42a4-8101-4a75d1030efd",
              "position": [
                5.88,
                1.84,
                3.48
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "e8701348-67ca-402a-b892-ebadd2e41ef5",
              "position": [
                5.8100000000000005,
                1.83,
                3.51
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "e1aef519-2c10-40b0-9818-5b425ccb615b",
              "position": [
                5.74,
                1.82,
                3.54
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "582312c3-b4e3-4ae3-b846-e39cf34a332c",
              "position": [
                5.67,
                1.81,
                3.57
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "32b30116-59bb-4498-bb30-b872c313a368",
              "position": [
                5.6,
                1.8,
                3.6
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "9369cf35-e5d2-46d9-8b5c-fa78d70e38db",
              "position": [
                5.53,
                1.79,
                3.63
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "8e066488-6d04-4ee0-ab31-a4e4e7049c09",
              "position": [
                5.46,
                1.78,
                3.66
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "8cb94b79-2fa2-40ab-8f80-856fd28a9282",
              "position": [
                5.39,
                1.77,
                3.69
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "b91e11d9-b370-45b2-be22-4c98df37ee1e",
              "position": [
                5.32,
                1.76,
                3.7199999999999998
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "c6eca475-0f2e-423e-bd78-c6a1a4b02f21",
              "position": [
                5.25,
                1.75,
                3.75
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "8cdba888-d7be-45a2-9b41-4181014799d6",
              "position": [
                5.18,
                1.74,
                3.7800000000000002
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "28841b5e-e5f1-43f7-a506-96b2fd192f7c",
              "position": [
                5.11,
                1.73,
                3.81
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "e9358753-9642-4e0d-965d-e246732d6143",
              "position": [
                5.04,
                1.72,
                3.84
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "c82263b6-d193-4bf1-90d6-a6134638e86e",
              "position": [
                4.970000000000001,
                1.71,
                3.87
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "ab7dd86a-9b2e-40b2-bde4-8e49baec4d54",
              "position": [
                4.9,
                1.7,
                3.9
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "51ff74db-3615-41eb-ba4d-60c8c1e6d0bb",
              "position": [
                4.83,
                1.69,
                3.93
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "dc8a47ca-e867-43e4-b9b8-7598c022dc95",
              "position": [
                4.76,
                1.68,
                3.96
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "2ea2b26b-765f-4329-9370-982141c49cea",
              "position": [
                4.6899999999999995,
                1.67,
                3.99
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "64ef9e7f-7adc-4091-a4c5-a1e5ccfd27c8",
              "position": [
                4.62,
                1.66,
                4.02
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "7895e37a-0674-4eed-bf6b-5405d9f5fbc1",
              "position": [
                4.55,
                1.65,
                4.05
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "6d99dcc4-9c78-456c-97a0-e89d27f7867d",
              "position": [
                4.48,
                1.6400000000000001,
                4.08
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "dd269480-73b8-4f67-af8a-7ade300626b6",
              "position": [
                4.41,
                1.63,
                4.11
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "0c33a15e-f4ff-4d0a-9bfe-804511235d90",
              "position": [
                4.34,
                1.62,
                4.14
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "e5302bd4-9999-4ab9-a8d1-46b36cc477d6",
              "position": [
                4.27,
                1.6099999999999999,
                4.17
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "545aea9d-68af-45de-a588-6cde5da3b306",
              "position": [
                4.2,
                1.6,
                4.2
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "5a62884a-7649-4f22-aa49-56cd4b49cf48",
              "position": [
                4.13,
                1.59,
                4.23
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "82540fd6-c0ee-4ace-a27b-334eca5b81af",
              "position": [
                4.0600000000000005,
                1.58,
                4.26
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "01154ef6-d3a8-4553-b8b6-da56e64c0063",
              "position": [
                3.99,
                1.57,
                4.29
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "f8da0240-c73b-4a93-8e42-a9e61636991b",
              "position": [
                3.92,
                1.56,
                4.32
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "3539d79d-f122-44b7-bedd-b443296b52e0",
              "position": [
                3.85,
                1.55,
                4.35
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "ce6e6c14-3ba7-45f1-ab4e-59b5e1b64814",
              "position": [
                3.78,
                1.54,
                4.38
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "b6c53bcd-f095-42ee-a900-4d99d5bb4adc",
              "position": [
                3.71,
                1.53,
                4.41
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "25c1506f-d123-4531-96f4-e5f46134ffdb",
              "position": [
                3.64,
                1.52,
                4.4399999999999995
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "b9916f6c-5fba-4d1b-8c87-6c08235ccc0f",
              "position": [
                3.57,
                1.51,
                4.47
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "ca5896ca-de61-4169-a081-cccb9060ef71",
              "position": [
                3.5,
                1.5,
                4.5
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "772ba19b-41fa-4692-9426-a7d3f5e48f0b",
              "position": [
                3.43,
                1.49,
                4.53
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "0900b521-11a3-4081-a92e-40eda3066284",
              "position": [
                3.36,
                1.48,
                4.5600000000000005
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "fe2ae9fa-8f9f-4242-b790-922def5b16cf",
              "position": [
                3.29,
                1.47,
                4.59
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "99961581-f5c2-4423-a9d9-19221ae0433a",
              "position": [
                3.22,
                1.46,
                4.62
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "cd9e6eb3-2143-4925-b1a8-dd67fd5eb69b",
              "position": [
                3.15,
                1.45,
                4.65
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "69a3f406-6b97-4adf-9311-c9dad90e4edf",
              "position": [
                3.08,
                1.44,
                4.68
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "01f4305e-55c7-4d6b-a60e-1c2aab33c768",
              "position": [
                3.01,
                1.4300000000000002,
                4.71
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "37dfd535-9e5f-4435-9b50-650575fffb7b",
              "position": [
                2.9400000000000004,
                1.42,
                4.74
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "fe2f85a3-2ce1-46b5-8440-c75ab2bf36d6",
              "position": [
                2.87,
                1.4100000000000001,
                4.77
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "8ab30232-215c-410e-bb29-69f74af3cabb",
              "position": [
                2.8,
                1.4,
                4.8
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "33b3ad0e-9fd9-432c-8ce2-e9d48b7df5da",
              "position": [
                2.7300000000000004,
                1.3900000000000001,
                4.83
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "28f04e7e-e0af-4379-a83e-2c42cfac0699",
              "position": [
                2.66,
                1.38,
                4.86
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "f5140ccc-33eb-4a87-810a-b6410aa1951f",
              "position": [
                2.59,
                1.37,
                4.89
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "a69f4676-90ff-4f2a-a077-67625997ace2",
              "position": [
                2.5199999999999996,
                1.3599999999999999,
                4.92
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "488ea2e6-d0e5-4b24-bb70-c6a3dfdeb173",
              "position": [
                2.45,
                1.35,
                4.95
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "e4cd5637-7092-4be8-9274-299fb4ed046e",
              "position": [
                2.38,
                1.3399999999999999,
                4.98
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "c25d396e-2ae6-43fa-b246-0d3e6d451337",
              "position": [
                2.3099999999999996,
                1.33,
                5.01
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "2a5d241f-c553-4cb0-a52d-744071727940",
              "position": [
                2.24,
                1.3199999999999998,
                5.04
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "a86882c2-8c66-4e76-893d-52703411d531",
              "position": [
                2.17,
                1.31,
                5.07
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "d4448086-d0a4-4c10-8248-b7f3858a77c3",
              "position": [
                2.0999999999999996,
                1.3,
                5.1
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "baf3ed56-2716-4c9d-a164-e672a754f4ab",
              "position": [
                2.0300000000000002,
                1.29,
                5.13
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "5d2e04f3-2a59-445b-887a-57ade7687d66",
              "position": [
                1.96,
                1.28,
                5.16
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "b622536e-6672-4e3d-ab72-1e19fe57dd8c",
              "position": [
                1.8899999999999997,
                1.27,
                5.1899999999999995
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "be0f0439-5e8d-49f5-8982-ab3dc52816c5",
              "position": [
                1.8200000000000003,
                1.26,
                5.220000000000001
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "9f096a81-7579-4722-a99d-0a120f313499",
              "position": [
                1.75,
                1.25,
                5.25
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "db3a5995-730a-4835-9e4a-bdb7fe7b101a",
              "position": [
                1.6799999999999997,
                1.24,
                5.279999999999999
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "9ad6658e-ebc4-4f08-8735-8cc30927a73c",
              "position": [
                1.6100000000000003,
                1.23,
                5.3100000000000005
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "d093ae79-6171-43c2-bf50-d47f180a3a2f",
              "position": [
                1.54,
                1.22,
                5.34
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "11bfbb70-55d9-42ea-8cc1-52b1eed6d797",
              "position": [
                1.4699999999999998,
                1.21,
                5.37
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "6772d23b-eccc-4c79-a5c8-fce2951299da",
              "position": [
                1.4000000000000004,
                1.2,
                5.4
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "5b538d84-7e81-4e68-a70f-c304db62bb0b",
              "position": [
                1.33,
                1.19,
                5.43
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "593904aa-5789-4fca-9ddc-e29e9cb3ad39",
              "position": [
                1.2599999999999998,
                1.1800000000000002,
                5.46
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "63f9375d-2e3f-475b-ac84-6f19c79c939e",
              "position": [
                1.1900000000000004,
                1.17,
                5.49
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "d2f6132b-f026-42be-a518-31965700b3f8",
              "position": [
                1.12,
                1.1600000000000001,
                5.52
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "86f4bd7a-0be9-44b6-81c4-19c3c8b1df9d",
              "position": [
                1.0499999999999998,
                1.15,
                5.55
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "61ce6adf-27f1-410d-95fb-04f241d0588c",
              "position": [
                0.9800000000000004,
                1.1400000000000001,
                5.58
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "435ba87c-dcca-422b-be32-cef93660f699",
              "position": [
                0.9100000000000001,
                1.13,
                5.609999999999999
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "2b43b60d-d073-4367-9cad-34da87b51cd4",
              "position": [
                0.8399999999999999,
                1.12,
                5.640000000000001
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "16f7de2c-1788-4ec3-81fa-7fca3f37a4e2",
              "position": [
                0.7699999999999996,
                1.1099999999999999,
                5.67
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "88f1a8dc-60dd-4163-bb34-5e93a838fd65",
              "position": [
                0.7000000000000002,
                1.1,
                5.7
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "1ddfad22-03e1-47d8-bbe0-5da20fc9f00f",
              "position": [
                0.6299999999999999,
                1.0899999999999999,
                5.73
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "0be94218-9425-480b-9afa-dbd15f4f8cc3",
              "position": [
                0.5599999999999996,
                1.08,
                5.76
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "ef3fe646-4ff1-409f-81ab-5003bf71b5f9",
              "position": [
                0.4900000000000002,
                1.0699999999999998,
                5.79
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "c6125c1b-c494-452e-b4ae-df11574324ea",
              "position": [
                0.41999999999999993,
                1.06,
                5.82
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "3afae5b7-f5b4-424f-a116-59beecbf6238",
              "position": [
                0.34999999999999964,
                1.05,
                5.85
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "7f9be986-18a3-446a-af3b-7c1f46065403",
              "position": [
                0.28000000000000025,
                1.04,
                5.88
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "3da358cd-25d9-4c72-b764-a4684e128d07",
              "position": [
                0.20999999999999996,
                1.03,
                5.91
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "dee9068b-359f-4082-b4ed-9cfac24f30d1",
              "position": [
                0.13999999999999968,
                1.02,
                5.9399999999999995
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "f95833e0-3f17-459d-bd05-b25864084f27",
              "position": [
                0.07000000000000028,
                1.01,
                5.970000000000001
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-1"
              }
            },
            {
              "id": "1e88b687-3828-4c20-b2c4-67f02aecfaad",
              "position": [
                7,
                2,
                3
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "763d3062-dd3e-45b3-9f9d-b5ad1f1178bc",
              "position": [
                6.97,
                1.99,
                3.03
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "548ab167-61ba-4477-b953-dceab4df8bcc",
              "position": [
                6.94,
                1.98,
                3.06
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "6062965d-8c30-4fe4-97a5-5d7000fb4ecb",
              "position": [
                6.91,
                1.97,
                3.09
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "2469af56-347a-4051-9257-366106b391f5",
              "position": [
                6.88,
                1.96,
                3.12
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "f64ae6d0-4707-4fe8-80a0-0999a5e536ff",
              "position": [
                6.85,
                1.95,
                3.15
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "7024ce16-5403-4878-a9c4-f9095d15ac65",
              "position": [
                6.82,
                1.94,
                3.18
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "a5ec4ea4-b70f-4ca2-b724-f3ae3402f136",
              "position": [
                6.79,
                1.93,
                3.21
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "789f5157-682b-4ef1-9201-55a70ddd6137",
              "position": [
                6.76,
                1.92,
                3.24
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "1a300a5a-b3e2-4eb2-8a4b-9e1dc7538f40",
              "position": [
                6.73,
                1.91,
                3.27
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "6508e06f-61e7-4b96-b7cb-532eea24bfeb",
              "position": [
                6.7,
                1.9,
                3.3
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "58bb18ec-5373-4589-8529-d1baac7647d9",
              "position": [
                6.67,
                1.89,
                3.33
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "e04010fa-45d3-4088-ab5e-0b652672fa0c",
              "position": [
                6.64,
                1.88,
                3.36
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "8ef539bc-732f-4503-b085-c8312e0d3e7a",
              "position": [
                6.61,
                1.87,
                3.39
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "4cd099a1-f00c-44eb-b540-e569cc52c666",
              "position": [
                6.58,
                1.8599999999999999,
                3.42
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "81888952-628a-4456-a8f8-86ad07771103",
              "position": [
                6.55,
                1.85,
                3.45
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "4ec46ffe-c5e2-4de6-b186-23cf9afa4877",
              "position": [
                6.52,
                1.84,
                3.48
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "0e4673e7-fadb-4c69-890d-c9840d2f39e1",
              "position": [
                6.49,
                1.83,
                3.51
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "52070d53-f0cb-4528-a5e1-193527c12597",
              "position": [
                6.46,
                1.82,
                3.54
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "6373961c-e886-4d11-a54b-d268fec86e7d",
              "position": [
                6.43,
                1.81,
                3.57
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "0c27c789-66b2-4d92-9390-616bc061357f",
              "position": [
                6.4,
                1.8,
                3.6
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "b5db6acd-d529-4e2f-b123-17229f84c419",
              "position": [
                6.37,
                1.79,
                3.63
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "068fc241-e605-42ac-8035-827d3e6741af",
              "position": [
                6.34,
                1.78,
                3.66
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "4f236719-f225-4e73-b922-12793c8ec3e5",
              "position": [
                6.3100000000000005,
                1.77,
                3.69
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "55e304a1-4c5f-42f1-ab2d-4f7c39572fe0",
              "position": [
                6.28,
                1.76,
                3.7199999999999998
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "b3f2de64-4f7d-475a-b082-ac52a9ed2dca",
              "position": [
                6.25,
                1.75,
                3.75
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "57d5af89-511b-45f9-a47a-2b2586ec2eac",
              "position": [
                6.22,
                1.74,
                3.7800000000000002
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "de340684-0bad-43f6-94ad-ce9f4119cc7e",
              "position": [
                6.1899999999999995,
                1.73,
                3.81
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "e4a071a7-4b18-4b60-9318-7bdd5f2834fb",
              "position": [
                6.16,
                1.72,
                3.84
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "44cdc973-a234-4689-ab0f-2d5a4745fdc8",
              "position": [
                6.13,
                1.71,
                3.87
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "e23880dd-6c35-47bf-89f4-b9f34da00bb6",
              "position": [
                6.1,
                1.7,
                3.9
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "55f53150-d032-4177-b39a-128c9c49e836",
              "position": [
                6.07,
                1.69,
                3.93
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "511f4b01-732b-446f-b64b-3a64b1f0819f",
              "position": [
                6.04,
                1.68,
                3.96
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "9e8bcf4c-d1e3-47ca-8187-5cdc0e4c2bf7",
              "position": [
                6.01,
                1.67,
                3.99
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "02103ff1-e79a-4d09-a0c1-065e069b970e",
              "position": [
                5.98,
                1.66,
                4.02
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "9971aff0-dc7f-4702-833f-8483550225aa",
              "position": [
                5.95,
                1.65,
                4.05
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "3d4cb2d2-fd00-4250-b96a-d5d06aa25949",
              "position": [
                5.92,
                1.6400000000000001,
                4.08
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "2f0dad47-550e-4833-ae0a-2472fcafa693",
              "position": [
                5.89,
                1.63,
                4.11
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "740d215f-ca8d-4d8e-8ce0-501fa7a09bd8",
              "position": [
                5.86,
                1.62,
                4.14
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "f188c306-2a9a-442f-8f55-2242a1f0bddc",
              "position": [
                5.83,
                1.6099999999999999,
                4.17
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "5a280f86-4213-4889-8f63-6c75c07d3a66",
              "position": [
                5.8,
                1.6,
                4.2
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "6c428aca-8317-46e3-aab6-d1185fc6c318",
              "position": [
                5.77,
                1.59,
                4.23
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "d18a13ba-2914-474c-bbb4-003164fe71ed",
              "position": [
                5.74,
                1.58,
                4.26
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "03bd253b-eb45-4834-96c1-892b97330168",
              "position": [
                5.71,
                1.57,
                4.29
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "5d85c749-6e2c-4d39-a482-7b50dee773c2",
              "position": [
                5.68,
                1.56,
                4.32
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "08b9e7b6-b151-45b2-8540-cffd4b68aea9",
              "position": [
                5.65,
                1.55,
                4.35
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "51349a06-9d06-4c8a-87a5-6236901b130f",
              "position": [
                5.62,
                1.54,
                4.38
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "06bf704f-597e-4925-87bb-2cf54e2c820b",
              "position": [
                5.59,
                1.53,
                4.41
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "63e58c16-4476-4e9d-960e-852ed58a7588",
              "position": [
                5.5600000000000005,
                1.52,
                4.4399999999999995
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "3d93b182-65ea-4615-9625-43879dc7b7ad",
              "position": [
                5.53,
                1.51,
                4.47
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "dd063d70-1c4d-4e4f-8e2d-88ae76cbbd8f",
              "position": [
                5.5,
                1.5,
                4.5
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "319095ef-3069-491d-ae0e-e6364922b14b",
              "position": [
                5.47,
                1.49,
                4.53
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "0d8ac43e-c50c-4321-839e-64d3f152b4ac",
              "position": [
                5.4399999999999995,
                1.48,
                4.5600000000000005
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "5340fd8c-8a1e-4c64-81f8-434fcc70bb68",
              "position": [
                5.41,
                1.47,
                4.59
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "caf887ea-4025-4cbc-a004-617a8a040c85",
              "position": [
                5.38,
                1.46,
                4.62
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "ca47f163-911f-4eef-9d62-9902208900ad",
              "position": [
                5.35,
                1.45,
                4.65
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "46efb348-146b-46d2-8751-35177deb0058",
              "position": [
                5.32,
                1.44,
                4.68
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "f8c41e0b-aa83-4cbf-b182-7daf66be306d",
              "position": [
                5.29,
                1.4300000000000002,
                4.71
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "33df4a3e-3625-4c8c-a968-139371833a05",
              "position": [
                5.26,
                1.42,
                4.74
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "dd76012b-df05-4db3-b904-edc132b35e9b",
              "position": [
                5.23,
                1.4100000000000001,
                4.77
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "d3516f68-0c48-492c-bbb0-da457da33917",
              "position": [
                5.2,
                1.4,
                4.8
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "f32ed837-8f04-4eb1-a771-501a92cdecec",
              "position": [
                5.17,
                1.3900000000000001,
                4.83
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "31eaae3d-3ea0-462b-98ea-6288f7d0c131",
              "position": [
                5.14,
                1.38,
                4.86
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "12b21091-1c42-4ed5-a6c7-f92d3e4e0392",
              "position": [
                5.11,
                1.37,
                4.89
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "40c23056-fb4b-44fb-99a5-1e06ffde0f78",
              "position": [
                5.08,
                1.3599999999999999,
                4.92
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "b69310c8-c141-4941-8130-7a36082870a2",
              "position": [
                5.05,
                1.35,
                4.95
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "9e12d899-56ca-4f9d-9f20-95193176cdc8",
              "position": [
                5.02,
                1.3399999999999999,
                4.98
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "43834cc5-c6a3-4166-9287-23d302464ce4",
              "position": [
                4.99,
                1.33,
                5.01
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "146eacc8-c5c5-48ec-8182-1e99587392a3",
              "position": [
                4.96,
                1.3199999999999998,
                5.04
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "d8675e16-d547-4194-a028-1501e3ac63d1",
              "position": [
                4.93,
                1.31,
                5.07
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "bacc136f-f20a-4cda-bd4b-8ef8358138f4",
              "position": [
                4.9,
                1.3,
                5.1
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "6a3b0f60-c273-4d2e-958e-7b12453ec987",
              "position": [
                4.87,
                1.29,
                5.13
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "da2609f2-8fd1-4108-b873-9ecc5a599230",
              "position": [
                4.84,
                1.28,
                5.16
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "245641bd-559c-46ad-ba7a-6f7863f4dd10",
              "position": [
                4.8100000000000005,
                1.27,
                5.1899999999999995
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "851a0790-5496-4975-bef3-1807fc6e3cea",
              "position": [
                4.779999999999999,
                1.26,
                5.220000000000001
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "44e58353-f926-4c26-87a8-9fd857795a8f",
              "position": [
                4.75,
                1.25,
                5.25
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "c7f4aaa4-9721-41d4-a31d-5f35eb699305",
              "position": [
                4.720000000000001,
                1.24,
                5.279999999999999
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "b31adc2a-9e94-47c0-9473-7047ec4cc613",
              "position": [
                4.6899999999999995,
                1.23,
                5.3100000000000005
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "714fb057-2496-4583-849d-49582f68fe2c",
              "position": [
                4.66,
                1.22,
                5.34
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "71e787ec-121e-4144-82df-5ec0b76b71ca",
              "position": [
                4.63,
                1.21,
                5.37
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "afa656a7-2b24-491e-8260-c413dfd7e554",
              "position": [
                4.6,
                1.2,
                5.4
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "a48b2d15-ad02-4936-a961-ba94647e5c97",
              "position": [
                4.57,
                1.19,
                5.43
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "73c6308b-f084-47fa-9973-6d07263dccae",
              "position": [
                4.54,
                1.1800000000000002,
                5.46
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "6acca415-1a5c-4753-a811-5af454ee5fb6",
              "position": [
                4.51,
                1.17,
                5.49
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "ef1d0c76-8242-41a2-b4f5-516d80070ad9",
              "position": [
                4.48,
                1.1600000000000001,
                5.52
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "ccddb8e5-5d00-49af-aa96-8a34efd66778",
              "position": [
                4.45,
                1.15,
                5.55
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "aecd4891-7d15-46d0-aa61-5c8fcc02f139",
              "position": [
                4.42,
                1.1400000000000001,
                5.58
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "c7759035-5459-452e-b965-bb8ccfd31ee8",
              "position": [
                4.390000000000001,
                1.13,
                5.609999999999999
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "285844cb-f293-4416-a408-1c9461df3018",
              "position": [
                4.359999999999999,
                1.12,
                5.640000000000001
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "53f357e2-bb39-4ce5-8887-66af1b6f6842",
              "position": [
                4.33,
                1.1099999999999999,
                5.67
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "981bd784-ce7d-42de-abb5-2549d0974f70",
              "position": [
                4.3,
                1.1,
                5.7
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "bfbf5162-6c7b-49b9-829f-2709fc30e61b",
              "position": [
                4.27,
                1.0899999999999999,
                5.73
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "c53a8dda-d59a-42eb-aa8a-56cfd29622ef",
              "position": [
                4.24,
                1.08,
                5.76
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "94e00df7-bcd3-44c4-be0c-785d676e804c",
              "position": [
                4.21,
                1.0699999999999998,
                5.79
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "2efb0261-df03-4a2f-b9d7-bec64f69100f",
              "position": [
                4.18,
                1.06,
                5.82
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "80a241a4-cd55-4c6a-9354-9fa9205ccf9b",
              "position": [
                4.15,
                1.05,
                5.85
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "91d9e179-03fe-4e5c-a6af-c17283670160",
              "position": [
                4.12,
                1.04,
                5.88
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "352e4842-2d3f-40c7-8fc6-77374e869bcd",
              "position": [
                4.09,
                1.03,
                5.91
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "200acbb0-49f9-4ea9-873b-069a3022ddc5",
              "position": [
                4.0600000000000005,
                1.02,
                5.9399999999999995
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            },
            {
              "id": "240c9faa-24f5-4539-b68d-a5a175ce303b",
              "position": [
                4.029999999999999,
                1.01,
                5.970000000000001
              ],
              "info": {
                "source": "exchange-queue-1-topic",
                "destination": "queue-2"
              }
            }
          ],
          "queueBetweenConsumer": [
            {
              "id": "09caade2-821d-4f9a-84c4-d3f030b5d32a",
              "position": [
                0,
                1,
                6
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "7cfa2503-243c-4a1a-8650-857a786c0814",
              "position": [
                0,
                0.98,
                6.03
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "4863a4ac-9fc2-4109-ab07-e88a419c0f9e",
              "position": [
                0,
                0.96,
                6.06
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "c2d3862e-ca58-4057-883f-d2a465987be2",
              "position": [
                0,
                0.94,
                6.09
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "41106892-3bb0-46d9-a185-3f7adba9b00e",
              "position": [
                0,
                0.92,
                6.12
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "dcd457e1-4fc8-4f0e-a1c0-3f9916beb330",
              "position": [
                0,
                0.9,
                6.15
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "70128738-38dd-43f0-9ed4-1f55c54276e2",
              "position": [
                0,
                0.88,
                6.18
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "c05db0f4-a237-44e6-a081-c47397b83a97",
              "position": [
                0,
                0.86,
                6.21
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "38a4b63c-2eb9-4139-b9b4-a173aec82c61",
              "position": [
                0,
                0.84,
                6.24
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "c6d17ab7-9b5f-4e8d-b93e-af01529108a4",
              "position": [
                0,
                0.8200000000000001,
                6.27
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "5c2b868b-ff37-4dc8-942f-55be98bc2edb",
              "position": [
                0,
                0.8,
                6.3
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "e8489fb2-82ba-43bd-81c1-b7576cf912d6",
              "position": [
                0,
                0.78,
                6.33
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "731eb631-5ae6-4c76-96fd-ef23735c2a68",
              "position": [
                0,
                0.76,
                6.36
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "5cd1a488-8d4e-48be-9448-9fa1a4bdfcc8",
              "position": [
                0,
                0.74,
                6.39
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "21fc1b4a-788c-4e88-8a60-c50f8150632e",
              "position": [
                0,
                0.72,
                6.42
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "48fcdf0e-2f48-4e38-9720-7e75c6e258c3",
              "position": [
                0,
                0.7,
                6.45
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "9388009f-3442-41f4-8cc4-80af2f292e74",
              "position": [
                0,
                0.6799999999999999,
                6.48
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "36ec5b11-4389-4b0c-879c-9f060f32cb3b",
              "position": [
                0,
                0.6599999999999999,
                6.51
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "1e1e4f75-839a-4add-82ca-219a40fd0b70",
              "position": [
                0,
                0.64,
                6.54
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "86bd1934-f6ca-40bc-b797-a7e39c2c9625",
              "position": [
                0,
                0.62,
                6.57
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "3eac21df-6464-4a20-9e38-bb398381833b",
              "position": [
                0,
                0.6,
                6.6
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "2e7fc697-8fc9-4f32-b96c-edbeacf4d7f3",
              "position": [
                0,
                0.5800000000000001,
                6.63
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "1ebf5593-5c18-43f3-bb86-4ef97efef8fa",
              "position": [
                0,
                0.56,
                6.66
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "70118819-9917-4df4-bd9f-3faf2251f596",
              "position": [
                0,
                0.54,
                6.6899999999999995
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "de7580d6-4560-49a7-8cb6-d84885feccab",
              "position": [
                0,
                0.52,
                6.72
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "d1dec234-1f42-4945-a374-d364af21955a",
              "position": [
                0,
                0.5,
                6.75
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "101fac90-f85d-4fe1-a0f7-3955ca72286c",
              "position": [
                0,
                0.48,
                6.78
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "fb71dcfd-9ba7-42ed-b21b-30593830b369",
              "position": [
                0,
                0.45999999999999996,
                6.8100000000000005
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "ec54867f-58ad-464e-9ca5-1d4069723bb2",
              "position": [
                0,
                0.43999999999999995,
                6.84
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "883dbd52-5aaf-4757-b14b-e8a03a253867",
              "position": [
                0,
                0.42000000000000004,
                6.87
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "3f9b0861-92be-495b-9b72-3ac12fe45b9b",
              "position": [
                0,
                0.4,
                6.9
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "15edcd5b-f7a1-485b-976b-0d8b69979438",
              "position": [
                0,
                0.38,
                6.93
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "93c26986-7f66-4ffa-ae73-a29f45722fa0",
              "position": [
                0,
                0.36,
                6.96
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "70a804ac-a812-43b9-9291-1ee93492284f",
              "position": [
                0,
                0.33999999999999997,
                6.99
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "950c210f-a531-4bee-8059-f0b1e268e124",
              "position": [
                0,
                0.31999999999999995,
                7.02
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "b6e3d52d-b12f-451b-b146-e6f340774ce8",
              "position": [
                0,
                0.30000000000000004,
                7.05
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "e2efa79a-822b-4219-99bc-d5176e02e92b",
              "position": [
                0,
                0.28,
                7.08
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "b281677e-33cc-4247-8741-af5e5fee8c4d",
              "position": [
                0,
                0.26,
                7.11
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "2993cb3b-7c0b-44f1-9ea6-b291acefda68",
              "position": [
                0,
                0.24,
                7.14
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "b8804d0a-2dd6-4712-8855-3a9f43d665e5",
              "position": [
                0,
                0.21999999999999997,
                7.17
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "b1a3bf2e-8b4b-403c-a42c-00e4a201186b",
              "position": [
                0,
                0.19999999999999996,
                7.2
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "9c00e291-1dd5-4a9e-b9fd-ccbdaed4c268",
              "position": [
                0,
                0.18000000000000005,
                7.23
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "fd0626d7-87c0-4c56-87da-70b2b986d240",
              "position": [
                0,
                0.16000000000000003,
                7.26
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "d8004ca4-5a49-4bc3-b221-97f622e6c934",
              "position": [
                0,
                0.14,
                7.29
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "d30dbf25-8b5d-4f40-a10d-28cb4c0540a2",
              "position": [
                0,
                0.12,
                7.32
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "aaa8bb66-934b-4f50-ade0-81469b42dadd",
              "position": [
                0,
                0.09999999999999998,
                7.35
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "37598467-e759-42c4-a5db-7acfa302d918",
              "position": [
                0,
                0.07999999999999996,
                7.38
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "e2b981e0-d07b-4544-bd95-dc3f1eadad06",
              "position": [
                0,
                0.06000000000000005,
                7.41
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "f803efa1-047f-49b5-ac81-d3d9057efdbd",
              "position": [
                0,
                0.040000000000000036,
                7.4399999999999995
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "60f98096-79de-486f-8ab2-8f28d290a793",
              "position": [
                0,
                0.020000000000000018,
                7.47
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "dc866d28-484f-439c-b4bc-93ab3df68d44",
              "position": [
                0,
                0,
                7.5
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "244b253b-b2c5-4581-bac3-5119e55072ca",
              "position": [
                0,
                -0.020000000000000018,
                7.53
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "4c55aa1e-20f8-4533-a0ba-31e17fd30ee0",
              "position": [
                0,
                -0.040000000000000036,
                7.5600000000000005
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "a112e675-9b5c-4f01-9ab6-a9783065de83",
              "position": [
                0,
                -0.06000000000000005,
                7.59
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "0627be91-0d80-49da-b7a6-50cc3191a476",
              "position": [
                0,
                -0.08000000000000007,
                7.62
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "fb307581-234f-4136-83f0-76ba049a3db1",
              "position": [
                0,
                -0.10000000000000009,
                7.65
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "8eeae127-998b-4bd7-8b90-c126011b15d3",
              "position": [
                0,
                -0.1200000000000001,
                7.68
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "f0ce3150-d751-4da9-ad6a-368b70abbdb1",
              "position": [
                0,
                -0.1399999999999999,
                7.71
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "8851d247-5730-46a6-9be8-84c75f68c457",
              "position": [
                0,
                -0.15999999999999992,
                7.74
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "be075c7e-9e90-4608-a6c3-cf86e238710b",
              "position": [
                0,
                -0.17999999999999994,
                7.77
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "931f60b3-923a-49ea-b227-1ed46deda74a",
              "position": [
                0,
                -0.19999999999999996,
                7.8
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "5585def1-8902-4b28-914f-861d2297a91e",
              "position": [
                0,
                -0.21999999999999997,
                7.83
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "cbc55d42-dd52-4c38-808d-d8adbd624e9b",
              "position": [
                0,
                -0.24,
                7.86
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "b2df781e-361e-495b-bee2-4a6dd384c8ec",
              "position": [
                0,
                -0.26,
                7.89
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "a1c82994-9e57-496d-9cb1-d0ba908a1642",
              "position": [
                0,
                -0.28,
                7.92
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "15a05aa2-5b2b-422b-a808-c2ed7827b847",
              "position": [
                0,
                -0.30000000000000004,
                7.95
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "b4bc5e4c-a0f7-4d7b-9061-4a0fa4d0ebcb",
              "position": [
                0,
                -0.32000000000000006,
                7.98
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "b02e7075-592d-454e-8248-47d3388cb78d",
              "position": [
                0,
                -0.3400000000000001,
                8.01
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "b527de70-db87-4b96-9494-27ce78b8ee2b",
              "position": [
                0,
                -0.3600000000000001,
                8.04
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "631d796c-1790-40c5-9d66-92a86ff04b6a",
              "position": [
                0,
                -0.3799999999999999,
                8.07
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "7d588af2-92f8-4088-bd65-72515867861d",
              "position": [
                0,
                -0.3999999999999999,
                8.1
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "fa5327bb-4f8f-4bc0-8f47-e6e0ee64d62b",
              "position": [
                0,
                -0.41999999999999993,
                8.129999999999999
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "790652df-6f94-48e0-a632-4f80728d74af",
              "position": [
                0,
                -0.43999999999999995,
                8.16
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "1d0e2155-e11e-48c1-9cde-4e76d4989988",
              "position": [
                0,
                -0.45999999999999996,
                8.19
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "56170acd-ca96-450e-baf9-868baa029990",
              "position": [
                0,
                -0.48,
                8.22
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "20a93fed-a757-4c61-9de0-0340537bca01",
              "position": [
                0,
                -0.5,
                8.25
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "96d39def-8c66-40fe-ba4f-47cf3b7a0d75",
              "position": [
                0,
                -0.52,
                8.28
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "235a8159-0fe4-4255-adf0-5df13fd42894",
              "position": [
                0,
                -0.54,
                8.31
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "b1f3ad22-86dd-44d3-8a59-cd9d1e0502a1",
              "position": [
                0,
                -0.56,
                8.34
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "99e5d4d1-793d-4f98-8ebd-c424522908ac",
              "position": [
                0,
                -0.5800000000000001,
                8.370000000000001
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "6bdffbec-841b-4fb8-85d6-9027b2563203",
              "position": [
                0,
                -0.6000000000000001,
                8.4
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "5cfa506a-ae24-48dc-8461-7f6ccf4dee48",
              "position": [
                0,
                -0.6200000000000001,
                8.43
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "bbe2cd79-ecc9-4112-aad0-adaba4add896",
              "position": [
                0,
                -0.6399999999999999,
                8.46
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "3aecf49b-86df-46f6-92ac-6334284f26aa",
              "position": [
                0,
                -0.6599999999999999,
                8.49
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "67c8a051-9546-4900-b222-7f3a27c32977",
              "position": [
                0,
                -0.6799999999999999,
                8.52
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "7c22a37d-b85d-4566-a4ee-5223c4d6b1d1",
              "position": [
                0,
                -0.7,
                8.55
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "9fd93a7f-624e-47d9-b433-126e9f78d275",
              "position": [
                0,
                -0.72,
                8.58
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "08a56931-d002-47c3-97fa-64721822cd14",
              "position": [
                0,
                -0.74,
                8.61
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "7b3e2b04-bf2b-4645-bda7-e6c57caa2fe7",
              "position": [
                0,
                -0.76,
                8.64
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "8e5564e6-295e-4388-b04c-46d7c566bda3",
              "position": [
                0,
                -0.78,
                8.67
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "a7c26062-2485-43f7-8d48-f52f5fbbf265",
              "position": [
                0,
                -0.8,
                8.7
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "897ab377-6b53-4159-90ef-9d429e8aa140",
              "position": [
                0,
                -0.8200000000000001,
                8.73
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "331aba67-e0a4-4020-b149-4709e9cc128e",
              "position": [
                0,
                -0.8400000000000001,
                8.76
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "40514779-aafa-4a51-a4bb-7131a7d9b89f",
              "position": [
                0,
                -0.8600000000000001,
                8.79
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "5014f353-78d4-4c70-aea5-be0a713a4644",
              "position": [
                0,
                -0.8799999999999999,
                8.82
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "74abf819-3630-49b6-a0e9-f835522cd1bd",
              "position": [
                0,
                -0.8999999999999999,
                8.85
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "c4ea574a-96a4-4c95-a515-fdfe900334d4",
              "position": [
                0,
                -0.9199999999999999,
                8.879999999999999
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "8dc6fa31-e9a7-4142-b995-5ffac04b2ece",
              "position": [
                0,
                -0.94,
                8.91
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "f2c34359-934a-4833-a700-d79561dfdef3",
              "position": [
                0,
                -0.96,
                8.94
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            },
            {
              "id": "55459817-ed1c-4d6c-b59d-1e5dffceed6e",
              "position": [
                0,
                -0.98,
                8.97
              ],
              "info": {
                "source": "queue-1",
                "destination": "queue-1"
              }
            }
          ]
        }
      }
    ],
    "position": {
      "position": [
        0,
        -1,
        0
      ],
      "info": {
        "name": "project-nextjs-producer",
        "type": "network",
        "componentType": "producer"
      },
      "id": "01658c90-ec8d-4549-b7f8-2f70c16bc28c"
    },
    "lines": [
      {
        "id": "b32c98ae-25ad-41e2-9f5a-cb1ab02410be",
        "positions": [
          [
            0,
            -1,
            0
          ],
          [
            2,
            1,
            3
          ]
        ],
        "info": {
          "children": "amq.direct",
          "father": "project-nextjs-producer"
        }
      },
      {
        "id": "a1c16302-3711-4716-853a-eb6afb32f733",
        "positions": [
          [
            0,
            -1,
            0
          ],
          [
            4,
            1,
            3
          ]
        ],
        "info": {
          "children": "amq.fanout",
          "father": "project-nextjs-producer"
        }
      },
      {
        "id": "f436b6c1-cbd1-498d-b6f1-d86eee204bb8",
        "positions": [
          [
            0,
            -1,
            0
          ],
          [
            6,
            1,
            3
          ]
        ],
        "info": {
          "children": "amq.headers",
          "father": "project-nextjs-producer"
        }
      },
      {
        "id": "43c519aa-c283-460b-b99a-64e6910efaaa",
        "positions": [
          [
            0,
            -1,
            0
          ],
          [
            8,
            1,
            3
          ]
        ],
        "info": {
          "children": "amq.match",
          "father": "project-nextjs-producer"
        }
      },
      {
        "id": "380b1d7c-3642-41a4-b96f-df3d5dc03553",
        "positions": [
          [
            0,
            -1,
            0
          ],
          [
            3,
            2,
            3
          ]
        ],
        "info": {
          "children": "amq.topic",
          "father": "project-nextjs-producer"
        }
      },
      {
        "id": "d9891b24-fe0d-4c79-a34d-f20685fe97cc",
        "positions": [
          [
            0,
            -1,
            0
          ],
          [
            7,
            2,
            3
          ]
        ],
        "info": {
          "children": "exchange-queue-1-topic",
          "father": "project-nextjs-producer"
        }
      }
    ]
  }
]

export const linesPositions = [
  {
    "id": "95085af1-6575-4024-a05d-2220e01ba984",
    "positions": [
      [
        0,
        -1,
        0
      ],
      [
        2,
        1,
        3
      ]
    ],
    "info": {
      "children": "amq.direct",
      "father": "project-nextjs-producer"
    }
  },
  {
    "id": "44b02eae-f3af-4641-8f5e-592eadf8967f",
    "positions": [
      [
        0,
        -1,
        0
      ],
      [
        4,
        1,
        3
      ]
    ],
    "info": {
      "children": "amq.fanout",
      "father": "project-nextjs-producer"
    }
  },
  {
    "id": "21eab61a-6a1f-4ad3-a696-a0a4ee669afb",
    "positions": [
      [
        0,
        -1,
        0
      ],
      [
        6,
        1,
        3
      ]
    ],
    "info": {
      "children": "amq.headers",
      "father": "project-nextjs-producer"
    }
  },
  {
    "id": "9dfeaf00-fb6b-45ea-ad20-ef0f0bd7567e",
    "positions": [
      [
        0,
        -1,
        0
      ],
      [
        8,
        1,
        3
      ]
    ],
    "info": {
      "children": "amq.match",
      "father": "project-nextjs-producer"
    }
  },
  {
    "id": "002f7a41-493b-4c76-9a0e-da2e11d63501",
    "positions": [
      [
        0,
        -1,
        0
      ],
      [
        3,
        2,
        3
      ]
    ],
    "info": {
      "children": "amq.topic",
      "father": "project-nextjs-producer"
    }
  },
  {
    "id": "0c7a73d9-0738-453c-a71e-c9353f0ecbce",
    "positions": [
      [
        0,
        -1,
        0
      ],
      [
        7,
        2,
        3
      ]
    ],
    "info": {
      "children": "exchange-queue-1-topic",
      "father": "project-nextjs-producer"
    }
  }
]


export const messagesPositions: MessagePositions[] = producersPositionMessagesPosition.reduce((accumulator: MessagePositions[], current: ProducerPositionLinesMessagePosition): MessagePositions[] => [...accumulator, ...current.messages], [])

export const moreOneProducers = [
  ...producers,
  {
    "id": "a9b5afc7-6bea-4e87-956a-57352031a463",
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
        "time": 1,
        "payload": "{\n\"fila\":\"direct\"\n}",
        "id": "284d1cbc-b9c7-4d9e-baf9-1827dc1daae4",
        "color": "#7a2d16"
      },
      {
        "exchange": "amq.fanout",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"fanout\"\n}",
        "id": "e570d66e-5526-4013-9354-65a764e35d1d",
        "color": "#59b651"
      },
      {
        "exchange": "amq.headers",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"headers\"\n}",
        "id": "cf73c63e-8eb1-4d4e-b077-b07333ba810d",
        "color": "#1cc0c2"
      },
      {
        "exchange": "amq.match",
        "routeKey": "",
        "time": 1,
        "payload": "{\n\"fila\":\"match\"\n}",
        "id": "b1ebcb65-d165-4a39-b975-299f0706a146",
        "color": "#6e1e9d"
      },
      {
        "exchange": "amq.topic",
        "routeKey": "route-key-topic",
        "time": 1,
        "payload": "{\n\"fila\":\"route-key-topic\"\n}",
        "id": "063bb02b-dc70-443e-b9c7-76ab50d05404",
        "color": "#1ad1a6"
      },
      {
        "exchange": "exchange-queue-1-topic",
        "routeKey": "many.queue-3",
        "time": 1,
        "payload": "{\n\"fila\":\"route-key-topic\"\n}",
        "id": "063bb02b-dc70-443e-b9c7-76ab50d05674",
        "color": "#361c34"
      }
    ]
  }
]