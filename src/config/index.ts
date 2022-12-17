import { dev } from '@config/dev'
interface config {
  rabbitMq: {
    baseUrl: string;
    username: string;
    password: string;
    vhost: string;
  }
}
const configs = {
  DEV: dev
}

export const config: typeof dev = configs[process.env.ENVIRONMENT] as config
