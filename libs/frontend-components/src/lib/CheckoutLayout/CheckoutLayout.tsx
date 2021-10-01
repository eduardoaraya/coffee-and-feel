import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';
import CheckoutLayoutHeader from './CheckoutLayoutHeader';
import { CheckoutLayoutSteps } from './CheckoutLayoutSteps';

/* eslint-disable-next-line */
export interface CheckoutLayoutProps {}

export function CheckoutLayout(props: CheckoutLayoutProps) {
  return (
    <Box sx={styles.root}>
      <CheckoutLayoutHeader />
      <Box sx={{ mt: '2em' }} />
      <CheckoutLayoutSteps />
    </Box>
  );
}

export default CheckoutLayout;

const styles = AtlasStylesheet.create({
  root: {},
});
