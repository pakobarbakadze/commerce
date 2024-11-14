import {
  PAYMENT_SERVICE_NAME,
  PaymentServiceClient,
} from '@app/shared/proto/payment';
import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

export class PaymentClientService implements OnModuleInit {
  private PaymentService: PaymentServiceClient;

  constructor(
    @Inject(PAYMENT_SERVICE_NAME) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.PaymentService =
      this.client.getService<PaymentServiceClient>(PAYMENT_SERVICE_NAME);
  }

  public async processPayment(amount: number): Promise<boolean> {
    const response = await firstValueFrom(
      this.PaymentService.processPayment({ amount }),
    );
    return response.success;
  }
}
