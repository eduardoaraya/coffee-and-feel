import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Drawer, DrawerProps } from '@material-ui/core';
import { LottieAnimation } from '@atlascode/coffee-frontend-utility';
import { alpha } from '@material-ui/system';
import data from './data.json';

/* eslint-disable-next-line */
export interface CheckoutQuickviewProps extends DrawerProps {}

export function CheckoutQuickview({ sx, ...rest }: CheckoutQuickviewProps) {
  return <Drawer sx={{ ...styles.root, ...sx }} {...rest}></Drawer>;
}

export default CheckoutQuickview;

const styles = AtlasStylesheet.create({
  root: {},

  grid: {
    display: 'grid',
    gridTemplateRows: { xs: '26% 66% 8%' },
  },

  header: {
    borderBottom: (theme) =>
      `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  },

  body: {},

  footer: {},
});
