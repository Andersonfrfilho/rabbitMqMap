export const exchange = {
  "id": "/Exchange",
  "type": "object",
  "properties": {
    "arguments": {
      "type": "object",
      "properties": {},
      "required": []
    },
    "auto_delete": {
      "type": "boolean"
    },
    "durable": {
      "type": "boolean"
    },
    "internal": {
      "type": "boolean"
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "user_who_performed_action": {
      "type": "string"
    },
    "vhost": {
      "type": "string"
    }
  },
  "required": [
    "arguments",
    "auto_delete",
    "durable",
    "internal",
    "name",
    "type",
    "user_who_performed_action",
    "vhost"
  ]
}
