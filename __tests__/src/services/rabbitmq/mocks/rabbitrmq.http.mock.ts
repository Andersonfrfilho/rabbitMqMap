import { activity_status } from "@services/rabbitmq/interfaces/consumer.interface"

export const queues = [
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "auto_delete": false,
    "backing_queue_status": {
      "avg_ack_egress_rate": 0.0,
      "avg_ack_ingress_rate": 0.0,
      "avg_egress_rate": 0.0,
      "avg_ingress_rate": 0.0,
      "delta": [
        "delta",
        "undefined",
        0,
        0,
        "undefined"
      ],
      "len": 0,
      "mode": "default",
      "next_seq_id": 0,
      "q1": 0,
      "q2": 0,
      "q3": 0,
      "q4": 0,
      "target_ram_count": "infinity"
    },
    "consumer_capacity": 0,
    "consumer_utilisation": 0,
    "consumers": 0,
    "durable": true,
    "effective_policy_definition": {},
    "exclusive": false,
    "exclusive_consumer_tag": null,
    "garbage_collection": {
      "fullsweep_after": 65535,
      "max_heap_size": 0,
      "min_bin_vheap_size": 46422,
      "min_heap_size": 233,
      "minor_gcs": 23
    },
    "head_message_timestamp": null,
    "idle_since": "2023-02-02 1:08:24",
    "memory": 14352,
    "message_bytes": 0,
    "message_bytes_paged_out": 0,
    "message_bytes_persistent": 0,
    "message_bytes_ram": 0,
    "message_bytes_ready": 0,
    "message_bytes_unacknowledged": 0,
    "messages": 0,
    "messages_details": {
      "rate": 0.0
    },
    "messages_paged_out": 0,
    "messages_persistent": 0,
    "messages_ram": 0,
    "messages_ready": 0,
    "messages_ready_details": {
      "rate": 0.0
    },
    "messages_ready_ram": 0,
    "messages_unacknowledged": 0,
    "messages_unacknowledged_details": {
      "rate": 0.0
    },
    "messages_unacknowledged_ram": 0,
    "name": "queue-1",
    "node": "rabbit@rabbit-mapper-host",
    "operator_policy": null,
    "policy": null,
    "recoverable_slaves": null,
    "reductions": 17690,
    "reductions_details": {
      "rate": 0.0
    },
    "single_active_consumer_tag": null,
    "state": "running",
    "type": "classic",
    "vhost": "/"
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "auto_delete": false,
    "backing_queue_status": {
      "avg_ack_egress_rate": 0.0,
      "avg_ack_ingress_rate": 0.0,
      "avg_egress_rate": 0.0,
      "avg_ingress_rate": 0.0,
      "delta": [
        "delta",
        "undefined",
        0,
        0,
        "undefined"
      ],
      "len": 0,
      "mode": "default",
      "next_seq_id": 0,
      "q1": 0,
      "q2": 0,
      "q3": 0,
      "q4": 0,
      "target_ram_count": "infinity"
    },
    "consumer_capacity": 0,
    "consumer_utilisation": 0,
    "consumers": 0,
    "durable": true,
    "effective_policy_definition": {},
    "exclusive": false,
    "exclusive_consumer_tag": null,
    "garbage_collection": {
      "fullsweep_after": 65535,
      "max_heap_size": 0,
      "min_bin_vheap_size": 46422,
      "min_heap_size": 233,
      "minor_gcs": 17
    },
    "head_message_timestamp": null,
    "idle_since": "2023-02-02 1:08:23",
    "memory": 14368,
    "message_bytes": 0,
    "message_bytes_paged_out": 0,
    "message_bytes_persistent": 0,
    "message_bytes_ram": 0,
    "message_bytes_ready": 0,
    "message_bytes_unacknowledged": 0,
    "messages": 0,
    "messages_details": {
      "rate": 0.0
    },
    "messages_paged_out": 0,
    "messages_persistent": 0,
    "messages_ram": 0,
    "messages_ready": 0,
    "messages_ready_details": {
      "rate": 0.0
    },
    "messages_ready_ram": 0,
    "messages_unacknowledged": 0,
    "messages_unacknowledged_details": {
      "rate": 0.0
    },
    "messages_unacknowledged_ram": 0,
    "name": "queue-1-dead-letter",
    "node": "rabbit@rabbit-mapper-host",
    "operator_policy": null,
    "policy": null,
    "recoverable_slaves": null,
    "reductions": 17685,
    "reductions_details": {
      "rate": 0.0
    },
    "single_active_consumer_tag": null,
    "state": "running",
    "type": "classic",
    "vhost": "/"
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "auto_delete": false,
    "backing_queue_status": {
      "avg_ack_egress_rate": 0.0,
      "avg_ack_ingress_rate": 0.0,
      "avg_egress_rate": 0.0,
      "avg_ingress_rate": 0.0,
      "delta": [
        "delta",
        "undefined",
        0,
        0,
        "undefined"
      ],
      "len": 0,
      "mode": "default",
      "next_seq_id": 0,
      "q1": 0,
      "q2": 0,
      "q3": 0,
      "q4": 0,
      "target_ram_count": "infinity"
    },
    "consumer_capacity": 0,
    "consumer_utilisation": 0,
    "consumers": 0,
    "durable": true,
    "effective_policy_definition": {},
    "exclusive": false,
    "exclusive_consumer_tag": null,
    "garbage_collection": {
      "fullsweep_after": 65535,
      "max_heap_size": 0,
      "min_bin_vheap_size": 46422,
      "min_heap_size": 233,
      "minor_gcs": 17
    },
    "head_message_timestamp": null,
    "idle_since": "2023-02-02 1:08:23",
    "memory": 14352,
    "message_bytes": 0,
    "message_bytes_paged_out": 0,
    "message_bytes_persistent": 0,
    "message_bytes_ram": 0,
    "message_bytes_ready": 0,
    "message_bytes_unacknowledged": 0,
    "messages": 0,
    "messages_details": {
      "rate": 0.0
    },
    "messages_paged_out": 0,
    "messages_persistent": 0,
    "messages_ram": 0,
    "messages_ready": 0,
    "messages_ready_details": {
      "rate": 0.0
    },
    "messages_ready_ram": 0,
    "messages_unacknowledged": 0,
    "messages_unacknowledged_details": {
      "rate": 0.0
    },
    "messages_unacknowledged_ram": 0,
    "name": "queue-2",
    "node": "rabbit@rabbit-mapper-host",
    "operator_policy": null,
    "policy": null,
    "recoverable_slaves": null,
    "reductions": 17621,
    "reductions_details": {
      "rate": 0.0
    },
    "single_active_consumer_tag": null,
    "state": "running",
    "type": "classic",
    "vhost": "/"
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "auto_delete": false,
    "backing_queue_status": {
      "avg_ack_egress_rate": 0.0,
      "avg_ack_ingress_rate": 0.0,
      "avg_egress_rate": 0.0,
      "avg_ingress_rate": 0.0,
      "delta": [
        "delta",
        "undefined",
        0,
        0,
        "undefined"
      ],
      "len": 0,
      "mode": "default",
      "next_seq_id": 0,
      "q1": 0,
      "q2": 0,
      "q3": 0,
      "q4": 0,
      "target_ram_count": "infinity"
    },
    "consumer_capacity": 0,
    "consumer_utilisation": 0,
    "consumers": 0,
    "durable": true,
    "effective_policy_definition": {},
    "exclusive": false,
    "exclusive_consumer_tag": null,
    "garbage_collection": {
      "fullsweep_after": 65535,
      "max_heap_size": 0,
      "min_bin_vheap_size": 46422,
      "min_heap_size": 233,
      "minor_gcs": 17
    },
    "head_message_timestamp": null,
    "idle_since": "2023-02-02 1:08:23",
    "memory": 14352,
    "message_bytes": 0,
    "message_bytes_paged_out": 0,
    "message_bytes_persistent": 0,
    "message_bytes_ram": 0,
    "message_bytes_ready": 0,
    "message_bytes_unacknowledged": 0,
    "messages": 0,
    "messages_details": {
      "rate": 0.0
    },
    "messages_paged_out": 0,
    "messages_persistent": 0,
    "messages_ram": 0,
    "messages_ready": 0,
    "messages_ready_details": {
      "rate": 0.0
    },
    "messages_ready_ram": 0,
    "messages_unacknowledged": 0,
    "messages_unacknowledged_details": {
      "rate": 0.0
    },
    "messages_unacknowledged_ram": 0,
    "name": "queue-3",
    "node": "rabbit@rabbit-mapper-host",
    "operator_policy": null,
    "policy": null,
    "recoverable_slaves": null,
    "reductions": 17625,
    "reductions_details": {
      "rate": 0.0
    },
    "single_active_consumer_tag": null,
    "state": "running",
    "type": "classic",
    "vhost": "/"
  },
  {
    "arguments": {
      "x-queue-type": "classic"
    },
    "auto_delete": false,
    "backing_queue_status": {
      "avg_ack_egress_rate": 0.0,
      "avg_ack_ingress_rate": 0.0,
      "avg_egress_rate": 0.0,
      "avg_ingress_rate": 0.0,
      "delta": [
        "delta",
        "undefined",
        0,
        0,
        "undefined"
      ],
      "len": 0,
      "mode": "default",
      "next_seq_id": 0,
      "q1": 0,
      "q2": 0,
      "q3": 0,
      "q4": 0,
      "target_ram_count": "infinity"
    },
    "consumer_capacity": 0,
    "consumer_utilisation": 0,
    "consumers": 0,
    "durable": true,
    "effective_policy_definition": {},
    "exclusive": false,
    "exclusive_consumer_tag": null,
    "garbage_collection": {
      "fullsweep_after": 65535,
      "max_heap_size": 0,
      "min_bin_vheap_size": 46422,
      "min_heap_size": 233,
      "minor_gcs": 17
    },
    "head_message_timestamp": null,
    "idle_since": "2023-02-02 1:08:24",
    "memory": 14352,
    "message_bytes": 0,
    "message_bytes_paged_out": 0,
    "message_bytes_persistent": 0,
    "message_bytes_ram": 0,
    "message_bytes_ready": 0,
    "message_bytes_unacknowledged": 0,
    "messages": 0,
    "messages_details": {
      "rate": 0.0
    },
    "messages_paged_out": 0,
    "messages_persistent": 0,
    "messages_ram": 0,
    "messages_ready": 0,
    "messages_ready_details": {
      "rate": 0.0
    },
    "messages_ready_ram": 0,
    "messages_unacknowledged": 0,
    "messages_unacknowledged_details": {
      "rate": 0.0
    },
    "messages_unacknowledged_ram": 0,
    "name": "queue-4",
    "node": "rabbit@rabbit-mapper-host",
    "operator_policy": null,
    "policy": null,
    "recoverable_slaves": null,
    "reductions": 17638,
    "reductions_details": {
      "rate": 0.0
    },
    "single_active_consumer_tag": null,
    "state": "running",
    "type": "classic",
    "vhost": "/"
  }
]


export const bindingsQueues = {
  'queue-1': [
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
  'queue-1-dead-letter': [
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
  'queue-2': [
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
  'queue-3': [
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
  'queue-4': [
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
}

export const consumers = [{
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
}]

export const connections = [
  {
    "auth_mechanism": "PLAIN",
    "channel_max": 2047,
    "channels": 1,
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
    "connected_at": 1675304193289,
    "frame_max": 4096,
    "garbage_collection": {
      "fullsweep_after": 65535,
      "max_heap_size": 0,
      "min_bin_vheap_size": 46422,
      "min_heap_size": 233,
      "minor_gcs": 69
    },
    "host": "172.18.0.2",
    "name": "172.18.0.1:39888 -> 172.18.0.2:5672",
    "node": "rabbit@rabbit-mapper-host",
    "peer_cert_issuer": null,
    "peer_cert_subject": null,
    "peer_cert_validity": null,
    "peer_host": "172.18.0.1",
    "peer_port": 39888,
    "port": 5672,
    "protocol": "AMQP 0-9-1",
    "recv_cnt": 98,
    "recv_oct": 1238,
    "recv_oct_details": {
      "rate": 1.6
    },
    "reductions": 98400,
    "reductions_details": {
      "rate": 199.8
    },
    "send_cnt": 188,
    "send_oct": 2141,
    "send_oct_details": {
      "rate": 3.2
    },
    "send_pend": 0,
    "ssl": false,
    "ssl_cipher": null,
    "ssl_hash": null,
    "ssl_key_exchange": null,
    "ssl_protocol": null,
    "state": "running",
    "timeout": 5,
    "type": "network",
    "user": "project-nextjs-consumer",
    "user_who_performed_action": "project-nextjs-consumer",
    "vhost": "/"
  },
  {
    "auth_mechanism": "PLAIN",
    "channel_max": 2047,
    "channels": 1,
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
    "connected_at": 1675304302152,
    "frame_max": 4096,
    "garbage_collection": {
      "fullsweep_after": 65535,
      "max_heap_size": 0,
      "min_bin_vheap_size": 46422,
      "min_heap_size": 233,
      "minor_gcs": 50
    },
    "host": "172.18.0.2",
    "name": "172.18.0.1:39900 -> 172.18.0.2:5672",
    "node": "rabbit@rabbit-mapper-host",
    "peer_cert_issuer": null,
    "peer_cert_subject": null,
    "peer_cert_validity": null,
    "peer_host": "172.18.0.1",
    "peer_port": 39900,
    "port": 5672,
    "protocol": "AMQP 0-9-1",
    "recv_cnt": 75,
    "recv_oct": 1015,
    "recv_oct_details": {
      "rate": 1.6
    },
    "reductions": 77010,
    "reductions_details": {
      "rate": 199.8
    },
    "send_cnt": 144,
    "send_oct": 1733,
    "send_oct_details": {
      "rate": 3.2
    },
    "send_pend": 0,
    "ssl": false,
    "ssl_cipher": null,
    "ssl_hash": null,
    "ssl_key_exchange": null,
    "ssl_protocol": null,
    "state": "running",
    "timeout": 5,
    "type": "network",
    "user": "project-nextjs-producer",
    "user_who_performed_action": "project-nextjs-producer",
    "vhost": "/"
  }
]

export const bindings = [
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
  },
  {
    "source": "dead-letter-exchange-queue-1",
    "vhost": "/",
    "destination": "queue-1-dead-letter",
    "destination_type": "queue",
    "routing_key": "",
    "arguments": {},
    "properties_key": "~"
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

export const exchanges = [
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "",
    "type": "direct",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/"
  },
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.direct",
    "type": "direct",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/"
  },
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.fanout",
    "type": "fanout",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/"
  },
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.headers",
    "type": "headers",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/"
  },
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.match",
    "type": "headers",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/"
  },
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": true,
    "name": "amq.rabbitmq.trace",
    "type": "topic",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/"
  },
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "amq.topic",
    "type": "topic",
    "user_who_performed_action": "rmq-internal",
    "vhost": "/"
  },
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "dead-letter-exchange-queue-1",
    "type": "direct",
    "user_who_performed_action": "guest",
    "vhost": "/"
  },
  {
    "arguments": {},
    "auto_delete": false,
    "durable": true,
    "internal": false,
    "name": "exchange-queue-1-topic",
    "type": "topic",
    "user_who_performed_action": "guest",
    "vhost": "/"
  }
]

