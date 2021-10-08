import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Box,
  BoxProps,
  TextField,
  TextFieldProps,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Button,
  ButtonProps,
  Typography,
} from '@material-ui/core';
import {
  CreditCardView,
  CreditCardViewProps,
} from '../../../CreditCard/CreditCardView/CreditCardView';

/* eslint-disable-next-line */
export interface CheckoutCreditCardCreationProps extends BoxProps {
  title?: string;
  CreditCardNumberProps?: TextFieldProps;
  CreditCardNameProps?: TextFieldProps;
  CreditCardExpirationProps?: TextFieldProps;
  CheckboxProps?: CheckboxProps;
  CancelActionButtonProps?: ButtonProps;
  ConfirmationActionButtonProps?: ButtonProps;
  CreditCardViewProps?: CreditCardViewProps;
}

export function CheckoutCreditCardCreation({
  sx,
  title = 'Digite os dados do cartão',
  CreditCardNameProps,
  CreditCardNumberProps,
  CreditCardExpirationProps,
  CheckboxProps,
  ConfirmationActionButtonProps,
  CancelActionButtonProps,
  CreditCardViewProps,
  ...rest
}: CheckoutCreditCardCreationProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.grid}>
        <Box sx={styles.formContainer}>
          <Typography sx={styles.sectionTitle}>{title}</Typography>

          <Box sx={styles.formGrid}>
            <TextField
              {...CreditCardNumberProps}
              label={'Número do cartão'}
              sx={styles.field(true)}
            />
            <TextField
              {...CreditCardNameProps}
              label="Nome impresso no cartão"
              sx={styles.field(true)}
            />
            <TextField
              {...CreditCardExpirationProps}
              label="Data de validade"
              sx={{ gridColumn: { lg: '2/3' } }}
            />
          </Box>

          <Box sx={styles.checkboxContainer}>
            <FormControlLabel
              label="Salvar este cartão"
              control={
                <Checkbox {...CheckboxProps} color="primary" defaultChecked />
              }
            />
          </Box>

          <Box sx={styles.actionsContainer}>
            <Button
              {...CancelActionButtonProps}
              variant="outlined"
              color="secondary"
            >
              Voltar
            </Button>

            <Button
              {...ConfirmationActionButtonProps}
              variant="contained"
              color="primary"
            >
              Salvar cartão
            </Button>
          </Box>
        </Box>

        <Box sx={styles.creditCardViewContainer}>
          <CreditCardView {...CreditCardViewProps} />
        </Box>
      </Box>
    </Box>
  );
}

export default CheckoutCreditCardCreation;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: '100%',
    height: '100%',
  },

  sectionTitle: {
    color: (theme) => theme.palette.secondary.main,
    fontSize: { xs: '1.6em', lg: '2em' },
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: { xs: '3em', lg: '2em' },
  },

  creditCardViewContainer: {
    display: { xs: 'none', lg: 'flex' },
    height: '100%',
    justifyContent: 'center',
    mt: { lg: '4.5em' },
  },

  checkboxContainer: {},
  actionsContainer: {
    display: 'flex',
    columnGap: { xs: '4em' },
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '0.5fr 0.5fr' },
  },

  formGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '0.5fr 0.5fr' },
    gridTemplateRows: { xs: '1fr' },
    rowGap: { xs: '4em' },
    px: { xs: '0.5em', lg: '0em' },
  },

  field: (fullColumn = false) => {
    return {
      ...(fullColumn && {
        gridColumn: { lg: '1/3' },
      }),
    };
  },
});
