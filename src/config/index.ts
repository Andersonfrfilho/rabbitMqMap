import { dev } from '@config/dev'
import { stg } from '@config/stg'
import { prod } from '@config/prod'
import { ENVIRONMENTS } from '@constants/environment.constant';

export const configs = {
  DEV: dev,
  STG: stg,
  PROD: prod
}
console.log(process.env.ENVIRONMENT)
const environment = process.env.ENVIRONMENT || ENVIRONMENTS.DEV

export const config: typeof dev & typeof stg & typeof prod = configs[environment]
