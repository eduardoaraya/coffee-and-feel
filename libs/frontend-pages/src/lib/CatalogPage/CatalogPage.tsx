import { Banner, LayoutEcommerce } from '@atlascode/coffee-front-components';
import { Box } from '@material-ui/system';
import style from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogPageProps {}

export const CatalogPage: React.FC = (props: CatalogPageProps): JSX.Element => {
  return (
    <LayoutEcommerce>
      <Box sx={style.root} className="page catalog-page">
        <Banner></Banner>
      </Box>
    </LayoutEcommerce>
  );
};

export default CatalogPage;
