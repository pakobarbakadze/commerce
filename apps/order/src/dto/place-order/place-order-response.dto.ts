import { OrderResponse } from '../../../../../libs/shared/src/proto/order';

export class PlaceOrderResponseDto implements OrderResponse {
  orderId: string;
  productId: string;
  quantity: number;
  status: string;
}
