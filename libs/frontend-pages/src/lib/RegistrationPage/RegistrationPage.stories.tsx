import { LayoutEcommerce } from '@atlascode/coffee-front-components';
import { Story, Meta } from '@storybook/react';
import { RegistrationPage, RegistrationPageProps } from './RegistrationPage';

export default {
  component: RegistrationPage,
  title: 'RegistrationPage',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <LayoutEcommerce>
        <Story />
      </LayoutEcommerce>
    ),
  ],
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
Primary.args = {} as RegistrationPageProps;
