import { PaymentRequest } from '@app/shared/proto/payment';

export class ProcessPaymentRequestDto implements PaymentRequest {
  amount: number;
}
