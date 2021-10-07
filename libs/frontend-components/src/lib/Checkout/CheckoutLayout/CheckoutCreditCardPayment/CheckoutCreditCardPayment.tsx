import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import { TextField, MenuItem, Box, TextFieldProps } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';

/* eslint-disable-next-line */
export interface CheckoutCreditCardPaymentProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
}

export function CheckoutCreditCardPayment({
  JSS,
}: CheckoutCreditCardPaymentProps) {
  const styles = React.useMemo(() => _.merge(stylesheet, JSS), [JSS]);

  return <Box sx={styles.root}></Box>;
}

export default CheckoutCreditCardPayment;

const stylesheet = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
});
