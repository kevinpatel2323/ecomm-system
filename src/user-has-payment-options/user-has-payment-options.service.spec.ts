import { Test, TestingModule } from '@nestjs/testing';
import { UserHasPaymentOptionsService } from './user-has-payment-options.service';

describe('UserHasPaymentOptionsService', () => {
  let service: UserHasPaymentOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasPaymentOptionsService],
    }).compile();

    service = module.get<UserHasPaymentOptionsService>(
      UserHasPaymentOptionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
