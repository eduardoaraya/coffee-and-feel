import { Story, Meta } from '@storybook/react';
import { CreditCardView, CreditCardViewProps } from './CreditCardView';

export default {
  component: CreditCardView,
  title: 'CreditCardView',
} as Meta;

const Template: Story<CreditCardViewProps> = (args) => (
  <CreditCardView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
