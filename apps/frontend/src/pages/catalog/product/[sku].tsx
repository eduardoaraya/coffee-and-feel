import { ReactElement } from 'react';
import { LayoutEcommerce } from '@atlascode/coffee-front-components';
import {
  CatalogProductPage,
  CatalogProductPageProps as CatalogProductPageComponentProps,
} from '@atlascode/coffee-front-pages';
import type { Page } from '../../../../types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductCatalogPageProps
  extends CatalogProductPageComponentProps {}

export const CatalogProduct: Page<ProductCatalogPageProps> = (props) => {
  return <CatalogProductPage />;
};

export default CatalogProduct;

CatalogProduct.getLayout = function getLayout(page: ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};
