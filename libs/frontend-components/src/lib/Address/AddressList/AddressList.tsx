import { Box, Button } from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';
import { AddressFormProps } from '../AddressForm/AddressForm';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddressListProps {
  addressList: AddressFormProps['address'][];
}

export const AddressList: React.FC<AddressListProps> = ({
  addressList,
}): JSX.Element => (
  <Box sx={getDefaultStyle()}>
    <Button>Cadastrar novo endereço</Button>
    <Box className="address-list">
      {addressList.map((address) => (
        <Box className="address-item">{address.street}</Box>
      ))}
    </Box>
  </Box>
);

export default AddressList;

const getDefaultStyle = () => ({} as SxProps<Theme>);
