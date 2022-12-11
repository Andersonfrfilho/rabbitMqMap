enum activity_status {
  up = "up"
}

interface CHANNEL_DETAILS {
  connection_name: string;
  name: string;
  node: string;
  number: number;
  peer_host: string;
  peer_port: number;
  user: string;
}
interface QUEUE {
  name: string;
  vhost: string;
}
export interface Consumer {
  arguments: {};
  ack_required: boolean;
  active: true;
  activity_status: activity_status;
  channel_details: CHANNEL_DETAILS;
  consumer_tag: string;
  exclusive: boolean;
  prefetch_count: number;
  queue: QUEUE;
}