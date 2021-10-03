import { Story, Meta } from '@storybook/react';
import { InputWithButton, InputWithButtonProps } from './InputWithButton';

export default {
  component: InputWithButton,
  title: 'Inputs/InputWithButton',
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<InputWithButtonProps> = (args) => (
  <InputWithButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  ButtonProps: {
    loading: true,
  },
};
Secondary.storyName = 'Loading state';
