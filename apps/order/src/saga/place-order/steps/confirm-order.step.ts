import { Order } from '../../../entities/order';
import { Step } from './step';

export class ConfirmOrderStep extends Step<Order, void> {
  constructor() {
    super();
    this.name = 'ConfirmOrderStep';
  }

  execute(order: Order): Promise<void> {
    console.log(`ConfirmOrderStep: ${order.id}`);
    return Promise.resolve();
  }

  rollback(order: Order): Promise<void> {
    console.log(`ConfirmOrderStep rollback: ${order.id}`);
    return Promise.resolve();
  }
}
