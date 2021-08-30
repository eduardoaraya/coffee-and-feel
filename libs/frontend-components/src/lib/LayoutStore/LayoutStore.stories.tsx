import { Story, Meta } from '@storybook/react';
import { LayoutStore } from './LayoutStore';

export default {
  component: LayoutStore,
  title: 'LayoutStore',
} as Meta;

const Template: Story<> = (args) => <LayoutStore {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
