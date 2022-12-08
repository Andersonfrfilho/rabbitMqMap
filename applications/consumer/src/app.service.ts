import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq/lib/rabbitmq.decorators';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    exchange: 'exchange-fila-1-topic',
    routingKey: 'routing-key-to-exchange-fila-1-topic',
    queue: 'fila-1',
  })
  public async competingPubSubHandler(msg: any) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
