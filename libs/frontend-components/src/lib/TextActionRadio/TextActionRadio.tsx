import { Box } from '@material-ui/core';
import {
  EnhancedRadio,
  EnhancedRadioProps,
} from '../EnhancedRadio/EnhancedRadio';
import {
  AtlasJSSShallow,
  AtlasStylesheet,
} from '@atlascode/coffee-shared-helpers';
import React from 'react';
import _ from 'lodash';

const EnhancedRadioJSSKey = 'enhancedRadioJSS';

/* eslint-disable-next-line */
export interface TextActionRadioProps extends EnhancedRadioProps {
  label?: string;
  JSS?: { [key in typeof EnhancedRadioJSSKey]?: EnhancedRadioProps['JSS'] } &
    AtlasJSSShallow<typeof stylesheet>;
}

export function TextActionRadio({ label, JSS, ...rest }: TextActionRadioProps) {
  const styles = React.useMemo(
    () => _.merge(stylesheet, { [EnhancedRadioJSSKey]: { ...JSS } }),
    [JSS]
  );

  return (
    <EnhancedRadio JSS={styles.enhancedRadioJSS} {...rest}>
      <Box></Box>
    </EnhancedRadio>
  );
}

export default TextActionRadio;

const stylesheet = AtlasStylesheet.create({
  root: {
    color: 'red',
  },
});
