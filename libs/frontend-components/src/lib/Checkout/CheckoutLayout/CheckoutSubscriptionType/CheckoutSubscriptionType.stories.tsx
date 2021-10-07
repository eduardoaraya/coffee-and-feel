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
        { label: 'Assinatura standard', active: true },
        { label: 'Assinatura premium', active: false },
      ],
    },
    {
      categoryLabel: 'Semestral',
      subscriptions: [
        { label: 'Assinatura standard', active: false },
        { label: 'Assinatura premium', active: true },
      ],
    },
  ],
};
