import { LayoutEcommerce, Banner } from '@atlascode/coffee-front-components';
import Box from '@material-ui/system/Box';
import { HomePageProps } from './contracts/HomePage.interface';
import SubscriptionClubAboutSection from './sections/SubscriptionClubAboutSection';
import style from './style';

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
