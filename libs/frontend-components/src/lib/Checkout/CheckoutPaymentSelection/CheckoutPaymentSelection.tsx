import { Box } from '@material-ui/core';
import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import React from 'react';
import _ from 'lodash';
import { EnhancedRadioGroup } from '../../EnhancedRadioGroup/EnhancedRadioGroup';
import {
  TextActionRadio,
  TextActionRadioProps,
} from '../../TextActionRadio/TextActionRadio';

/* eslint-disable-next-line */
export interface CheckoutPaymentSelectionProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
  items?: TextActionRadioProps[];
  activeIndex?: number;
}

export const CheckoutPaymentSelection = ({
  JSS,
  items = [],
  activeIndex = 0,
  ...rest
}: CheckoutPaymentSelectionProps) => {
  const styles = React.useMemo(() => {
    return _.merge(stylesheet, JSS);
  }, [JSS]);

  return (
    <Box sx={styles.root} {...rest}>
      <EnhancedRadioGroup
        activeIndex={activeIndex}
        component={TextActionRadio}
        items={items}
      />
    </Box>
  );
};

export default CheckoutPaymentSelection;

const stylesheet = AtlasStylesheet.create({
  root: {},
});
