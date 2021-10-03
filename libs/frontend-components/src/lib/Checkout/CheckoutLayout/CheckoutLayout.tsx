import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';
import { CheckoutHeader } from '../CheckoutHeader/CheckoutHeader';
import { CheckoutSteps } from '../CheckoutSteps/CheckoutSteps';

/* eslint-disable-next-line */
export interface CheckoutLayoutProps {
  children?: React.ReactNode;
}

export function CheckoutLayout(props: CheckoutLayoutProps) {
  return (
    <Box sx={styles.root}>
      <CheckoutHeader />
      {props.children}
      {/* <CheckoutSteps /> */}
    </Box>
  );
}

export default CheckoutLayout;

const styles = AtlasStylesheet.create({
  root: {
    height: 'auto',
    minHeight: '100vh',
  },
});
