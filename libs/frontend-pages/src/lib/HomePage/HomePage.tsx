import { Box, Container, Typography } from '@material-ui/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  SubscriptionClubAboutSection,
  KnowMoreSection,
  SubscriptionClubDetailsSection,
  NewsletterSection,
  CallInstagramSection,
  LastPostsSection,
} from '@atlascode/coffee-front-sections';
import {
  LayoutEcommerce,
  Banner,
  SlideProductRepresentation,
  MobileSlideProductRepresentation,
  ProductInterface,
} from '@atlascode/coffee-front-components';
import { style } from './styles';

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
    id: 3,
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
    id: 4,
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
] as ProductInterface[];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomePageProps {}

export const HomePage: React.FC = (props: HomePageProps): JSX.Element => {
  return (
    <Box className="page home-page">
      <Banner></Banner>
      <SubscriptionClubAboutSection />
      <KnowMoreSection></KnowMoreSection>
      <Container component="section" sx={style.slideProductRepresentation}>
        <Typography className="title-slide-product" variant="h1">
          Cafés especiais e selecionados
        </Typography>
        <SlideProductRepresentation
          products={dataProduct}
        ></SlideProductRepresentation>
        <MobileSlideProductRepresentation
          products={dataProduct}
        ></MobileSlideProductRepresentation>
      </Container>
      <SubscriptionClubDetailsSection />
      <CallInstagramSection />
      <NewsletterSection />
      <LastPostsSection />
    </Box>
  );
};

export default HomePage;
