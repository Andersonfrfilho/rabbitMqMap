import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq/lib/rabbitmq.decorators';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    queue: 'queue-1',
  })
  public async competingPubSubHandler(msg: any) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
