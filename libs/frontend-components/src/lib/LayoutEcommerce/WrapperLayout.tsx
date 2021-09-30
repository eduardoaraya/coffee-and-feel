import { Box, Theme } from '@material-ui/core';
import { SxProps } from '@material-ui/system';

/* eslint-disable-next-line */
export interface WrapperLayoutProps {}

const style: SxProps<Theme> = {
  layout: {
    main: {
      position: 'relative',
      height: '100%',
      backgroundColor: '#f6f6f6',
    },
    '.page': {
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      paddingTop: { xs: '108px', lg: '108px' },
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: `radial-gradient(#b6c5cc 0.9500000000000001px, #f6f6f6 0.9500000000000001px)`,
      backgroundSize: '19px 19px',
    },
  },
};

export const WrapperLayout: React.FC<WrapperLayout> = ({
  children,
}): JSX.Element => {
  return <Box sx={style.layout}>{children}</Box>;
};

export default WrapperLayout;
