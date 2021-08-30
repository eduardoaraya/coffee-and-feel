import { LayoutStore, Banner } from '@atlascode/coffee-front-components';

/* eslint-disable-next-line */
export interface HomePageProps {}

export const HomePage: React.FC = (props: HomePageProps): JSX.Element => {
  return (
    <LayoutStore>
      <Banner></Banner>
    </LayoutStore>
  );
};

export default HomePage;
