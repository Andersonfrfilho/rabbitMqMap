import { dev } from '@config/dev'

const configs = {
  DEV: dev
}

export const config: typeof dev = configs[process.env.ENVIRONMENT]
