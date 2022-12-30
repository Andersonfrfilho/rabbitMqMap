import { Binding } from "./binding.interface"

export enum Type {
  direct = "direct",
  fanout = "fanout",
  headers = "headers",
  topic = "topic"
}
export type Exchange = {
  arguments: {},
  auto_delete: boolean,
  durable: boolean,
  internal: boolean,
  name: string,
  type: Type,
  user_who_performed_action: string,
  vhost: string,
  bindings?: Binding[]
}