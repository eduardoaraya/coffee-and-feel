import { ReactElement } from 'react';
import {
  LayoutEcommerce,
  ProductInterface,
} from '@atlascode/coffee-front-components';
import { CatalogProductPage } from '@atlascode/coffee-front-pages';
import ServiceProvider from '@atlascode/coffee-frontend-services';
import { GetStaticPaths, GetStaticProps } from 'next';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogProductPageProps {
  product?: ProductInterface;
}

export function CatalogProduct(props: CatalogProductPageProps): JSX.Element {
  return <CatalogProductPage product={props.product} />;
}

export default CatalogProduct;

CatalogProduct.getLayout = function getLayout(page: ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};

const service = ServiceProvider.CatalogService.default();

export const getStaticPaths: GetStaticPaths<{
  sku: string;
}> = async () => {
  let result: ProductInterface[] = [];
  try {
    result = await service.getCatalogProduct();
    // eslint-disable-next-line no-empty
  } catch (err) {}
  return {
    paths: result.map(({ sku }) => ({ params: { sku } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CatalogProductPageProps> = async ({
  params,
}) => {
  const { sku } = params;
  let result: ProductInterface;

  try {
    result = await service.getProductBySku(sku.toString());
    // eslint-disable-next-line no-empty
  } catch (err) {}
  return {
    props: {
      product: result,
    },
  };
};
