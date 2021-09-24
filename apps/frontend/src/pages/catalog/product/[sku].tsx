import { CatalogProductPage } from '@atlascode/coffee-front-pages';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductCatalogPageProps {}

export const CatalogProduct: React.FC<ProductCatalogPageProps> =
  (): JSX.Element => <CatalogProductPage />;

export default CatalogProduct;
