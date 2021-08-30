import style from './style';
import Box from '@material-ui/core/Box';

/* eslint-disable-next-line */
export interface BannerProps {}

export const Banner: React.FC = (props: BannerProps): JSX.Element => {
  return <Box sx={style.banner}></Box>;
};

export default Banner;
