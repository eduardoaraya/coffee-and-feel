import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box } from '@material-ui/core';
import { CheckoutHeader } from '../CheckoutHeader/CheckoutHeader';
import {
  CheckoutSteps,
  CheckoutStepsProps,
} from '../CheckoutSteps/CheckoutSteps';

/* eslint-disable-next-line */
export interface CheckoutLayoutProps {
  children?: React.ReactNode;
  StepsProps?: CheckoutStepsProps;
}

export function CheckoutLayout({
  StepsProps = {
    steps: [],
  },
  children,
}: CheckoutLayoutProps) {
  return (
    <Box sx={styles.root}>
      <CheckoutHeader />
      <CheckoutSteps {...StepsProps} />

      {children}
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
