import { Story, Meta } from '@storybook/react';
import { CheckoutSuccess, CheckoutSuccessProps } from './CheckoutSuccess';

export default {
  component: CheckoutSuccess,
  title: 'Checkout/Checkout Layout/CheckoutSuccess',
} as Meta;

const Template: Story<CheckoutSuccessProps> = (args) => (
  <CheckoutSuccess {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
