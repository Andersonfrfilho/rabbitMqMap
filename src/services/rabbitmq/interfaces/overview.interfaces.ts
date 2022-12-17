export interface SampleRetentionPolicies {
  global: number[];
  basic: number[];
  detailed: number[];
}

export interface ExchangeType {
  name: string;
  description: string;
  enabled: boolean;
}

export interface AckDetails {
  rate: number;
}

export interface ConfirmDetails {
  rate: number;
}

export interface DeliverDetails {
  rate: number;
}

export interface DeliverGetDetails {
  rate: number;
}

export interface DeliverNoAckDetails {
  rate: number;
}

export interface DiskReadsDetails {
  rate: number;
}

export interface DiskWritesDetails {
  rate: number;
}

export interface DropUnroutableDetails {
  rate: number;
}

export interface GetDetails {
  rate: number;
}

export interface GetEmptyDetails {
  rate: number;
}

export interface GetNoAckDetails {
  rate: number;
}

export interface PublishDetails {
  rate: number;
}

export interface RedeliverDetails {
  rate: number;
}

export interface ReturnUnroutableDetails {
  rate: number;
}

export interface MessageStats {
  ack: number;
  ack_details: AckDetails;
  confirm: number;
  confirm_details: ConfirmDetails;
  deliver: number;
  deliver_details: DeliverDetails;
  deliver_get: number;
  deliver_get_details: DeliverGetDetails;
  deliver_no_ack: number;
  deliver_no_ack_details: DeliverNoAckDetails;
  disk_reads: number;
  disk_reads_details: DiskReadsDetails;
  disk_writes: number;
  disk_writes_details: DiskWritesDetails;
  drop_unroutable: number;
  drop_unroutable_details: DropUnroutableDetails;
  get: number;
  get_details: GetDetails;
  get_empty: number;
  get_empty_details: GetEmptyDetails;
  get_no_ack: number;
  get_no_ack_details: GetNoAckDetails;
  publish: number;
  publish_details: PublishDetails;
  redeliver: number;
  redeliver_details: RedeliverDetails;
  return_unroutable: number;
  return_unroutable_details: ReturnUnroutableDetails;
}

export interface ChannelClosedDetails {
  rate: number;
}

export interface ChannelCreatedDetails {
  rate: number;
}

export interface ConnectionClosedDetails {
  rate: number;
}

export interface ConnectionCreatedDetails {
  rate: number;
}

export interface QueueCreatedDetails {
  rate: number;
}

export interface QueueDeclaredDetails {
  rate: number;
}

export interface QueueDeletedDetails {
  rate: number;
}

export interface ChurnRates {
  channel_closed: number;
  channel_closed_details: ChannelClosedDetails;
  channel_created: number;
  channel_created_details: ChannelCreatedDetails;
  connection_closed: number;
  connection_closed_details: ConnectionClosedDetails;
  connection_created: number;
  connection_created_details: ConnectionCreatedDetails;
  queue_created: number;
  queue_created_details: QueueCreatedDetails;
  queue_declared: number;
  queue_declared_details: QueueDeclaredDetails;
  queue_deleted: number;
  queue_deleted_details: QueueDeletedDetails;
}

export interface MessagesDetails {
  rate: number;
}

export interface MessagesReadyDetails {
  rate: number;
}

export interface MessagesUnacknowledgedDetails {
  rate: number;
}

export interface QueueTotals {
  messages: number;
  messages_details: MessagesDetails;
  messages_ready: number;
  messages_ready_details: MessagesReadyDetails;
  messages_unacknowledged: number;
  messages_unacknowledged_details: MessagesUnacknowledgedDetails;
}

export interface ObjectTotals {
  channels: number;
  connections: number;
  consumers: number;
  exchanges: number;
  queues: number;
}

export interface Listener {
  node: string;
  protocol: string;
  ip_address: string;
  port: number;
  socket_opts: any;
}

export interface Context {
  ssl_opts: any[];
  node: string;
  description: string;
  path: string;
  cowboy_opts: string;
  port: string;
  protocol: string;
}

export interface Overview {
  management_version: string;
  rates_mode: string;
  sample_retention_policies: SampleRetentionPolicies;
  exchange_types: ExchangeType[];
  product_version: string;
  product_name: string;
  rabbitmq_version: string;
  cluster_name: string;
  erlang_version: string;
  erlang_full_version: string;
  release_series_support_status: string;
  disable_stats: boolean;
  enable_queue_totals: boolean;
  message_stats: MessageStats;
  churn_rates: ChurnRates;
  queue_totals: QueueTotals;
  object_totals: ObjectTotals;
  statistics_db_event_queue: number;
  node: string;
  listeners: Listener[];
  contexts: Context[];
}


