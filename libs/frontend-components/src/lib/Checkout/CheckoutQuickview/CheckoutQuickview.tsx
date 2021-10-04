import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';
import {} from '@atlascode/coffee-frontend-utility'
import data from './data.json';

/* eslint-disable-next-line */
export interface CheckoutQuickviewProps extends BoxProps {}

export function CheckoutQuickview({ sx, ...rest }: CheckoutQuickviewProps) {
  return <Box sx={{ ...styles.root, ...sx }} {...rest}></Box>;
}

export default CheckoutQuickview;

const styles = AtlasStylesheet.create({
  root: {},
});




