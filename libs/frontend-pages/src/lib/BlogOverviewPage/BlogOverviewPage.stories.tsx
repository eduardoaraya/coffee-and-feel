import { Story, Meta } from '@storybook/react';
import { BlogOverviewPage, BlogOverviewPageProps } from './BlogOverviewPage';
import { LayoutEcommerce } from '@atlascode/coffee-front-components';

export default {
  component: BlogOverviewPage,
  title: 'BlogOverviewPage',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <LayoutEcommerce>
        <Story />
      </LayoutEcommerce>
    ),
  ],
} as Meta;

const Template: Story<BlogOverviewPageProps> = (args) => (
  <BlogOverviewPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
