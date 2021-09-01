import { LayoutStore, Banner } from '@atlascode/coffee-front-components';
import Box from '@material-ui/system/Box';
import { HomePageProps } from './contracts/HomePage.interface';
import SubscriptionClubAbout from './sections/SubscriptionClubAbout';
import style from './style';

export const HomePage: React.FC = (props: HomePageProps): JSX.Element => {
  return (
    <LayoutStore>
      <Box sx={style.homePage}>
        <Banner></Banner>
        <SubscriptionClubAbout></SubscriptionClubAbout>
      </Box>
    </LayoutStore>
  );
};

export default HomePage;
