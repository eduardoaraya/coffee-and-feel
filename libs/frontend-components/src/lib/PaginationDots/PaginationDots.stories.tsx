import { Story, Meta } from '@storybook/react';
import { PaginationDots, PaginationDotsProps } from './PaginationDots';

export default {
  component: PaginationDots,
  title: 'PaginationDots',
} as Meta;

const Template: Story<PaginationDotsProps> = (args) => (
  <PaginationDots {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  amount: 5,
  activeIndex: 0,
} as PaginationDotsProps;
