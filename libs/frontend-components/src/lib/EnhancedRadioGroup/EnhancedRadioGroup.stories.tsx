import { Story, Meta } from '@storybook/react';
import {
  EnhancedRadioGroup,
  EnhancedRadioGroupProps,
} from './EnhancedRadioGroup';

export default {
  component: EnhancedRadioGroup,
  title: 'Inputs/EnhancedRadioGroup',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<EnhancedRadioGroupProps> = (args) => (
  <EnhancedRadioGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
