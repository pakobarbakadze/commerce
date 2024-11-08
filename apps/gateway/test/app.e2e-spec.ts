import { Test, TestingModule } from '@nestjs/testing';
import { INestGatewaylication } from '@nestjs/common';
import * as request from 'supertest';
import { GatewayModule } from './../src/gateway.module';

describe('GatewayController (e2e)', () => {
  let gateway: INestGatewaylication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GatewayModule],
    }).compile();

    gateway = moduleFixture.createNestGatewaylication();
    await gateway.init();
  });

  it('/ (GET)', () => {
    return request(gateway.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
