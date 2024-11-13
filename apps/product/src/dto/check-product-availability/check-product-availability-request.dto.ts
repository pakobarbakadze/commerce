import { ProductRequest } from '../../../../../libs/shared/src/proto/product';

export class CheckProductAvailabilityRequestDto implements ProductRequest {
  productId: string;
}
