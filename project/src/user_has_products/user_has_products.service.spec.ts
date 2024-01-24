import { Test, TestingModule } from '@nestjs/testing';
import { UserHasProductsService } from './user_has_products.service';

describe('UserHasProductsService', () => {
  let service: UserHasProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasProductsService],
    }).compile();

    service = module.get<UserHasProductsService>(UserHasProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
