import { Story, Meta } from '@storybook/react';
import { SubscriptionClubAboutSection } from './SubscriptionClubAboutSection';

export default {
  component: SubscriptionClubAboutSection,
  title: 'SubscriptionClubAboutSection',
} as Meta;

const Template: Story<> = (args) => <SubscriptionClubAboutSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
