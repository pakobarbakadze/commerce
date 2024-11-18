import { Module } from '@nestjs/common';
import { GrpcClientsModule } from '../config/grpc-clients.module';
import { PaymentClientService } from './payment.client';
import { ProductClientService } from './product.client';

@Module({
  imports: [GrpcClientsModule],
  providers: [PaymentClientService, ProductClientService],
  exports: [PaymentClientService, ProductClientService],
})
export class ClientModule {}
