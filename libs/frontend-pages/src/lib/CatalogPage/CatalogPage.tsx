import {
  Banner,
  CatalogFilter,
  CatalogRepresentation,
  LayoutEcommerce,
} from '@atlascode/coffee-front-components';
import { Box, Container } from '@material-ui/core';
import style from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogPageProps {}

export const CatalogPage: React.FC = (props: CatalogPageProps): JSX.Element => {
  return (
    <LayoutEcommerce>
      <Box sx={style.root} className="page catalog-page">
        <Banner></Banner>
        <Container>
          <Box className="page-catalog-grid">
            <CatalogFilter className="catalog-filter"></CatalogFilter>
            <CatalogRepresentation className="catalog-representation"></CatalogRepresentation>
          </Box>
        </Container>
      </Box>
    </LayoutEcommerce>
  );
};

export default CatalogPage;
