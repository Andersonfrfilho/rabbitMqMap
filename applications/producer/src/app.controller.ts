import { AmqpConnection } from '@golevelup/nestjs-rabbitmq/lib/amqp/connection';

import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

    private readonly amqpConnection: AmqpConnection,
  ) { }

  @Get()
  async getHello(): Promise<any> {
    this.amqpConnection.publish(
      'exchange-queue-1-topic',
      'routing-key-to-exchange-fila-1-topic',
      { hello: 'world' },
    );

    return {
      queue: 'queue-1',
      exchange: 'exchange-queue-1-topic',
      'route-key': 'routing-key-to-exchange-fila-1-topic',
    };
  }

  @Get('/queue/:id/topic')
  async sendMessageTopic(): Promise<any> {
    this.amqpConnection.publish(
      'exchange-queue-1-topic',
      'routing-key-exchange-queue-2',
      { hello: 'world' },
    );

    return {
      queue: 'queue-2',
      exchange: 'exchange-queue-1-topic',
      'route-key': 'routing-key-exchange-queue-2',
    };
  }
}
