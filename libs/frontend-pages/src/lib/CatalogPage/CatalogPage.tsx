import {
  Banner,
  CatalogFilter,
  CatalogRepresentation,
  LayoutEcommerce,
  ProductInterface,
} from '@atlascode/coffee-front-components';
import { SubscriptionClubAboutSection } from '@atlascode/coffee-front-sections';
import { Box, Container } from '@material-ui/core';
import style from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogPageProps {}

const dataProduct = [
  {
    id: 1,
    feelPoints: 70,
    name: 'Product test',
    plans: [
      {
        id: 1,
        name: 'Basic',
        priceTotal: 'R$ 17,90',
        price: 'R$ 24,90',
        porcent: 0.1,
      },
      {
        id: 2,
        name: 'Standard',
        priceTotal: 'R$ 37,90',
        price: 'R$ 49,90',
        porcent: 0.15,
      },
      {
        id: 3,
        name: 'Premium',
        priceTotal: 'R$ 53,90',
        price: 'R$ 60,90',
        porcent: 0.2,
      },
    ],
  },
  {
    id: 2,
    feelPoints: 70,
    name: 'Product test',
    plans: [
      {
        id: 1,
        name: 'Basic',
        priceTotal: 'R$ 17,90',
        price: 'R$ 24,90',
        porcent: 0.1,
      },
      {
        id: 2,
        name: 'Standard',
        priceTotal: 'R$ 37,90',
        price: 'R$ 49,90',
        porcent: 0.15,
      },
      {
        id: 3,
        name: 'Premium',
        priceTotal: 'R$ 53,90',
        price: 'R$ 60,90',
        porcent: 0.2,
      },
    ],
  },
  {
    id: 1,
    feelPoints: 70,
    name: 'Product test',
    plans: [
      {
        id: 3,
        name: 'Basic',
        priceTotal: 'R$ 17,90',
        price: 'R$ 24,90',
        porcent: 0.1,
      },
      {
        id: 2,
        name: 'Standard',
        priceTotal: 'R$ 37,90',
        price: 'R$ 49,90',
        porcent: 0.15,
      },
      {
        id: 3,
        name: 'Premium',
        priceTotal: 'R$ 53,90',
        price: 'R$ 60,90',
        porcent: 0.2,
      },
    ],
  },
] as ProductInterface[];

export const CatalogPage: React.FC<CatalogPageProps> = (props): JSX.Element => {
  return (
    <LayoutEcommerce>
      <Box sx={style.root} className="page catalog-page">
        <Banner></Banner>
        <Container>
          <Box className="page-catalog-grid">
            <CatalogFilter className="catalog-filter"></CatalogFilter>
            <CatalogRepresentation
              products={dataProduct}
              className="catalog-representation"
            ></CatalogRepresentation>
          </Box>
        </Container>
        <SubscriptionClubAboutSection />
      </Box>
    </LayoutEcommerce>
  );
};

export default CatalogPage;
