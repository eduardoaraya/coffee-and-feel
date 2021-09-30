import { SxProps, Theme } from '@material-ui/system';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddressListProps {}

export const AddressList: React.FC<AddressListProps> = (): JSX.Element => (
  <div>List</div>
);

export default AddressList;

const getDefaultStyle = () => ({} as SxProps<Theme>);
