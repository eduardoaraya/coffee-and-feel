import { Story, Meta } from '@storybook/react';
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider';

export default {
  component: ThemeProvider,
  title: 'ThemeProvider',
} as Meta;

const Template: Story<ThemeProviderProps> = (args) => (
  <ThemeProvider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
