import { OrderRequest } from '../../../../../libs/shared/src/proto/order';

export class PlaceOrderRequestDto implements OrderRequest {
  orderId: string;
  productId: string;
  quantity: number;
}
