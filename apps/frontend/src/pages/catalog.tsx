import { GetStaticProps } from 'next';
import { CatalogPage } from '@atlascode/coffee-front-pages';
import { ProductInterface } from '@atlascode/coffee-front-components';
import Services from '@atlascode/coffee-frontend-services';

export interface CatalogProps {
  products?: ProductInterface[];
}

export const Catalog: React.FC<CatalogProps> = ({ products }): JSX.Element => (
  <CatalogPage products={products} />
);

export default Catalog;

const service = Services.CatalogService.default();
export const getStaticProps: GetStaticProps<CatalogProps> = async () => {
  const result = await service.getCatalogProduct();
  return {
    props: {
      products: result.data,
    },
  };
};
