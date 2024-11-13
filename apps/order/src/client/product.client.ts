import {
  PRODUCT_SERVICE_NAME,
  ProductServiceClient,
} from '@app/shared/proto/product';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductClientService implements OnModuleInit {
  private ProductService: ProductServiceClient;

  constructor(
    @Inject(PRODUCT_SERVICE_NAME) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.ProductService =
      this.client.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME);
  }

  public async checkProductAvailability(productId: string): Promise<boolean> {
    const response = await firstValueFrom(
      this.ProductService.checkProductAvailability({ productId }),
    );
    return response.available;
  }
}
