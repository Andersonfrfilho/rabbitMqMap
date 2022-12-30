export const editor = {
  "type": "object",
  "properties": {
    "queues": {
      "type": "array",
      "items": {
        "$ref": "/Queue",
      }
    },
    "exchanges": {
      "type": "array",
      "items": {
        "$ref": "/Exchange"
      }
    },
    "producers": {
      "type": "array",
      "items": {
        "$ref": "/Producer"
      }
    }
  },
  "required": [
    // "queues",
    // "exchanges",
    // "producers"
  ]
}