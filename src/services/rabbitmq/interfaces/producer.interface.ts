enum AUTH_MECHANISM {
  PLAIN = "PLAIN"
}

interface Capabilities {
  authentication_failure_close: boolean;
  "basic.nack": boolean;
  "connection.blocked": boolean;
  consumer_cancel_notify: boolean;
  exchange_exchange_bindings: boolean;
  publisher_confirms: boolean;
}
export interface ClientProperties {
  capabilities: Capabilities;
  information: string;
  platform: string;
  product: string;
  version: string
}
interface GarbageCollection {
  fullsweep_after: number;
  max_heap_size: number;
  min_bin_vheap_size: number;
  min_heap_size: number;
  minor_gcs: number;
}
interface Rate {
  rate: number;
}

interface RecvOctDetails extends Rate { }

interface ReductionsDetails extends Rate { }

interface SendOctDetails extends Rate { }
export interface Connection {
  auth_mechanism: AUTH_MECHANISM;
  channel_max: number;
  channels: number;
  client_properties: ClientProperties;
  connected_at: number;
  frame_max: number;
  garbage_collection: GarbageCollection;
  host: string;
  name: string;
  node: string;
  peer_cert_issuer: null;
  peer_cert_subject: null;
  peer_cert_validity: null;
  peer_host: string;
  peer_port: number;
  port: number;
  protocol: string;
  recv_cnt: number;
  recv_oct: number;
  recv_oct_details: RecvOctDetails;
  reductions: number;
  reductions_details: ReductionsDetails;
  send_cnt: number;
  send_oct: number;
  send_oct_details: SendOctDetails;
  send_pend: number;
  ssl: boolean;
  ssl_cipher: null;
  ssl_hash: null;
  ssl_key_exchange: null;
  ssl_protocol: null;
  state: string;
  timeout: number;
  type: string;
  user: string;
  user_who_performed_action: string;
  vhost: string;
}
export interface Producer { }