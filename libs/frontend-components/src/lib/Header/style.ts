import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

const headerStyle = {
  header: {
    h: '77px',
    background: '#FFF',
    color: (theme) => theme.palette.primary.main,
  },
} as { [key: string]: SxProps<Theme> };

export default headerStyle;
