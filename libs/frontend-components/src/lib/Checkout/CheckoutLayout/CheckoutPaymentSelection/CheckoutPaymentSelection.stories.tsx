import { Story, Meta } from '@storybook/react';
import {
  CheckoutPaymentSelection,
  CheckoutPaymentSelectionProps,
} from './CheckoutPaymentSelection';

export default {
  component: CheckoutPaymentSelection,
  title: 'Checkout/Checkout Layout/CheckoutPaymentSelection',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutPaymentSelectionProps> = (args) => (
  <CheckoutPaymentSelection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { label: 'VISA ****6345' },
    { label: 'Novo cartão de crédito' },
    { label: 'Paypal' },
    { label: 'Pix' },
    { label: 'Boleto bancário' },
  ],
  activeIndex: 0,
};
