import { Story, Meta } from '@storybook/react';
import {
  CheckoutQuickviewEmptyContent,
  CheckoutQuickviewEmptyContentProps,
} from './CheckoutQuickviewEmptyContent';

export default {
  component: CheckoutQuickviewEmptyContent,
  title: 'Checkout/CheckoutQuickviewEmptyContent',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutQuickviewEmptyContentProps> = (args) => (
  <CheckoutQuickviewEmptyContent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
