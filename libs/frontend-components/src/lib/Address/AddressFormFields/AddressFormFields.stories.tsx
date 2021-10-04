import { Story, Meta } from '@storybook/react';
import { AddressFormFields, AddressFormFieldsProps } from './AddressFormFields';

export default {
  component: AddressFormFields,
  title: 'Customer dashboard/Address/AddressFormFields',
} as Meta;

const Template: Story<AddressFormFieldsProps> = (args) => (
  <AddressFormFields {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
