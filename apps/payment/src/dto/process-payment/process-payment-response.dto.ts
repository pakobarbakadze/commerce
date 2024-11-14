import { PaymentResponse } from '@app/shared/proto/payment';

export class ProcessPaymentResponseDto implements PaymentResponse {
  success: boolean;
}
