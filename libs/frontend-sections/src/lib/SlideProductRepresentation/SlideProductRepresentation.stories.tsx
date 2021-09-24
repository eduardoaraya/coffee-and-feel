import { Story, Meta } from '@storybook/react';
import {
  SlideProductRepresentation,
  SlideProductRepresentationProps,
} from './SlideProductRepresentation';

export default {
  component: SlideProductRepresentation,
  title: 'SlideProductRepresentation',
} as Meta;

const Template: Story<SlideProductRepresentationProps> = (args) => (
  <SlideProductRepresentation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
