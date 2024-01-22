import { Test, TestingModule } from '@nestjs/testing';
import { UserHasAddressService } from './user-has-address.service';

describe('UserHasAddressService', () => {
  let service: UserHasAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasAddressService],
    }).compile();

    service = module.get<UserHasAddressService>(UserHasAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
