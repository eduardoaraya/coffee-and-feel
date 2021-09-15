import { Story, Meta } from '@storybook/react';
import { BlogPageLayout, BlogPageLayoutProps } from './BlogPageLayout';

export default {
  component: BlogPageLayout,
  title: 'BlogPageLayout',
} as Meta;

const Template: Story<BlogPageLayoutProps> = (args) => (
  <BlogPageLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
