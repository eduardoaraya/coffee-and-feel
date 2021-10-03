import { Story, Meta } from '@storybook/react';
import { CheckoutDiscount, CheckoutDiscountProps } from './CheckoutDiscount';

export default {
  component: CheckoutDiscount,
  title: 'Checkout/CheckoutDiscount',
} as Meta;

const Template: Story<CheckoutDiscountProps> = (args) => (
  <CheckoutDiscount {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
