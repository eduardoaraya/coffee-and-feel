import {
  LayoutEcommerce,
  Banner,
  SlideProductRepresentation,
} from '@atlascode/coffee-front-components';
import { Box, Container } from '@material-ui/core';
import { HomePageProps } from './contracts/HomePage.interface';
import SubscriptionClubAboutSection from './sections/SubscriptionClubAboutSection';
import KnowMoreSection from './sections/KnowMoreSection';
import style from './style';

export const HomePage: React.FC = (props: HomePageProps): JSX.Element => {
  return (
    <LayoutEcommerce>
      <Box sx={style.homePage}>
        <Banner></Banner>
        <SubscriptionClubAboutSection></SubscriptionClubAboutSection>
        <KnowMoreSection></KnowMoreSection>
        <Container component="section" sx={style.slideProductRepresentation}>
          <SlideProductRepresentation></SlideProductRepresentation>
        </Container>
      </Box>
    </LayoutEcommerce>
  );
};

export default HomePage;
