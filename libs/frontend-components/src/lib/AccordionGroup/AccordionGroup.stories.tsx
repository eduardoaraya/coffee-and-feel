import { Story, Meta } from '@storybook/react';
import { AccordionGroup, AccordionGroupProps } from './AccordionGroup';

export default {
  component: AccordionGroup,
  title: 'AccordionGroup',
} as Meta;

const Template: Story<AccordionGroupProps> = (args) => (
  <AccordionGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
