import { Module } from '@nestjs/common';
import { GrpcClientsModule } from './config/grpc-clients.module';
import { OrderController } from './controller/order.controller';

@Module({
  imports: [GrpcClientsModule],
  controllers: [OrderController],
  providers: [],
})
export class GatewayModule {}
