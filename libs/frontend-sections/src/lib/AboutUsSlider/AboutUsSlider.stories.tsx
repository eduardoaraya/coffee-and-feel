import { Story, Meta } from '@storybook/react';
import { AboutUsSlider, AboutUsSliderProps } from './AboutUsSlider';

export default {
  component: AboutUsSlider,
  title: 'AboutUsSlider',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<AboutUsSliderProps> = (args) => (
  <AboutUsSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  list: [
    { src: 'https://via.placeholder.com/1500', alt: 'an image' },
    { src: 'https://via.placeholder.com/1500', alt: 'an image' },
    { src: 'https://via.placeholder.com/1500', alt: 'an image' },
    { src: 'https://via.placeholder.com/1500', alt: 'an image' },
    { src: 'https://via.placeholder.com/1500', alt: 'an image' },
  ],
};
