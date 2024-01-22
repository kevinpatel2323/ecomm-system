import { Test, TestingModule } from '@nestjs/testing';
import { UserHasAddressController } from './user-has-address.controller';
import { UserHasAddressService } from './user-has-address.service';

describe('UserHasAddressController', () => {
  let controller: UserHasAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHasAddressController],
      providers: [UserHasAddressService],
    }).compile();

    controller = module.get<UserHasAddressController>(UserHasAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
