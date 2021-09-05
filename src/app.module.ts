import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { DesignInfoModule } from './design-info/design-info.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql'
    }),
    DesignInfoModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
