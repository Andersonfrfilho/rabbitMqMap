import { PropertyLines } from "@contexts/interfaces/lines.interface";
import { PropertyPosition } from "@contexts/interfaces/positions.interface";

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

export interface PropertyConsumersRegister {
  consumers_register: Consumer[]
}

export interface ConsumerPosition extends Consumer, PropertyPosition { }

export interface ConsumerPositionLines extends ConsumerPosition, PropertyLines { }
