import { Story, Meta } from '@storybook/react';
import {
  CheckoutSubscriptionType,
  CheckoutSubscriptionTypeProps,
} from './CheckoutSubscriptionType';

export default {
  component: CheckoutSubscriptionType,
  title: 'Checkout/Checkout Layout/CheckoutSubscriptionType',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutSubscriptionTypeProps> = (args) => (
  <CheckoutSubscriptionType {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  subscriptions: [
    {
      categoryLabel: 'Mensal',
      subscriptions: [
        { label: 'Assinatura standard', active: true, price: 55 },
        { label: 'Assinatura premium', active: false, price: 120 },
      ],
    },
    {
      categoryLabel: 'Semestral',
      subscriptions: [
        { label: 'Assinatura standard', active: false, price: 800 },
        { label: 'Assinatura premium', active: true, price: 9001 },
      ],
    },
  ],
};
