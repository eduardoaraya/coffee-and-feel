import { Story, Meta } from '@storybook/react';
import { CheckoutSummary, CheckoutSummaryProps } from './CheckoutSummary';
import { CheckoutItemProps } from '../CheckoutItem/CheckoutItem';

export default {
  component: CheckoutSummary,
  title: 'Checkout/CheckoutSummary',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutSummaryProps> = (args) => (
  <CheckoutSummary {...args} />
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
  items: [
    { ...checkoutItem },
    { ...checkoutItem, price: 175 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
  ],
};
