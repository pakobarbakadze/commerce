import {
  ProductRequest,
  ProductResponse,
  ProductServiceController,
  ProductServiceControllerMethods,
} from '@app/shared/proto/product';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Controller()
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  constructor(private readonly productService: ProductService) {}

  checkProductAvailability(
    request: ProductRequest,
  ): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
    return this.productService.checkProductAvailability(request);
  }
}
