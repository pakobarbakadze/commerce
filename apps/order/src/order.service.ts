import { Inject, Injectable } from '@nestjs/common';
import { PlaceOrderRequestDto, PlaceOrderResponseDto } from './dto/place-order';
import { Order } from './entities/order';
import { PlaceOrderSaga } from './saga/place-order/place-order.saga';

@Injectable()
export class OrderService {
  constructor(@Inject() private readonly placeOrderSaga: PlaceOrderSaga) {}

  public async placeOrder(
    placeOrder: PlaceOrderRequestDto,
  ): Promise<PlaceOrderResponseDto> {
    const order = new Order();

    await this.placeOrderSaga.execute(order);

    const response: PlaceOrderResponseDto = {
      orderId: placeOrder.orderId,
      productId: placeOrder.productId,
      quantity: placeOrder.quantity,
      status: 'placed',
    };

    return response;
  }
}
