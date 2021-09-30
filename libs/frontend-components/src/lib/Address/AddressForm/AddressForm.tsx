import { useDebounce } from '@atlascode/coffee-frontend-utility';
import { Box, Button, TextField } from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';
import { FormEvent, KeyboardEventHandler } from 'react';
import FormLayout from '../../FormLayout/FormLayout';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddressFormProps {
  address: {
    cep: string;
    street: string;
    number: number;
    complement: string;
    district: string;
    city: string;
    state: string;
  };
  submit: (address: AddressFormProps['address']) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  address,
  submit,
}): JSX.Element => {
  const getAddress = async (cep: string) => {
    try {
      const response = await axios.get(
        `http://www.viacep.com.br/ws/${cep}/json`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      // eslint-disable-next-line no-empty
    } catch (err) {}
  };

  type Event = KeyboardEventHandler & { target: HTMLInputElement };

  const handleChangeCep = useDebounce(([event]: Event[]) => {
    const CHARACTER_LIMIT = 8;
    if (event && event.target.value.length >= CHARACTER_LIMIT)
      getAddress(event.target.value);
  }, 300);

  return (
    <FormLayout
      actions={[
        <Button key="1">Voltar</Button>,
        <Button
          onClick={() => submit(address)}
          key="2"
          color="primary"
          variant="contained"
        >
          Cadastrar
        </Button>,
      ]}
    >
      <Box className="form-field">
        <TextField
          hiddenLabel
          label="CEP"
          onKeyUp={handleChangeCep}
          defaultValue={address.cep}
          variant="outlined"
        />
        <TextField
          hiddenLabel
          label="Número"
          defaultValue={address.number}
          variant="outlined"
        />
        <TextField
          hiddenLabel
          label="Complemento"
          defaultValue={address.complement}
          variant="outlined"
        />
      </Box>
      <Box className="form-field">
        <TextField
          hiddenLabel
          label="Endereço"
          defaultValue={address.street}
          variant="outlined"
        />
        <TextField
          hiddenLabel
          label="Bairro"
          defaultValue={address.district}
          variant="outlined"
        />
      </Box>
      <Box className="form-field">
        <TextField
          hiddenLabel
          label="Estado"
          defaultValue={address.state}
          variant="outlined"
        />
        <TextField
          hiddenLabel
          label="Cidade"
          defaultValue={address.city}
          variant="outlined"
        />
      </Box>
    </FormLayout>
  );
};

export default AddressForm;

const getDefaultStyle = () => ({} as SxProps<Theme>);
