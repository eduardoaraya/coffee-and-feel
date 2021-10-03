import { Story, Meta } from '@storybook/react';
import {
  CheckoutMenuOverview,
  CheckoutMenuOverviewProps,
} from './CheckoutMenuOverview';

export default {
  component: CheckoutMenuOverview,
  title: 'Checkout/CheckoutMenuOverview',
} as Meta;

const Template: Story<CheckoutMenuOverviewProps> = (args) => (
  <CheckoutMenuOverview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
