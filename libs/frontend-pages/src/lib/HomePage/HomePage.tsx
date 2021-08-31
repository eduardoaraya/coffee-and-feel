import { LayoutStore, Banner } from '@atlascode/coffee-front-components';
import { HomePageProps } from './contracts/HomePage.interface';

export const HomePage: React.FC = (props: HomePageProps): JSX.Element => {
  return (
    <LayoutStore>
      <Banner></Banner>
      <div></div>
    </LayoutStore>
  );
};

export default HomePage;
