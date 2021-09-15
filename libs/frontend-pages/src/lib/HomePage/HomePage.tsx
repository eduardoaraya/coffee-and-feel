import {
  LayoutEcommerce,
  Banner,
  SlideProductRepresentation,
} from '@atlascode/coffee-front-components';
import { Box, Container, Typography } from '@material-ui/core';
import { HomePageProps } from './contracts/HomePage.interface';
import style from './style';
import {
  SubscriptionClubAboutSection,
  KnowMoreSection,
  SubscriptionClubDetailsSection,
  NewsletterSection,
  CallInstagramSection,
  LastPostsSection,
} from '@atlascode/coffee-front-sections';

export const HomePage: React.FC = (props: HomePageProps): JSX.Element => {
  return (
    <LayoutEcommerce>
      <Box sx={style.homePage}>
        <Banner></Banner>
        <SubscriptionClubAboutSection />
        <KnowMoreSection></KnowMoreSection>
        <Container component="section" sx={style.slideProductRepresentation}>
          <Typography className="title-slide-product" variant="h1">
            Cafés especiais e selecionados
          </Typography>
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
