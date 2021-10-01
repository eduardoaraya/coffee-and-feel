import { Story, Meta } from '@storybook/react';
import { CheckoutLayout, CheckoutLayoutProps } from './CheckoutLayout';

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

export const Primary = Template.bind({});
Primary.args = {};
