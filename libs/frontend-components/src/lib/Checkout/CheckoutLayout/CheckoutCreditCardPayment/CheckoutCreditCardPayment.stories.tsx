import { Story, Meta } from '@storybook/react';
import {
  CheckoutCreditCardPayment,
  CheckoutCreditCardPaymentProps,
} from './CheckoutCreditCardPayment';

export default {
  component: CheckoutCreditCardPayment,
  title: 'CheckoutCreditCardPayment',
} as Meta;

const Template: Story<CheckoutCreditCardPaymentProps> = (args) => (
  <CheckoutCreditCardPayment {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
