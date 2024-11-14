import { Injectable } from '@nestjs/common';
import {
  ProcessPaymentRequestDto,
  ProcessPaymentResponseDto,
} from './dto/process-payment';

@Injectable()
export class PaymentService {
  public processPayment(
    payment: ProcessPaymentRequestDto,
  ): Promise<ProcessPaymentResponseDto> {
    if (payment.amount < 0) {
      return Promise.resolve({
        success: false,
      });
    }

    return Promise.resolve({
      success: true,
    });
  }
}
