import { Story, Meta } from '@storybook/react';
import { BlogOverviewPage, BlogOverviewPageProps } from './BlogOverviewPage';

export default {
  component: BlogOverviewPage,
  title: 'BlogOverviewPage',
} as Meta;

const Template: Story<BlogOverviewPageProps> = (args) => (
  <BlogOverviewPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
