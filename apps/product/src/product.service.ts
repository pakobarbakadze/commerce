import { Injectable } from '@nestjs/common';
import {
  CheckProductAvailabilityRequestDto,
  CheckProductAvailabilityResponseDto,
} from './dto/check-product-availability';

@Injectable()
export class ProductService {
  public async checkProductAvailability(
    checkProductAvailability: CheckProductAvailabilityRequestDto,
  ): Promise<CheckProductAvailabilityResponseDto> {
    console.log(
      `Checking product availability for product ID: ${checkProductAvailability.productId}`,
    );

    return { available: true };
  }
}
