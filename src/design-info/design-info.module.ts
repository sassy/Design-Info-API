import { Module } from '@nestjs/common';
import { DesignInfoResolver } from './design-info.resolver';

@Module({
  providers: [DesignInfoResolver]
})
export class DesignInfoModule {}
