import { ProductRequest } from '@app/shared/proto/product';

export class CheckProductAvailabilityRequestDto implements ProductRequest {
  productId: string;
}
