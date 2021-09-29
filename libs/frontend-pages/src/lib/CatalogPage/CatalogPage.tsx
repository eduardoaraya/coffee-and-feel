import {
  Banner,
  BannerProps,
  CatalogFilter,
  CatalogGrid,
  ProductInfo,
  ProductInterface,
} from '@atlascode/coffee-front-components';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { SubscriptionClubAboutSection } from '@atlascode/coffee-front-sections';
import { Box, Container } from '@material-ui/core';
import { style } from './styles';

export interface CatalogPageProps {
  products?: ProductInterface[];
  BannerProps?: BannerProps;
}

export const CatalogPage = ({ products, BannerProps }: CatalogPageProps) => {
  return (
    <Box sx={style.root} className="page catalog-page">
      <Banner {...BannerProps}></Banner>
      <Container>
        <Box className="page-catalog-grid">
          <CatalogFilter className="catalog-filter"></CatalogFilter>
          <CatalogGrid products={products} className="catalog-representation" />
        </Box>
      </Container>
      <SubscriptionClubAboutSection />
    </Box>
  );
};

export default CatalogPage;
