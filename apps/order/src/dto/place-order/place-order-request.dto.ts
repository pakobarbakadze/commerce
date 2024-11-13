import { OrderRequest } from '@app/shared/proto/order';

export class PlaceOrderRequestDto implements OrderRequest {
  orderId: string;
  productId: string;
  quantity: number;
}
