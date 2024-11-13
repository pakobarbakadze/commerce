import { ProductResponse } from '../../../../../libs/shared/src/proto/product';

export class CheckProductAvailabilityResponseDto implements ProductResponse {
  available: boolean;
}
