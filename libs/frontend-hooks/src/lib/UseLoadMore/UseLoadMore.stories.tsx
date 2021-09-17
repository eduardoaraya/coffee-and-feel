import { Story, Meta } from '@storybook/react';
import { UseLoadMore, UseLoadMoreProps } from './UseLoadMore';

export default {
  component: UseLoadMore,
  title: 'UseLoadMore',
} as Meta;

const Template: Story<UseLoadMoreProps> = (args) => <UseLoadMore {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
