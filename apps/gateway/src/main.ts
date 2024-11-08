import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const gateway = await NestFactory.create(GatewayModule);
  await gateway.listen(process.env.PORT ?? 3000);
}
bootstrap();
