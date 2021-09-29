import { Story, Meta } from '@storybook/react';
import {
  SubscriptionSlider,
  SubscriptionSliderProps,
} from './SubscriptionSlider';

export default {
  component: SubscriptionSlider,
  title: 'SubscriptionSlider',
} as Meta;

const Template: Story<SubscriptionSliderProps> = (args) => (
  <SubscriptionSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
