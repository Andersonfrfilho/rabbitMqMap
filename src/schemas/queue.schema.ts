export const binding = {
  "id": "/Binding",
  "type": "object",
  "properties": {
    "source": {
      "type": "string"
    },
    "vhost": {
      "type": "string"
    },
    "destination": {
      "type": "string"
    },
    "destination_type": {
      "type": "string"
    },
    "routing_key": {
      "type": "string"
    },
    "arguments": {
      "type": "object",
      "properties": {
        "x-dead-letter-exchange": {
          "type": "string"
        }
      },
      "required": []
    },
    "properties_key": {
      "type": "string"
    }
  },
  "required": [
    "source",
    "vhost",
    "destination",
    "destination_type",
    "routing_key",
    "arguments",
    "properties_key"
  ]
}

export const consumer_register = {
  "id": "/ConsumerRegister",
  "type": "object",
  "properties": {
    "arguments": {
      "type": "object",
      "properties": {},
      "required": []
    },
    "ack_required": {
      "type": "boolean"
    },
    "active": {
      "type": "boolean"
    },
    "activity_status": {
      "type": "string"
    },
    "channel_details": {
      "type": "object",
      "properties": {
        "connection_name": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "node": {
          "type": "string"
        },
        "number": {
          "type": "number"
        },
        "peer_host": {
          "type": "string"
        },
        "peer_port": {
          "type": "number"
        },
        "user": {
          "type": "string"
        }
      },
      "required": [
        "connection_name",
        "name",
        "node",
        "number",
        "peer_host",
        "peer_port",
        "user"
      ]
    },
    "consumer_tag": {
      "type": "string"
    },
    "exclusive": {
      "type": "boolean"
    },
    "prefetch_count": {
      "type": "number"
    },
    "queue": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "vhost": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "vhost"
      ]
    }
  },
  "required": [
    "arguments",
    "ack_required",
    "active",
    "activity_status",
    "channel_details",
    "consumer_tag",
    "exclusive",
    "prefetch_count",
    "queue"
  ]
}

export const queue = {
  "id": "/Queue",
  "type": "object",
  "properties": {
    "arguments": {
      "type": "object",
      "properties": {
        "x-queue-type": {
          "type": "string"
        }
      },
    },
    "name": {
      "type": "string"
    },
    "node": {
      "type": "string"
    },
    "vhost": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "bindings": {
      "type": "array",
      "items": {
        "$ref": "/Binding"
      }
    },
    "consumers_register": {
      "type": "array",
      "items": {
        "$ref": "/ConsumerRegister",
      }
    }
  },
  "required": [
    "arguments",
    "name",
    "node",
    "vhost",
    "type",
    "bindings",
    "consumers_register"
  ]
}
