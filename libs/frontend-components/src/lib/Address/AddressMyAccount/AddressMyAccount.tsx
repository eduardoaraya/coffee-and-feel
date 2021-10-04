import { FormEvent, useCallback, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';
import {
  AddressFormFields,
  AddressInterface,
} from '../AddressFormFields/AddressFormFields';
import AddressList from '../AddressList/AddressList';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddressMyAccountProps {}

export const AddressMyAccount: React.FC<AddressMyAccountProps> =
  (): JSX.Element => {
    const [addressList, setAddressList] = useState<AddressInterface[]>([]);
    const [mode, setMode] = useState<'new' | 'edit' | 'list'>('list');

    const addAddress = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        type KeyField = keyof AddressInterface;
        const fields = Object.keys(addressDataDefault) as KeyField[];
        const formData = fields.reduce(
          (prev: AddressInterface, current: KeyField) => {
            const value = e.target as HTMLFormElement;
            const data =
              (value.elements.namedItem(current) as HTMLInputElement) ?? null;

            if (data) {
              prev = {
                ...prev,
                [current]: data.value,
              };
            }
            return prev;
          },
          {} as AddressInterface
        );
        setAddressList([...addressList, formData]);
        setMode('list');
      },
      [addressList]
    );

    return (
      <Box sx={getDefaultStyle()}>
        {mode === 'new' ? (
          <Box component="form" className="form-address" onSubmit={addAddress}>
            <AddressFormFields
              actions={
                <Box className="actions">
                  <Button onClick={() => setMode('list')}>Voltar</Button>
                  <Button variant="contained" type="submit">
                    Cadastrar
                  </Button>
                </Box>
              }
              address={addressDataDefault}
            ></AddressFormFields>
          </Box>
        ) : (
          <AddressList
            actions={
              <Button onClick={() => setMode('new')} variant="contained">
                Adicionar novo endereço
              </Button>
            }
            addressList={addressList}
          ></AddressList>
        )}
      </Box>
    );
  };

export default AddressMyAccount;

const getDefaultStyle = () =>
  ({
    height: '100%',
    '.form-address': {
      height: '100%',
    },
  } as SxProps<Theme>);

const addressDataDefault = {
  street: '',
  number: 0,
  complement: '',
  district: '',
  city: '',
  state: '',
  cep: '',
} as AddressInterface;
