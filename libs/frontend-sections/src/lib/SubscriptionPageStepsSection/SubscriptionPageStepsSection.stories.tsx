import { Story, Meta } from '@storybook/react';
import {
  SubscriptionPageStepsSection,
  SubscriptionPageStepsSectionProps,
} from './SubscriptionPageStepsSection';

export default {
  component: SubscriptionPageStepsSection,
  title: 'SubscriptionPageStepsSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<SubscriptionPageStepsSectionProps> = (args) => (
  <SubscriptionPageStepsSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
