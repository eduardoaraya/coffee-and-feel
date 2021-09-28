import { Story, Meta } from '@storybook/react';
import {
  SubscriptionPageBenefitsSection,
  SubscriptionPageBenefitsSectionProps,
} from './SubscriptionPageBenefitsSection';

export default {
  component: SubscriptionPageBenefitsSection,
  title: 'SubscriptionPageBenefitsSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<SubscriptionPageBenefitsSectionProps> = (args) => (
  <SubscriptionPageBenefitsSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
