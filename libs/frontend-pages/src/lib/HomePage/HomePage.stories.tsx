import { Story, Meta } from '@storybook/react';
import { HomePage } from './HomePage';
import { HomePageProps } from './contracts/HomePage.interface';

export default {
  component: HomePage,
  title: 'HomePage',
} as Meta;

const Template: Story<HomePageProps> = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
