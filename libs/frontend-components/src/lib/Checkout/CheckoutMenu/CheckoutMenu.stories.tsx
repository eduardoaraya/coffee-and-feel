import { Story, Meta } from '@storybook/react';
import { CheckoutMenu, CheckoutMenuProps } from './CheckoutMenu';

export default {
  component: CheckoutMenu,
  title: 'Checkout/CheckoutMenu',
} as Meta;

const Template: Story<CheckoutMenuProps> = (args) => <CheckoutMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
