import {
  Banner,
  CatalogFilter,
  CatalogRepresentation,
  ProductInterface,
} from '@atlascode/coffee-front-components';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { SubscriptionClubAboutSection } from '@atlascode/coffee-front-sections';
import { Box, Container } from '@material-ui/core';
import { style } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogPageProps {
  products?: ProductInterface[];
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  products,
}): JSX.Element => {
  return (
    <Box sx={style.root} className="page catalog-page">
      <Banner></Banner>
      <Container>
        <Box className="page-catalog-grid">
          <CatalogFilter className="catalog-filter"></CatalogFilter>
          <CatalogRepresentation
            products={products}
            className="catalog-representation"
          ></CatalogRepresentation>
        </Box>
      </Container>
      <SubscriptionClubAboutSection />
    </Box>
  );
};

export default CatalogPage;
