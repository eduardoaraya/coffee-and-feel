import { ReactElement } from 'react';
import { LayoutEcommerce } from '@atlascode/coffee-front-components';
import { CatalogProductPage } from '@atlascode/coffee-front-pages';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductCatalogPageProps {}

export function CatalogProduct(props: ProductCatalogPageProps): JSX.Element {
  return <CatalogProductPage />;
}

export default CatalogProduct;

CatalogProduct.getLayout = function getLayout(page: ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};
