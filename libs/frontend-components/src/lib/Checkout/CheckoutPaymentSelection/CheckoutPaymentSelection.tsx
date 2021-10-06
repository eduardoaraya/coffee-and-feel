import { Box, BoxProps } from '@material-ui/core';
import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import React from 'react';
import _ from 'lodash';
import {
  EnhancedRadio,
  EnhancedRadioProps,
} from '../../EnhancedRadio/EnhancedRadio';
import { EnhancedRadioGroup } from '../../EnhancedRadioGroup/EnhancedRadioGroup';

/* eslint-disable-next-line */
export interface CheckoutPaymentSelectionProps extends BoxProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
  items?: EnhancedRadioProps[];
}

export function CheckoutPaymentSelection({
  sx,
  JSS,
  items = [],
  ...rest
}: CheckoutPaymentSelectionProps) {
  const styles = React.useMemo(() => {
    return _.merge(stylesheet, JSS);
  }, [JSS]);

  return (
    <Box sx={styles.root} {...rest}>
      <EnhancedRadioGroup component={EnhancedRadio} items={[]} />
    </Box>
  );
}

export default CheckoutPaymentSelection;

const stylesheet = AtlasStylesheet.create({
  root: {},
});
