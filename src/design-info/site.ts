import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Site {
    @Field(type => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    url: string;
}
