import { GetStaticProps } from 'next';
import { CatalogPage, CatalogPageProps } from '@atlascode/coffee-front-pages';
import {
  BannerProps,
  LayoutEcommerce,
  ProductInterface,
} from '@atlascode/coffee-front-components';
import ServiceProvider from '@atlascode/coffee-frontend-services';
import React, { ReactElement } from 'react';
import type { Page } from '../../../types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogProps extends CatalogPageProps {}

export const Catalog: Page<CatalogProps> = ({
  products,
  BannerProps = { items: BannerList },
}) => {
  return <CatalogPage products={products} BannerProps={BannerProps} />;
};

export default Catalog;

const service = ServiceProvider.CatalogService.default();
export const getStaticProps: GetStaticProps<CatalogProps> = async () => {
  let result: ProductInterface[] = [];
  try {
    result = await service.getCatalogProduct();
  } catch (error) {
    console.error(error.message);
  }
  return {
    props: {
      products: [],
    },
  };
};

Catalog.getLayout = function getLayout(page: ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};

const BannerList: BannerProps['items'] = [
  {
    desktopURL:
      'https://http2.mlstatic.com/D_NQ_755507-MLA47264929743_082021-OO.webp',
    mobileURL: 'https://miro.medium.com/max/1280/0*lKSW0AQyeqr6MeGt.jpg',
  },

  {
    desktopURL:
      'https://http2.mlstatic.com/D_NQ_894709-MLA47263975191_082021-OO.webp',
    mobileURL:
      'https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg',
  },
];
