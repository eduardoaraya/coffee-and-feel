import { Story, Meta } from '@storybook/react';
import { CheckoutHeader, CheckoutHeaderProps } from './CheckoutHeader';

export default {
  component: CheckoutHeader,
  title: 'Checkout/CheckoutHeader',
} as Meta;

const Template: Story<CheckoutHeaderProps> = (args) => (
  <CheckoutHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
