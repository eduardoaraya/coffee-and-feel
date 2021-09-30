import { useState } from 'react';
import { Box } from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';
import AddressForm, { AddressFormProps } from '../AddressForm/AddressForm';
import AddressList from '../AddressList/AddressList';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddressMyAccountProps {}

export const AddressMyAccount: React.FC<AddressMyAccountProps> =
  (): JSX.Element => {
    const [addressList, setAddressList] =
      useState<AddressFormProps['address'][]>(addressData);

    return (
      <Box>
        {addressList.length === 0 ? (
          <AddressForm
            address={addressData[0]}
            submit={(data) => setAddressList([...addressData, data])}
          />
        ) : (
          <AddressList addressList={addressList} />
        )}
      </Box>
    );
  };

export default AddressMyAccount;

const getDefaultStyle = () => ({} as SxProps<Theme>);

const addressData = [
  {
    street: 'Rua Carlos Eduardo Monteiro de Lemos',
    number: 388,
    complement: 'BLOCO C 304',
    district: 'JP',
    city: 'Vitória',
    state: 'ES',
    cep: '29060110',
  },
] as AddressFormProps['address'][];
