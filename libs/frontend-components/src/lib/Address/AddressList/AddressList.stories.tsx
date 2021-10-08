import { Story, Meta } from '@storybook/react';
import { AddressList, AddressListProps } from './AddressList';

export default {
  component: AddressList,
  title: 'AddressList',
} as Meta;

const Template: Story<AddressListProps> = (args) => <AddressList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
