import { Test, TestingModule } from '@nestjs/testing';
import { UserHasProductsController } from './user_has_products.controller';
import { UserHasProductsService } from './user_has_products.service';

describe('UserHasProductsController', () => {
  let controller: UserHasProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHasProductsController],
      providers: [UserHasProductsService],
    }).compile();

    controller = module.get<UserHasProductsController>(UserHasProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
