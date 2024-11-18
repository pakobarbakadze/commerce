import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PlaceOrderSagaModule } from './saga/place-order/place-order-saga.module';

@Module({
  imports: [PlaceOrderSagaModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
