import { LayoutEcommerce } from '@atlascode/coffee-front-components';
import { Story, Meta } from '@storybook/react';
import { LoginPage, LoginPageProps } from './LoginPage';

export default {
  component: LoginPage,
  title: 'LoginPage',
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
} as Meta;

const Template: Story<LoginPageProps> = (args) => <LoginPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
