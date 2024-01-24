import { Test, TestingModule } from '@nestjs/testing';
import { UserHasAddressesController } from './user_has_addresses.controller';
import { UserHasAddressesService } from './user_has_addresses.service';

describe('UserHasAddressesController', () => {
  let controller: UserHasAddressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHasAddressesController],
      providers: [UserHasAddressesService],
    }).compile();

    controller = module.get<UserHasAddressesController>(UserHasAddressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
