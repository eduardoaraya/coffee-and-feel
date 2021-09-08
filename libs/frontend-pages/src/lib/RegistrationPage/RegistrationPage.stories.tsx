import { Story, Meta } from '@storybook/react';
import { RegistrationPage, RegistrationPageProps } from './RegistrationPage';

export default {
  component: RegistrationPage,
  title: 'RegistrationPage',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    activeIndex: {
      control: {
        type: 'range',
        min: 0,
        max: 2,
        step: 1,
      },
    },
  },
} as Meta;

const Template: Story<RegistrationPageProps> = (args) => (
  <RegistrationPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
