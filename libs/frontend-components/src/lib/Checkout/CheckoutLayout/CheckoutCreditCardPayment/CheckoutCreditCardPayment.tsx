import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import {
  TextField,
  MenuItem,
  Box,
  TextFieldProps,
  Typography,
  Button,
  ButtonProps,
} from '@material-ui/core';
import {
  CreditCardRectangle,
  CreditCardRectangleProps,
} from '../../../CreditCardRectangle/CreditCardRectangle';
import React from 'react';
import _ from 'lodash';

/* eslint-disable-next-line */
export interface CheckoutCreditCardPaymentProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
  CreditCardRectangleProps?: CreditCardRectangleProps;
  InstallmentsSelectFieldProps?: TextFieldProps;
  CVVFieldProps?: TextFieldProps;
  BackwardButtonProps?: ButtonProps;
  ForwardButtonProps?: ButtonProps;
}

export function CheckoutCreditCardPayment({
  JSS,
  CVVFieldProps,
  CreditCardRectangleProps,
  InstallmentsSelectFieldProps,
  BackwardButtonProps,
  ForwardButtonProps,
}: CheckoutCreditCardPaymentProps) {
  const styles = React.useMemo(() => _.merge(stylesheet, JSS), [JSS]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.creditCardContainer}>
        <Typography color="secondary" sx={styles.creditCardContainerTitle}>
          Cartão de crédito
        </Typography>
        <CreditCardRectangle
          {...CreditCardRectangleProps}
          JSS={{ FocusableRectangleJSS: { root: styles.creditCardRectangle } }}
        />
      </Box>

      <Box sx={styles.formContainer}>
        <TextField
          {...InstallmentsSelectFieldProps}
          label="Em quantas vezes?"
        />
        <TextField {...CVVFieldProps} label="CVV" />
      </Box>

      <Box sx={styles.buttonsContainer}>
        <Button
          {...{
            ...BackwardButtonProps,
            children: 'Voltar',
            variant: 'outlined',
            color: 'secondary',
            sx: styles.backwardButton,
          }}
        />

        <Button
          {...{
            ...ForwardButtonProps,
            children: 'Avançar',
            variant: 'contained',
            color: 'success',
            sx: styles.forwardButton,
          }}
        />
      </Box>
    </Box>
  );
}

export default CheckoutCreditCardPayment;

const stylesheet = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    gap: { xs: '8em' },
  },

  creditCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '2em' },
  },

  creditCardContainerTitle: {
    fontSize: { xs: '1.6em', lg: '2em' },
  },

  creditCardRectangle: {
    width: '100%',
  },

  formContainer: {
    display: 'flex',
    gap: { xs: '4em' },
  },

  buttonsContainer: {
    borderTop: (theme) => theme.palette.grey[400],
    display: 'flex',
    width: '100%',
    justifyContent: { xs: 'center', lg: 'flex-end' },
    gap: { xs: '4em' },
  },

  backwardButton: {},

  forwardButton: {},
});
