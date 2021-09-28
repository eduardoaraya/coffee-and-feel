import { Story, Meta } from '@storybook/react';
import { TestimonialSlider, TestimonialSliderProps } from './TestimonialSlider';

export default {
  component: TestimonialSlider,
  title: 'TestimonialSlider',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<TestimonialSliderProps> = (args) => (
  <TestimonialSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
