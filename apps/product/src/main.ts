import { PRODUCT_PACKAGE_NAME } from '@app/shared/proto/product';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductModule } from './product.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductModule,
    {
      transport: Transport.GRPC,
      options: {
        package: PRODUCT_PACKAGE_NAME,
        protoPath: join(__dirname, '../product.proto'),
        url: '0.0.0.0:50052',
      },
    },
  );

  await app.listen();
}
bootstrap();
