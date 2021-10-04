import { Story, Meta } from '@storybook/react';
import { CheckoutQuickview, CheckoutQuickviewProps } from './CheckoutQuickview';

export default {
  component: CheckoutQuickview,
  title: 'CheckoutQuickview',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutQuickviewProps> = (args) => (
  <CheckoutQuickview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
