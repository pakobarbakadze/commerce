import { ProductResponse } from '@app/shared/proto/product';

export class CheckProductAvailabilityResponseDto implements ProductResponse {
  available: boolean;
}
