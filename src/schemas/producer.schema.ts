export const producer = {
  "id": "/Producer",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "host": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "node": {
      "type": "string"
    },
    "user": {
      "type": "string"
    },
    "client_properties": {
      "type": "object",
      "properties": {
        "capabilities": {
          "type": "object",
          "properties": {
            "authentication_failure_close": {
              "type": "boolean"
            },
            "basic.nack": {
              "type": "boolean"
            },
            "connection.blocked": {
              "type": "boolean"
            },
            "consumer_cancel_notify": {
              "type": "boolean"
            },
            "exchange_exchange_bindings": {
              "type": "boolean"
            },
            "publisher_confirms": {
              "type": "boolean"
            }
          },
          "required": [
            "authentication_failure_close",
            "basic.nack",
            "connection.blocked",
            "consumer_cancel_notify",
            "exchange_exchange_bindings",
            "publisher_confirms"
          ]
        },
        "information": {
          "type": "string"
        },
        "platform": {
          "type": "string"
        },
        "product": {
          "type": "string"
        },
        "version": {
          "type": "string"
        }
      },
      "required": [
        "capabilities",
        "information",
        "platform",
        "product",
        "version"
      ]
    },
    "user_who_performed_action": {
      "type": "string"
    },
    "vhost": {
      "type": "string"
    },
    "port": {
      "type": "number"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "host",
    "name",
    "node",
    "user",
    "client_properties",
    "user_who_performed_action",
    "vhost",
    "port",
    "type"
  ]
}
