import { Story, Meta } from '@storybook/react';
import { ReadingTime, ReadingTimeProps } from './ReadingTime';

export default {
  component: ReadingTime,
  title: 'ReadingTime',
} as Meta;

const Template: Story<ReadingTimeProps> = (args) => <ReadingTime {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
