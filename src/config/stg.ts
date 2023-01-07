export const stg = {
  rabbitMq: {
    baseUrl: process.env.RABBITMQ_BASE_URL || 'http://localhost:15672',
    username: process.env.RABBITMQ_USERNAME || 'guest',
    password: process.env.RABBITMQ_PASSWORD || 'guest',
    vhost: process.env.RABBITMQ_VHOST || '/'
  }
}