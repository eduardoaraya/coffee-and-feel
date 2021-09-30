import { Story, Meta } from '@storybook/react';
import {
  AboutUsHistorySection,
  AboutUsHistorySectionProps,
} from './AboutUsHistorySection';

export default {
  component: AboutUsHistorySection,
  title: 'AboutUsHistorySection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<AboutUsHistorySectionProps> = (args) => (
  <AboutUsHistorySection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
