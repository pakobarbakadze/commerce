import {
  ORDER_SERVICE_NAME,
  OrderRequest,
  OrderServiceClient,
} from '@app/shared/proto/order';
import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Controller('order')
export class OrderController implements OnModuleInit {
  private orderService: OrderServiceClient;

  constructor(
    @Inject(ORDER_SERVICE_NAME) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.orderService =
      this.client.getService<OrderServiceClient>(ORDER_SERVICE_NAME);
  }

  @Post()
  async createOrder(@Body() placeOrderDto: OrderRequest) {
    return this.orderService.placeOrder(placeOrderDto);
  }
}
