import { Box } from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';
import AddressForm from '../AddressForm/AddressForm';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddressMyAccountProps {}

export const AddressMyAccount: React.FC<AddressMyAccountProps> =
  (): JSX.Element => (
    <Box>
      <AddressForm />
    </Box>
  );

export default AddressMyAccount;

const getDefaultStyle = () => ({} as SxProps<Theme>);
