import { Story, Meta } from '@storybook/react';
import {
  CheckoutSummaryPrimaryEmptyContent,
  CheckoutSummaryPrimaryEmptyContentProps,
} from './EmptyContentAnimation';

export default {
  component: CheckoutSummaryPrimaryEmptyContent,
  title: 'Checkout/CheckoutSummaryEmptyContent',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CheckoutSummaryPrimaryEmptyContentProps> = (args) => (
  <CheckoutSummaryPrimaryEmptyContent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
