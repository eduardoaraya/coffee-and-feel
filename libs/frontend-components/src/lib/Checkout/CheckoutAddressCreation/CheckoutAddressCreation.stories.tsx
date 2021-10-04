import { Story, Meta } from '@storybook/react';
import {
  CheckoutAddressCreation,
  CheckoutAddressCreationProps,
} from './CheckoutAddressCreation';

export default {
  component: CheckoutAddressCreation,
  title: 'Checkout/CheckoutAddressCreation',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutAddressCreationProps> = (args) => (
  <CheckoutAddressCreation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
