import { Story, Meta } from '@storybook/react';
import { CheckoutItem, CheckoutItemProps } from './CheckoutItem';

export default {
  component: CheckoutItem,
  title: 'Checkout/CheckoutItem',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutItemProps> = (args) => <CheckoutItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
