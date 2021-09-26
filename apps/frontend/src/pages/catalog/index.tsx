import { GetStaticProps } from 'next';
import { CatalogPage } from '@atlascode/coffee-front-pages';
import { ProductInterface } from '@atlascode/coffee-front-components';
import ServiceProvider from '@atlascode/coffee-frontend-services';

export interface CatalogProps {
  products?: ProductInterface[];
}

export const Catalog: React.FC<CatalogProps> = ({ products }): JSX.Element => (
  <CatalogPage products={products} />
);

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
      products: result,
    },
  };
};
