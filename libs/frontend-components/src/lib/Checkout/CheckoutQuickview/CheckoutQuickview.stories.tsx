import { Story, Meta } from '@storybook/react';
import { CheckoutQuickview, CheckoutQuickviewProps } from './CheckoutQuickview';
import { CheckoutItemProps } from '../CheckoutItem/CheckoutItem';

export default {
  component: CheckoutQuickview,
  title: 'Checkout/CheckoutQuickview',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutQuickviewProps> = (args) => (
  <CheckoutQuickview {...args} />
);

const checkoutItem: CheckoutItemProps = {
  img: {
    src: 'imgs/coffee-package.png',
    alt: 'This is an alt text',
  },
  title:
    ' Café expresso edição especial - 30 cápsulas aloha awooogaaaaa hello world',
  price: 15,
};

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  items: [
    { ...checkoutItem },
    { ...checkoutItem, price: 175 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  open: true,
  items: [],
};
