import { GetStaticProps } from 'next';
import { CatalogPage } from '@atlascode/coffee-front-pages';
import {
  LayoutEcommerce,
  ProductInterface,
} from '@atlascode/coffee-front-components';
import ServiceProvider from '@atlascode/coffee-frontend-services';
import React, { ReactElement } from 'react';

export interface CatalogProps {
  products?: ProductInterface[];
}

export function Catalog({ products }: CatalogProps): JSX.Element {
  return <CatalogPage products={products} />;
}

export default Catalog;

const service = ServiceProvider.CatalogService.default();
export const getStaticProps: GetStaticProps<CatalogProps> = async () => {
  let result: ProductInterface[] = [];
  try {
    result = await service.getCatalogProduct();
    // eslint-disable-next-line no-empty
  } catch {}
  return {
    props: {
      products: [],
    },
  };
};

Catalog.getLayout = function getLayout(page: ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};
