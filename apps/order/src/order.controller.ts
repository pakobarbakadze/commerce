import {
  OrderRequest,
  OrderResponse,
  OrderServiceController,
  OrderServiceControllerMethods,
} from '@app/shared/proto/order';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { OrderService } from './order.service';

@Controller()
@OrderServiceControllerMethods()
export class OrderController implements OrderServiceController {
  constructor(private readonly orderService: OrderService) {}

  placeOrder(
    request: OrderRequest,
  ): Promise<OrderResponse> | Observable<OrderResponse> | OrderResponse {
    return this.orderService.placeOrder(request);
  }
}
