import { Story, Meta } from '@storybook/react';
import {
  SubscriptionPageDefenseSection,
  SubscriptionPageDefenseSectionProps,
} from './SubscriptionPageDefenseSection';

export default {
  component: SubscriptionPageDefenseSection,
  title: 'SubscriptionPageDefenseSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<SubscriptionPageDefenseSectionProps> = (args) => (
  <SubscriptionPageDefenseSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
