import { Story, Meta } from '@storybook/react';
import {
  CheckoutSummaryBase,
  CheckoutSummaryBaseProps,
} from './CheckoutSummaryBase';

export default {
  component: CheckoutSummaryBase,
  title: 'Checkout/CheckoutSummaryBase',
} as Meta;

const Template: Story<CheckoutSummaryBaseProps> = (args) => (
  <CheckoutSummaryBase {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
