import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';
import { CheckoutHeader } from '../CheckoutHeader/CheckoutHeader';
import { CheckoutSteps } from '../CheckoutSteps/CheckoutSteps';

/* eslint-disable-next-line */
export interface CheckoutLayoutProps {}

export function CheckoutLayout(props: CheckoutLayoutProps) {
  return (
    <Box sx={styles.root}>
      <CheckoutHeader />
      <Box sx={{ mt: '2em' }} />
      <CheckoutSteps />
    </Box>
  );
}

export default CheckoutLayout;

const styles = AtlasStylesheet.create({
  root: {},
});
