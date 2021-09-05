import { Test, TestingModule } from '@nestjs/testing';
import { DesignInfoResolver } from './design-info.resolver';

describe('DesignInfoResolver', () => {
  let resolver: DesignInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesignInfoResolver],
    }).compile();

    resolver = module.get<DesignInfoResolver>(DesignInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
