import { Story, Meta } from '@storybook/react';
import {
  CheckoutPaymentSelection,
  CheckoutPaymentSelectionProps,
} from './CheckoutPaymentSelection';

export default {
  component: CheckoutPaymentSelection,
  title: 'Checkout/CheckoutPaymentSelection',
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
Primary.args = {};
