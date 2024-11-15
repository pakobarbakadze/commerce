import { Module } from '@nestjs/common';
import { PaymentClientService } from './client/payment.client';
import { ProductClientService } from './client/product.client';
import { GrpcClientsModule } from './config/grpc-clients.module';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [GrpcClientsModule],
  controllers: [OrderController],
  providers: [OrderService, ProductClientService, PaymentClientService],
})
export class OrderModule {}
