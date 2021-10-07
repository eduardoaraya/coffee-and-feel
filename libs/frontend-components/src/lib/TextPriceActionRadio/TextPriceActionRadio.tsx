import {
  AtlasStylesheet,
  AtlasJSSShallow,
  formatToCurrency,
} from '@atlascode/coffee-shared-helpers';
import {
  EnhancedRadio,
  EnhancedRadioProps,
  EnhancedRadioJSSToken,
} from '../EnhancedRadio/EnhancedRadio';
import { Box, Typography } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';

export const TextPriceActionRadioJSSToken = 'TextPriceActionRadioJSS';

/* eslint-disable-next-line */
export interface TextPriceActionRadioProps
  extends Omit<EnhancedRadioProps, 'children'> {
  JSS?: { [key in typeof EnhancedRadioJSSToken]: EnhancedRadioProps['JSS'] } &
    AtlasJSSShallow<typeof stylesheet>;

  label?: string;
  price?: number;
}

export function TextPriceActionRadio({
  JSS,
  label = 'Placeholder ',
  price = 0,
  ...rest
}: TextPriceActionRadioProps) {
  const styles = React.useMemo(
    () =>
      _.merge(stylesheet, {
        ...JSS,
        [EnhancedRadioJSSToken]: {
          ...JSS?.EnhancedRadioJSS,
          root: { maxWidth: { lg: '51.6em' } },
        },
      }),
    [JSS]
  );

  return (
    <EnhancedRadio {...rest} JSS={styles[EnhancedRadioJSSToken]}>
      <Box sx={styles.root}>
        <Typography sx={styles.label} color="primary">
          {label}
        </Typography>

        <Box sx={styles.priceContainer}>
          <Typography color="secondary" sx={styles.price}>
            {formatToCurrency('pt-BR', 'BRL', price)}
          </Typography>
        </Box>
      </Box>
    </EnhancedRadio>
  );
}

export default TextPriceActionRadio;

const stylesheet = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: { xs: 'column', lg: 'row' },
    py: { xs: '3em' },
    pr: { lg: '4em' },
    pl: { lg: '1em' },
    rowGap: { xs: '1.5em' },
  },

  label: {
    fontSize: { xs: '2em' },
    fontWeight: 900,
  },

  priceContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: { xs: 'flex-start', lg: 'flex-end' },
  },

  price: {
    fontSize: { xs: '2em' },
  },
});
