import {
  ORDER_PACKAGE_NAME,
  ORDER_SERVICE_NAME,
} from '@app/shared/proto/order';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'order:50051',
          package: ORDER_PACKAGE_NAME,
          protoPath: join(__dirname, '../order.proto'),
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcClientsModule {}
