import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface CheckoutDiscountProps extends BoxProps {}

export function CheckoutDiscount({ sx, ...rest }: CheckoutDiscountProps) {
  return <Box sx={{ ...styles.root, ...sx }} {...rest}></Box>;
}

export default CheckoutDiscount;

const styles = AtlasStylesheet.create({
  root: {},
});
