import { Story, Meta } from '@storybook/react';
import { CheckoutLayout, CheckoutLayoutProps } from './CheckoutLayout';
import { CheckoutItemProps } from '../CheckoutItem/CheckoutItem';

export default {
  component: CheckoutLayout,
  title: 'Checkout/CheckoutLayout',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutLayoutProps> = (args) => (
  <CheckoutLayout {...args} />
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
  steps: ['Identificação', 'Entrega', 'Pagamento'],
  activeStep: 0,
  items: [
    { ...checkoutItem },
    { ...checkoutItem, price: 175 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
    { ...checkoutItem, price: 1850 },
  ],
  open: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  open: true,
};
