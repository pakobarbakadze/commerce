import {
  PaymentRequest,
  PaymentResponse,
  PaymentServiceController,
  PaymentServiceControllerMethods,
} from '@app/shared/proto/payment';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PaymentService } from './payment.service';

@Controller()
@PaymentServiceControllerMethods()
export class PaymentController implements PaymentServiceController {
  constructor(private readonly paymentService: PaymentService) {}

  processPayment(
    request: PaymentRequest,
  ): Promise<PaymentResponse> | Observable<PaymentResponse> | PaymentResponse {
    return this.paymentService.processPayment(request);
  }
}
