import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import {
  ORDER_PACKAGE_NAME,
  ORDER_SERVICE_NAME,
} from '../../../libs/shared/src/proto/order';
import { OrderController } from './controller/order.controller';

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
  controllers: [OrderController],
  providers: [],
})
export class GatewayModule {}
