import { Test, TestingModule } from '@nestjs/testing';
import { UserHasPaymentOptionsController } from './user_has_payment_options.controller';
import { UserHasPaymentOptionsService } from './user_has_payment_options.service';

describe('UserHasPaymentOptionsController', () => {
  let controller: UserHasPaymentOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHasPaymentOptionsController],
      providers: [UserHasPaymentOptionsService],
    }).compile();

    controller = module.get<UserHasPaymentOptionsController>(UserHasPaymentOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
