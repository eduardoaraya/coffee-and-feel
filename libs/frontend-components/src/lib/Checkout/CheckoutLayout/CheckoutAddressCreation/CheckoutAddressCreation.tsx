import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Box,
  BoxProps,
  TextField,
  TextFieldProps,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  CheckboxProps,
  ButtonProps,
} from '@material-ui/core';

/* eslint-disable-next-line */
export interface CheckoutAddressCreationProps extends BoxProps {
  RecipientFieldProps?: TextFieldProps;
  PhoneFieldProps?: TextFieldProps;
  ZipcodeFieldProps?: TextFieldProps;
  AddressLineFieldProps?: TextFieldProps;
  AddressLineTwoFieldProps?: TextFieldProps;
  AddressLineThreeFieldProps?: TextFieldProps;
  AddressNumberFieldProps?: TextFieldProps;
  AddressReferenceFieldProps?: TextFieldProps;
  AddressNeighborhoodFieldProps?: TextFieldProps;
  AddressCityFieldProps?: TextFieldProps;
  AdddressStateFieldProps?: TextFieldProps;
  CheckboxProps?: CheckboxProps;
  CancelActionButtonProps?: ButtonProps;
  ConfirmActionButtonProps?: ButtonProps;
}

export function CheckoutAddressCreation({
  sx,
  ...rest
}: CheckoutAddressCreationProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Typography>Preencha o endereço para entrega</Typography>

        <Box sx={styles.grid}>
          <TextField
            {...rest.RecipientFieldProps}
            sx={styles.field(true)}
            label="Nome do destinatário"
            placeholder="Ex. João da Silva..."
          />
          <TextField
            {...rest.PhoneFieldProps}
            sx={styles.field()}
            label="Telefone"
            placeholder="Ex. (11) 9-9999-9999"
          />
          <TextField
            {...rest.ZipcodeFieldProps}
            sx={styles.field()}
            label="CEP"
            placeholder="Ex. 90660-070"
          />
          <TextField
            {...rest.AddressLineFieldProps}
            sx={styles.field(true)}
            label="Endereço"
            placeholder="Ex. Rua Marechal Deodoro..."
          />
          <TextField
            {...rest.AddressLineTwoFieldProps}
            sx={styles.field()}
            label="Número"
            placeholder="Ex. 105"
          />
          <TextField
            {...rest.AddressLineThreeFieldProps}
            sx={styles.field()}
            label="Complemento"
            placeholder="Ex. apartamento 303"
          />
          <TextField
            {...rest.AddressNeighborhoodFieldProps}
            sx={styles.field()}
            label="Bairro"
            placeholder="Ex. Centro"
          />
          <TextField
            {...rest.AddressCityFieldProps}
            sx={styles.field()}
            label="Cidade"
            placeholder="field"
          />
          <TextField
            {...rest.AdddressStateFieldProps}
            sx={styles.field()}
            label="Estado"
            placeholder="field"
          />
          <TextField
            {...rest.AddressReferenceFieldProps}
            sx={styles.field()}
            label="Ponto de referência"
            placeholder="Ex. ao lado de uma farmácia"
          />
        </Box>

        <Box sx={styles.actionContainer}>
          <FormControlLabel
            sx={styles.checkboxAction}
            label="Usar como endereço principal"
            control={<Checkbox defaultChecked {...rest.CheckboxProps} />}
          />

          <Box sx={styles.buttonContainer}>
            <Button
              {...rest.CancelActionButtonProps}
              variant="outlined"
              color="secondary"
              sx={styles.cancelAction}
            >
              Voltar
            </Button>

            <Button
              {...rest.ConfirmActionButtonProps}
              variant="contained"
              color="primary"
              sx={styles.confirmAction}
            >
              Avançar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckoutAddressCreation;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: { xs: '4em' },
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
    gridTemplateRows: { xs: '1fr' },
    rowGap: { xs: '5em' },
    columnGap: { lg: '3em' },
  },

  field: (fullColumn = false) => {
    return {
      ...(fullColumn && {
        gridColumn: { lg: '1/3' },
      }),
    };
  },

  title: {
    fontSize: { xs: '1.6em', lg: '2em' },

    color: (theme) => theme.palette.secondary.main,
  },

  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '3em' },
  },

  checkboxAction: {
    fontSize: { xs: '1.4em', lg: '1.6em' },
  },

  buttonContainer: {
    display: 'flex',
    columnGap: { xs: '3em' },
  },

  cancelAction: {},
  confirmAction: {},
});
