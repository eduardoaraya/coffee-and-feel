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
import CallInstagramSection from './sections/CallInstagramSection';
import NewsletterSection from './sections/NewsletterSection';
import style from './style';
import LastPostsSection from './sections/LastPostsSection';

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
        <NewsletterSection />
        <CallInstagramSection />
        <LastPostsSection />
      </Box>
    </LayoutEcommerce>
  );
};

export default HomePage;
