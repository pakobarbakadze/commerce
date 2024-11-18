import { Order } from '../../../entities/order';
import { Step } from './step';

export class PlaceOrderStep extends Step<Order, void> {
  constructor() {
    super();
    this.name = 'PlaceOrderStepStep';
  }

  execute(order: Order): Promise<void> {
    console.log(`Save order: ${order.id}`);
    return Promise.resolve();
  }
  rollback(order: Order): Promise<void> {
    console.log(`Remove saved order: ${order.id}`);
    return Promise.resolve();
  }
}
