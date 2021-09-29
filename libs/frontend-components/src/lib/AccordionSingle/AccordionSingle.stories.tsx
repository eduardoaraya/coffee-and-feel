import { Story, Meta } from '@storybook/react';
import { AccordionSingle, AccordionSingleProps } from './AccordionSingle';

export default {
  component: AccordionSingle,
  title: 'AccordionSingle',
} as Meta;

const Template: Story<AccordionSingleProps> = (args) => (
  <AccordionSingle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
