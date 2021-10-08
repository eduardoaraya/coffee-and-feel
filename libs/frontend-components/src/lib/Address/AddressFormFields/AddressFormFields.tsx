import { useDebounce } from '@atlascode/coffee-frontend-utility';
import { Box, Button, ButtonProps, TextField } from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';
import FormGrid from '../../Layout/FormGrid/FormGrid';
import axios from 'axios';
import { KeyboardEventHandler, MouseEvent } from 'react';

type Event = KeyboardEventHandler & { target: HTMLInputElement };
export interface AddressInterface {
  cep: string;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
}

export interface AddressFormFieldsProps {
  address: AddressInterface;
  actions: JSX.Element;
}

export interface ActionsForm extends ButtonProps {
  label: string;
  type: 'button' | 'submit';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  submit?: (address?: AddressInterface | null) => void;
}

export const AddressFormFields: React.FC<AddressFormFieldsProps> = ({
  address = {},
  actions,
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

  const handleChangeCep = useDebounce(([event]: Event[]) => {
    const CHARACTER_LIMIT = 8;
    if (event && event.target.value.length >= CHARACTER_LIMIT)
      getAddress(event.target.value);
  }, 300);

  return (
    <FormGrid actionsArea={actions}>
      <Box className="form-field">
        <TextField
          hiddenLabel
          label="CEP"
          onKeyUp={handleChangeCep}
          defaultValue={address.cep}
          variant="outlined"
          name="cep"
          required
        />
        <TextField
          hiddenLabel
          label="Número"
          defaultValue={address.number}
          variant="outlined"
          name="number"
          required
        />
        <TextField
          hiddenLabel
          label="Complemento"
          defaultValue={address.complement}
          variant="outlined"
          name="complement"
        />
      </Box>
      <Box className="form-field">
        <TextField
          hiddenLabel
          label="Endereço"
          defaultValue={address.street}
          variant="outlined"
          name="street"
          required
        />
        <TextField
          hiddenLabel
          label="Bairro"
          defaultValue={address.district}
          variant="outlined"
          name="district"
          required
        />
      </Box>
      <Box className="form-field">
        <TextField
          hiddenLabel
          label="Estado"
          defaultValue={address.state}
          variant="outlined"
          name="state"
          required
        />
        <TextField
          hiddenLabel
          label="Cidade"
          defaultValue={address.city}
          variant="outlined"
          name="city"
          required
        />
      </Box>
    </FormGrid>
  );
};

export default AddressFormFields;

const getDefaultStyle = () => ({} as SxProps<Theme>);
