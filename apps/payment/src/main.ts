import { PAYMENT_PACKAGE_NAME } from '@app/shared/proto/payment';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PaymentModule } from './payment.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PaymentModule,
    {
      transport: Transport.GRPC,
      options: {
        package: PAYMENT_PACKAGE_NAME,
        protoPath: join(__dirname, '../payment.proto'),
        url: '0.0.0.0:50053',
      },
    },
  );

  await app.listen();
}
bootstrap();
