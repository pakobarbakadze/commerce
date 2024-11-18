import { Inject, Injectable } from '@nestjs/common';
import { Order } from '../../entities/order';
import { AuthorizePaymentStep } from './steps/authorize-payment.step';
import { CheckProductAvailabilityStep } from './steps/check-product-availability.step';
import { ConfirmOrderStep } from './steps/confirm-order.step';
import { PlaceOrderStep } from './steps/place-order.step';
import { Step } from './steps/step';
import { UpdateStockStep } from './steps/update-stock.step';

@Injectable()
export class PlaceOrderSaga {
  private steps: Step<Order, void>[] = [];
  private successfulSteps: Step<Order, void>[] = [];

  constructor(
    @Inject() step1: PlaceOrderStep,
    @Inject() step2: CheckProductAvailabilityStep,
    @Inject() step3: AuthorizePaymentStep,
    @Inject() step4: ConfirmOrderStep,
    @Inject() step5: UpdateStockStep,
  ) {
    this.steps = [step1, step2, step3, step4, step5];
  }

  async execute(order: Order): Promise<void> {
    for (const step of this.steps) {
      try {
        await step.execute(order);
        this.successfulSteps.push(step);
      } catch (error) {
        this.successfulSteps.forEach(async (successfulStep) => {
          await successfulStep.rollback(order);
        });
        throw error;
      }
    }
  }
}
