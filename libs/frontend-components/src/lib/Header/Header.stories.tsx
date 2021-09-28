import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './Header';

export default {
  component: Header,
  title: 'Header',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
