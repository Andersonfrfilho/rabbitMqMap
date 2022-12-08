import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: 'amqp://project-nextjs-consumer:guest@localhost:5672',
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [AppService],
})
export class AppModule { }
