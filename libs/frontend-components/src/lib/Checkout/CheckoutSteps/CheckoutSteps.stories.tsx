import { Story, Meta } from '@storybook/react';
import { CheckoutSteps, CheckoutStepsProps } from './CheckoutSteps';

export default {
  component: CheckoutSteps,
  title: 'Checkout/CheckoutSteps',
} as Meta;

const Template: Story<CheckoutStepsProps> = (args) => (
  <CheckoutSteps {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
