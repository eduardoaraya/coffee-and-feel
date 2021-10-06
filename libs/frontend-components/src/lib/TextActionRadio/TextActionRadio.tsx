import { Box, Typography } from '@material-ui/core';
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
      <Box sx={styles.root}>
        <Box sx={styles.textContainer}>
          <Typography sx={styles.text}>{label}</Typography>
        </Box>
      </Box>
    </EnhancedRadio>
  );
}

export default TextActionRadio;

const stylesheet = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: '100%',
    height: '100%',
    py: { xs: '1.75em' },
    pl: { xs: '1em' },
  },

  textContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  text: {
    fontSize: { xs: '1.6em' },
    color: (theme) => theme.palette.secondary.main,
  },
});
