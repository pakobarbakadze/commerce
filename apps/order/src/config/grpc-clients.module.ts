import {
  PAYMENT_PACKAGE_NAME,
  PAYMENT_SERVICE_NAME,
} from '@app/shared/proto/payment';
import {
  PRODUCT_PACKAGE_NAME,
  PRODUCT_SERVICE_NAME,
} from '@app/shared/proto/product';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'product:50052',
          package: PRODUCT_PACKAGE_NAME,
          protoPath: join(__dirname, '../product.proto'),
        },
      },
      {
        name: PAYMENT_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'payment:50053',
          package: PAYMENT_PACKAGE_NAME,
          protoPath: join(__dirname, '../payment.proto'),
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcClientsModule {}
