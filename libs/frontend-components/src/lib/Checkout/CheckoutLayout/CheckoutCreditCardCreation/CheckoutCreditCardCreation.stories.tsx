import { Story, Meta } from '@storybook/react';
import {
  CheckoutCreditCardCreation,
  CheckoutCreditCardCreationProps,
} from './CheckoutCreditCardCreation';

export default {
  component: CheckoutCreditCardCreation,
  title: 'Checkout/Checkout Layout/CheckoutCreditCardCreation',
} as Meta;

const Template: Story<CheckoutCreditCardCreationProps> = (args) => (
  <CheckoutCreditCardCreation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
