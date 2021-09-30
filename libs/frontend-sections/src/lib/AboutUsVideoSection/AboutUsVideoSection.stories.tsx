import { Story, Meta } from '@storybook/react';
import {
  AboutUsVideoSection,
  AboutUsVideoSectionProps,
} from './AboutUsVideoSection';

export default {
  component: AboutUsVideoSection,
  title: 'AboutUsVideoSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<AboutUsVideoSectionProps> = (args) => (
  <AboutUsVideoSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
