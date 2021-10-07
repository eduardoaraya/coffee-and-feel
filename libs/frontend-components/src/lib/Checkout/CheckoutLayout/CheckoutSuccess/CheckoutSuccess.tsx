import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import { Box } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';

export interface CheckoutSuccessProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
}

export function CheckoutSuccess({ JSS }: CheckoutSuccessProps) {
  const styles = React.useMemo(() => _.merge(stylesheet, JSS), [JSS]);

  return <Box sx={styles.root}></Box>;
}

export default CheckoutSuccess;

const stylesheet = AtlasStylesheet.create({
  root: {},
});
