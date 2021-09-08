import { Story, Meta } from '@storybook/react';
import { RegistrationPage, RegistrationPageProps } from './RegistrationPage';

export default {
  component: RegistrationPage,
  title: 'RegistrationPage',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<RegistrationPageProps> = (args) => (
  <RegistrationPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
