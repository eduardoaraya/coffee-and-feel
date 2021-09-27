import { Story, Meta } from '@storybook/react';
import { BlogPostCard, BlogPostCardProps } from './BlogPostCard';

export default {
  component: BlogPostCard,
  title: 'BlogPostCard',
} as Meta;

const Template: Story<BlogPostCardProps> = (args) => <BlogPostCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  leftAligned: false,
  timeHidden: false,
} as BlogPostCardProps;
