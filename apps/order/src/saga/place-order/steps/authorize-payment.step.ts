import { Inject } from '@nestjs/common';
import { PaymentClientService } from '../../../client/payment.client';
import { Order } from '../../../entities/order';
import { Step } from './step';

export class AuthorizePaymentStep extends Step<Order, void> {
  constructor(@Inject() private readonly paymentClient: PaymentClientService) {
    super();
    this.name = 'AuthorizePaymentStep';
  }

  async execute(order: Order): Promise<void> {
    console.log(`AuthorizePaymentStep: ${order.id}`);
    const paid = await this.paymentClient.processPayment(10);

    if (!paid) {
      throw new Error('Payment failed');
    }
  }

  async rollback(order: Order): Promise<void> {
    console.log(`AuthorizePaymentStep rollback: ${order.id}`);
  }
}
