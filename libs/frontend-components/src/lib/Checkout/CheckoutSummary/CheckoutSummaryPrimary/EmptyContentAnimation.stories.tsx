import { Story, Meta } from '@storybook/react';
import {
  CheckoutSummaryPrimaryEmptyContent,
  CheckoutSummaryPrimaryEmptyContentProps,
} from './EmptyContentAnimation';

export default {
  component: CheckoutSummaryPrimaryEmptyContent,
  title:
    'Checkout/Checkout Summary/Checkout Summary Primary - Empty content animation',
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
