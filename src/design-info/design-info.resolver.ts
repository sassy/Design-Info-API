import { Resolver, Query, Args } from '@nestjs/graphql';
import { Site } from './site';

const siteTable: Site[] = [
    {
      id: '1',
      title: 'コリス',
      url: 'http://coliss.com/'
    },
    {
      id: '2',
      title: 'UX MILK',
      url: 'http://uxmilk.jp/'
    },
  ];

  
@Resolver('DesignInfo')
export class DesignInfoResolver {
    @Query(returns => [Site])
    async desiginInfo(): Promise<Site[]> {
        return siteTable;
    }
}
