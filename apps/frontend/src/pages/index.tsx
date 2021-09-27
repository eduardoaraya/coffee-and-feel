import React, { ReactElement } from 'react';
import { HomePage } from '@atlascode/coffee-front-pages';
import { LayoutEcommerce } from '@atlascode/coffee-front-components';

export function Index<NextPage>(): JSX.Element {
  return <HomePage />;
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};
