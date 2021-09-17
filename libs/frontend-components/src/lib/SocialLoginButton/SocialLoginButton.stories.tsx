import { Story, Meta } from '@storybook/react';
import { SocialLoginButton, SocialLoginButtonProps } from './SocialLoginButton';

export default {
  component: SocialLoginButton,
  title: 'SocialLoginButton',
} as Meta;

const Template: Story<SocialLoginButtonProps> = (args) => (
  <SocialLoginButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
