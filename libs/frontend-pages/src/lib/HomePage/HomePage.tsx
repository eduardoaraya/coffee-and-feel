import {
  LayoutEcommerce,
  Banner,
  SlideProductRepresentation,
} from '@atlascode/coffee-front-components';
import { Box, Container } from '@material-ui/core';
import { HomePageProps } from './contracts/HomePage.interface';
import SubscriptionClubAboutSection from './sections/SubscriptionClubAboutSection';
import SubscriptionClubDetailsSection from './sections/SubscriptionClubDetailsSection';
import KnowMoreSection from './sections/KnowMoreSection';
import style from './style';
import CallInstagramSection from './sections/CallInstagramSection';

export const HomePage: React.FC = (props: HomePageProps): JSX.Element => {
  return (
    <LayoutEcommerce>
      <Box sx={style.homePage}>
        <Banner></Banner>
        <SubscriptionClubAboutSection />
        <KnowMoreSection></KnowMoreSection>
        <Container component="section" sx={style.slideProductRepresentation}>
          <SlideProductRepresentation></SlideProductRepresentation>
        </Container>
        <SubscriptionClubDetailsSection />
        <CallInstagramSection />
      </Box>
    </LayoutEcommerce>
  );
};

export default HomePage;
