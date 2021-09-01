import { LayoutEcommerce, Banner } from '@atlascode/coffee-front-components';
import { Box } from '@material-ui/core';
import { HomePageProps } from './contracts/HomePage.interface';
import SubscriptionClubAboutSection from './sections/SubscriptionClubAboutSection';
import style from './style';
import Image from 'next/image';

export const HomePage: React.FC = (props: HomePageProps): JSX.Element => {
  return (
    <LayoutEcommerce>
      <Box sx={style.homePage}>
        <Banner></Banner>
        <SubscriptionClubAboutSection></SubscriptionClubAboutSection>
      </Box>
    </LayoutEcommerce>
  );
};

export default HomePage;
