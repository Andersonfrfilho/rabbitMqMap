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
  async getHello(): Promise<string> {
    this.amqpConnection.publish(
      'exchange-fila-1-direct',
      'routing-key-to-exchange-fila-1-topic',
      { hello: 'world' },
    );
    return this.appService.getHello();
  }

  @Get('/queue/:id/topic')
  async sendMessageTopic(): Promise<any> {
    this.amqpConnection.publish(
      'exchange-fila-1-topic',
      'routing-key-to-exchange-fila-1-topic',
      { hello: 'world' },
    );
    return {
      queue: 'true',
    };
  }
}
