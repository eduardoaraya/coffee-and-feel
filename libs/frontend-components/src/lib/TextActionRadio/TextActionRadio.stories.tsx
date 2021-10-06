import { Story, Meta } from '@storybook/react';
import { TextActionRadio, TextActionRadioProps } from './TextActionRadio';

export default {
  component: TextActionRadio,
  title: 'Inputs/TextActionRadio',
} as Meta;

const Template: Story<TextActionRadioProps> = (args) => (
  <TextActionRadio {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
