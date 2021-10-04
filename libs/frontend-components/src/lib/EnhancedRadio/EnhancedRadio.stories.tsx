import { Story, Meta } from '@storybook/react';
import { EnhancedRadio, EnhancedRadioProps } from './EnhancedRadio';

export default {
  component: EnhancedRadio,
  title: 'Inputs/EnhancedRadio',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<EnhancedRadioProps> = (args) => (
  <EnhancedRadio {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  active: false,
};
