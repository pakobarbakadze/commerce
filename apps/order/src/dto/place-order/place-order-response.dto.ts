import { OrderResponse } from '@app/shared/proto/order';

export class PlaceOrderResponseDto implements OrderResponse {
  orderId: string;
  productId: string;
  quantity: number;
  status: string;
}
