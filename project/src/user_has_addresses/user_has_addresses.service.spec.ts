import { Test, TestingModule } from '@nestjs/testing';
import { UserHasAddressesService } from './user_has_addresses.service';

describe('UserHasAddressesService', () => {
  let service: UserHasAddressesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasAddressesService],
    }).compile();

    service = module.get<UserHasAddressesService>(UserHasAddressesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
