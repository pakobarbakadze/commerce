import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import {
  PRODUCT_PACKAGE_NAME,
  PRODUCT_SERVICE_NAME,
} from '../../../libs/shared/src/proto/product';
import { ProductClientService } from './client/product.client';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

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
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService, ProductClientService],
})
export class OrderModule {}
