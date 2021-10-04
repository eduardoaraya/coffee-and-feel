import { Box, Radio, Typography } from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';
import { Delete, Edit } from '@material-ui/icons';
import { ListingWithAction } from '../../Layout/ListingWithAction/ListingWithAction';
import { AddressInterface } from '../AddressFormFields/AddressFormFields';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddressListProps {
  addressList: AddressInterface[];
  actions: JSX.Element;
}

export const AddressList: React.FC<AddressListProps> = ({
  addressList,
  actions,
}): JSX.Element => (
  <Box sx={getDefaultStyle()}>
    <Box className="actions">{actions}</Box>
    <Box className="address-content">
      <Typography fontWeight="bolder">Endereços cadastrados</Typography>
      <ListingWithAction
        emptyListMessage="Nenhum endereço cadastrado."
        data={addressList.map((address, key) => ({
          leftSide: <Radio checked={key === 0 ? true : false} />,
          id: key,
          active: key === 0 ? true : false,
          label: address.street,
          actions: [
            {
              icon: <Edit />,
              onClick: () => console.log('edit'),
            },
            {
              icon: <Delete />,
              onClick: () => console.log('delete'),
            },
          ],
        }))}
      />
    </Box>
  </Box>
);

export default AddressList;

const getDefaultStyle = () =>
  ({
    '.actions': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    '.address-content': {
      padding: '20px',
      '.listing-with-actions': {
        paddingRight: '20px',
        maxWidth: '570px',
        maxHeight: '400px',
        overflowY: 'scroll',
      },
    },
  } as SxProps<Theme>);
