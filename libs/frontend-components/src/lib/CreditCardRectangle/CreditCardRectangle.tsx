import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import React from 'react';
import _ from 'lodash';
import { Box, Typography } from '@material-ui/core';
import {
  FocusableRectangle,
  FocusableRectangleProps,
} from '../FocusableRectangle/FocusableRectangle';
import { CreditCardSVG } from '@atlascode/coffee-frontend-svg';

const FocusableRectangleJSSKey = `FocusableRectangleJSS`;

export const CreditCardRectangleJSSKey = `CreditCardRectangleJSS`;

/* eslint-disable-next-line */
export interface CreditCardRectangleProps
  extends Omit<FocusableRectangleProps, 'children'> {
  JSS?: {
    [key in typeof FocusableRectangleJSSKey]?: FocusableRectangleProps['JSS'];
  } &
    AtlasJSSShallow<typeof stylesheet>;

  CCNumber?: string;
  CCBrand?: string;
}

export function CreditCardRectangle({
  JSS,
  active,
  CCNumber,
  CCBrand,
}: CreditCardRectangleProps) {
  const styles = React.useMemo(
    () =>
      _.merge(stylesheet, {
        [FocusableRectangleJSSKey]: { ...JSS?.FocusableRectangleJSS },
      }),
    [JSS]
  );

  return (
    <FocusableRectangle JSS={styles[FocusableRectangleJSSKey]} active={active}>
      <Box sx={styles.root}>
        <CreditCardSVG sx={styles.creditCardSVG} />
        <Typography color="secondary" sx={styles.ccInfoText}>
          {`${CCBrand} ${CCNumber}`}
        </Typography>
      </Box>
    </FocusableRectangle>
  );
}

export default CreditCardRectangle;

const stylesheet = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    display: 'flex',
    alignItems: 'center',
    py: { xs: '1.15em' },
    px: { xs: '3em' },
    gap: { xs: '4em' },
    width: '100%',
  },

  creditCardSVG: {
    fontSize: { xs: '1em' },
    width: { xs: '5em' },
    height: { xs: 'auto' },
  },

  ccInfoText: {
    fontSize: { xs: '1.6em' },
  },
});
