import { Story, Meta } from '@storybook/react';
import {
  CheckoutSubscriptionCoffee,
  CheckoutSubscriptionCoffeeProps,
} from './CheckoutSubscriptionCoffee';

export default {
  component: CheckoutSubscriptionCoffee,
  title: 'CheckoutSubscriptionCoffee',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutSubscriptionCoffeeProps> = (args) => (
  <CheckoutSubscriptionCoffee {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
