import { Inject } from '@nestjs/common';
import { ProductClientService } from '../../../client/product.client';
import { Order } from '../../../entities/order';
import { Step } from './step';

export class CheckProductAvailabilityStep extends Step<Order, void> {
  constructor(@Inject() private readonly productClient: ProductClientService) {
    super();
    this.name = 'CheckProductAvailabilityStep';
  }

  async execute(order: Order): Promise<void> {
    console.log(`CheckProductAvailabilityStep: ${order.id}`);
    const isAvailable = await this.productClient.checkProductAvailability(
      order.id,
    );

    if (!isAvailable) {
      throw new Error('Product is not available');
    }
  }

  async rollback(order: Order): Promise<void> {
    console.log(`CheckProductAvailabilityStep rollback: ${order.id}`);
  }
}
