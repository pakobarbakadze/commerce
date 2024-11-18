import { Inject } from '@nestjs/common';
import { ProductClientService } from '../../../client/product.client';
import { Order } from '../../../entities/order';
import { Step } from './step';

export class UpdateStockStep extends Step<Order, void> {
  constructor(@Inject() private readonly productClient: ProductClientService) {
    super();
    this.name = 'UpdateStockStep';
  }

  async execute(order: Order): Promise<void> {
    console.log(`UpdateStockStep: ${order.id}`);
  }

  async rollback(order: Order): Promise<void> {
    console.log(`UpdateStockStep rollback: ${order.id}`);
  }
}
