import { Position } from "@constants/position.constant"
import { Binding } from "./binding.interface"
import { Consumer } from "./consumer.interface"
import { ComponentWithPosition } from "@contexts/position/functions/definePositionsComponents"

type ArgumentsQueue = {
  "x-queue-type": string
}

enum Mode {
  default = "default"
}

enum TargetRamCount {
  infinity = "infinity"
}

type BackingQueueStatus = {
  avg_ack_egress_rate: number,
  avg_ack_ingress_rate: number,
  avg_egress_rate: number,
  avg_ingress_rate: number,
  delta: [
    "delta",
    "undefined",
    0,
    0,
    "undefined"
  ],
  len: number,
  mode: Mode,
  next_deliver_seq_id: number,
  next_seq_id: number,
  num_pending_acks: number,
  num_unconfirmed: number,
  q1: number,
  q2: number,
  q3: number,
  q4: number,
  target_ram_count: TargetRamCount,
  version: number
}
type GarbageCollection = {
  fullsweep_after: number,
  max_heap_size: number,
  min_bin_vheap_size: number,
  min_heap_size: number,
  minor_gcs: number
}
type MessagesDetails = {
  rate: number
}
type MessagesReadyDetails = {
  rate: number
}
type MessagesUnacknowledgedDetails = {
  rate: number
}
type ReductionsDetails = {
  rate: number
}
export type Queue = {
  arguments: ArgumentsQueue,
  auto_delete: boolean,
  backing_queue_status: BackingQueueStatus,
  consumer_capacity: number,
  consumer_utilisation: number,
  consumers: number,
  durable: boolean,
  effective_policy_definition: {},
  exclusive: boolean,
  exclusive_consumer_tag: null,
  garbage_collection: GarbageCollection,
  head_message_timestamp: null,
  idle_since: string,
  memory: number,
  message_bytes: number,
  message_bytes_paged_out: number,
  message_bytes_persistent: number,
  message_bytes_ram: number,
  message_bytes_ready: number,
  message_bytes_unacknowledged: number,
  messages: number,
  messages_details: MessagesDetails,
  messages_paged_out: number,
  messages_persistent: number,
  messages_ram: number,
  messages_ready: number,
  messages_ready_details: MessagesReadyDetails,
  messages_ready_ram: number,
  messages_unacknowledged: number,
  messages_unacknowledged_details: MessagesUnacknowledgedDetails,
  messages_unacknowledged_ram: number,
  name: string,
  node: string,
  operator_policy: null,
  policy: null,
  recoverable_slaves: null,
  reductions: number,
  reductions_details: ReductionsDetails,
  single_active_consumer_tag: null,
  state: string,
  type: string,
  vhost: string
}

export interface BindingWithPosition extends Binding {
  position: ComponentWithPosition;
}

export interface ConsumerWithPosition extends Consumer {
  position: ComponentWithPosition;
}

export interface QueueBindingConsumers extends Queue {
  bindings: Binding[];
  consumers_register: Consumer[];
}