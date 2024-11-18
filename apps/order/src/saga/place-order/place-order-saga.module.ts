import { Module } from '@nestjs/common';
import { ClientModule } from '../../client/client.module';
import { PlaceOrderSaga } from './place-order.saga';
import { AuthorizePaymentStep } from './steps/authorize-payment.step';
import { CheckProductAvailabilityStep } from './steps/check-product-availability.step';
import { ConfirmOrderStep } from './steps/confirm-order.step';
import { PlaceOrderStep } from './steps/place-order.step';
import { UpdateStockStep } from './steps/update-stock.step';

@Module({
  imports: [ClientModule],
  providers: [
    PlaceOrderStep,
    CheckProductAvailabilityStep,
    AuthorizePaymentStep,
    ConfirmOrderStep,
    UpdateStockStep,
    PlaceOrderSaga,
  ],
  exports: [PlaceOrderSaga],
})
export class PlaceOrderSagaModule {}
