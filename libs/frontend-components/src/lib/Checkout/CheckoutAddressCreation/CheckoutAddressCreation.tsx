import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface CheckoutAddressCreationProps extends BoxProps {}

export function CheckoutAddressCreation({
  sx,
  ...rest
}: CheckoutAddressCreationProps) {
  return <Box sx={{ ...styles.root, ...sx }} {...rest}></Box>;
}

export default CheckoutAddressCreation;

const styles = AtlasStylesheet.create({
  root: {},
});
