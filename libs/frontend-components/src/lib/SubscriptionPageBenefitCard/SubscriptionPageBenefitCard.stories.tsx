import { Story, Meta } from '@storybook/react';
import {
  SubscriptionPageBenefitCard,
  SubscriptionPageBenefitCardProps,
} from './SubscriptionPageBenefitCard';

export default {
  component: SubscriptionPageBenefitCard,
  title: 'SubscriptionPageBenefitCard',
} as Meta;

const Template: Story<SubscriptionPageBenefitCardProps> = (args) => (
  <SubscriptionPageBenefitCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
