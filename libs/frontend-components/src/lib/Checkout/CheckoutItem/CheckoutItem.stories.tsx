import { Story, Meta } from '@storybook/react';
import { CheckoutItem, CheckoutItemProps } from './CheckoutItem';

export default {
  component: CheckoutItem,
  title: 'Checkout/CheckoutItem',
} as Meta;

const Template: Story<CheckoutItemProps> = (args) => <CheckoutItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
