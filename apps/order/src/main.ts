import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ORDER_PACKAGE_NAME } from '../../../libs/shared/src/proto/order';
import { OrderModule } from './order.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ORDER_PACKAGE_NAME,
        protoPath: join(__dirname, '../order.proto'),
        url: '0.0.0.0:50051',
      },
    },
  );
  await app.listen();
}
bootstrap();
