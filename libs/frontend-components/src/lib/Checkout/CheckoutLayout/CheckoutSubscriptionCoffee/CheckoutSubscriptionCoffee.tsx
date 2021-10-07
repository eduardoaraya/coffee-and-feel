import { Box } from '@material-ui/core';
import {
  AtlasJSSShallow,
  AtlasStylesheet,
} from '@atlascode/coffee-shared-helpers';
import _ from 'lodash';
import React from 'react';

/* eslint-disable-next-line */
export interface CheckoutSubscriptionCoffeeProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
}

export function CheckoutSubscriptionCoffee({
  JSS,
}: CheckoutSubscriptionCoffeeProps) {
  const styles = React.useMemo(() => _.merge(stylesheet, JSS), [JSS]);

  return <Box sx={styles.root}></Box>;
}

export default CheckoutSubscriptionCoffee;

const stylesheet = AtlasStylesheet.create({
  root: {},
});
