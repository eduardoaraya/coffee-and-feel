import { Story, Meta } from '@storybook/react';
import { HomePage, HomePageProps } from './HomePage';

export default {
  component: HomePage,
  title: 'HomePage',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<HomePageProps> = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
