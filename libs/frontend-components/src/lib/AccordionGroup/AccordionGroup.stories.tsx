import { Story, Meta } from '@storybook/react';
import { AccordionGroup, AccordionGroupProps } from './AccordionGroup';

export default {
  component: AccordionGroup,
  title: 'AccordionGroup',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<AccordionGroupProps> = (args) => (
  <AccordionGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
