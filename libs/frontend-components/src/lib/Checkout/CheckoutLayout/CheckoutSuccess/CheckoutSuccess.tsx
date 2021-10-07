import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import { Box, Button, ButtonProps, Typography } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';
import { LottieAnimation } from '@atlascode/coffee-frontend-utility';
import data from './data-v2.json';

export interface CheckoutSuccessProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
  PrimaryActionButtonProps?: ButtonProps;
  SecondaryActionButtonProps?: ButtonProps;
  mainText?: string;
  auxiliaryText?: string;
}

export function CheckoutSuccess({
  JSS,
  mainText,
  auxiliaryText,
  PrimaryActionButtonProps,
  SecondaryActionButtonProps,
}: CheckoutSuccessProps) {
  const styles = React.useMemo(() => _.merge(stylesheet, JSS), [JSS]);

  return (
    <Box sx={styles.root}>
      <LottieAnimation animationData={data} sx={styles.lottie} loop={false} />

      <Box sx={styles.textContainer}>
        <Typography sx={styles.mainText} color="secondary">
          {mainText}
        </Typography>

        <Typography sx={styles.auxText} color="secondary">
          {auxiliaryText}
        </Typography>
      </Box>

      <Box sx={styles.actionButtonsContainer}>
        <Button
          {...{
            ...PrimaryActionButtonProps,
            color: 'primary',
            variant: 'contained',
            children: 'Ver pedido',
            sx: styles.primaryActionButton,
          }}
        />

        <Button
          {...{
            ...SecondaryActionButtonProps,
            color: 'secondary',
            variant: 'outlined',
            children: 'Continuar comprando',
            sx: styles.secondaryActionButton,
          }}
        />
      </Box>
    </Box>
  );
}

export default CheckoutSuccess;

const stylesheet = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: '5em', lg: '8em' },
  },

  lottie: {
    height: 'auto',
    width: { xs: '20em', lg: '25em' },
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    gap: { xs: '1em' },
  },

  mainText: {
    fontSize: { xs: '1.6em', lg: '2em' },
    fontWeight: 900,
  },

  auxText: {
    fontSize: { xs: '1.4em', lg: '1.6em' },
  },

  actionButtonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: '4em' },
  },

  primaryActionButton: {},

  secondaryActionButton: {},
});
