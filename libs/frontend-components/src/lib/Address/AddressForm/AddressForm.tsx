import { Box, Button, TextField } from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';
import FormLayout from '../../FormLayout/FormLayout';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddressFormProps {}

export const AddressForm: React.FC<AddressFormProps> = (): JSX.Element => (
  <FormLayout
    actions={[
      <Button>Voltar</Button>,
      <Button color="primary" variant="contained">
        Cadastrar
      </Button>,
    ]}
  >
    <Box className="form-field">
      <TextField hiddenLabel label="CEP" defaultValue="" variant="outlined" />
      <TextField
        hiddenLabel
        label="Número"
        defaultValue=""
        variant="outlined"
      />
      <TextField
        hiddenLabel
        label="Complemento"
        defaultValue=""
        variant="outlined"
      />
    </Box>
    <Box className="form-field">
      <TextField
        hiddenLabel
        label="Endereço"
        defaultValue=""
        disabled={true}
        variant="outlined"
      />
    </Box>
    <Box className="form-field">
      <TextField
        hiddenLabel
        label="Bairro"
        defaultValue=""
        disabled={true}
        variant="outlined"
      />
      <TextField
        hiddenLabel
        label="Cidade"
        defaultValue=""
        disabled={true}
        variant="outlined"
      />
    </Box>
  </FormLayout>
);

export default AddressForm;

const getDefaultStyle = () => ({} as SxProps<Theme>);
