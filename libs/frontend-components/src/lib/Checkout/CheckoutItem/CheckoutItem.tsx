import { CounterInput } from '../../CounterInput/CounterInput';
import { Box, BoxProps } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { CheckoutReturnArrow } from '@atlascode/coffee-frontend-svg';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

/* eslint-disable-next-line */
export interface CheckoutItemProps extends BoxProps {}

export function CheckoutItem({ sx, ...rest }: CheckoutItemProps) {
  return <Box sx={{ ...styles.root, ...sx }} {...rest}></Box>;
}

export default CheckoutItem;

const styles = AtlasStylesheet.create({
  root: {},
});
