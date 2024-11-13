import { Injectable } from '@nestjs/common';
import { ProductClientService } from './client/product.client';
import { PlaceOrderRequestDto, PlaceOrderResponseDto } from './dto/place-order';

@Injectable()
export class OrderService {
  constructor(private readonly productClientService: ProductClientService) {}

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

    const order: PlaceOrderResponseDto = {
      orderId: placeOrder.orderId,
      productId: placeOrder.productId,
      quantity: placeOrder.quantity,
      status: 'placed',
    };

    return order;
  }
}
