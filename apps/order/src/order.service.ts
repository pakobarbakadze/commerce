import { Injectable } from '@nestjs/common';
import { PaymentClientService } from './client/payment.client';
import { ProductClientService } from './client/product.client';
import { PlaceOrderRequestDto, PlaceOrderResponseDto } from './dto/place-order';

@Injectable()
export class OrderService {
  constructor(
    private readonly productClientService: ProductClientService,
    private readonly paymentClientService: PaymentClientService,
  ) {}

  public async placeOrder(
    placeOrder: PlaceOrderRequestDto,
  ): Promise<PlaceOrderResponseDto> {
    const isProductAvailable =
      await this.productClientService.checkProductAvailability(
        placeOrder.productId,
      );

    if (!isProductAvailable) {
      throw new Error('Product is not available');
    }

    const payment = await this.paymentClientService.processPayment(100);

    if (!payment) {
      throw new Error('Payment failed');
    }

    const order: PlaceOrderResponseDto = {
      orderId: placeOrder.orderId,
      productId: placeOrder.productId,
      quantity: placeOrder.quantity,
      status: 'placed',
    };

    return order;
  }
}
