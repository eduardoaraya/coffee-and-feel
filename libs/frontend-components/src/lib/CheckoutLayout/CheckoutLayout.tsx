import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface CheckoutLayoutProps {}

export function CheckoutLayout(props: CheckoutLayoutProps) {
  return (
    <div>
      <h1>Welcome to CheckoutLayout!</h1>
    </div>
  );
}

export default CheckoutLayout;

const styles = AtlasStylesheet.create({});
