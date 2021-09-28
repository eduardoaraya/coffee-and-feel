import { Forward } from '@material-ui/icons';
import { Story, Meta } from '@storybook/react';
import { CircleIconButton, CircleIconButtonProps } from './CircleIconButton';

export default {
  component: CircleIconButton,
  title: 'CircleIconButton',
} as Meta;

const Template: Story<CircleIconButtonProps> = (args) => (
  <CircleIconButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  icon: Forward,
  elevation: 3,
};
