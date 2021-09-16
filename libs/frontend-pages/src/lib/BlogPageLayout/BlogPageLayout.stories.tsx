import { Story, Meta } from '@storybook/react';
import { BlogPageLayout, BlogPageLayoutProps } from './BlogPageLayout';
import * as faker from 'faker';

export default {
  component: BlogPageLayout,
  title: 'BlogPageLayout',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<BlogPageLayoutProps> = (args) => (
  <BlogPageLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  content: faker.lorem.lines(50),
  readingTime: true,
  title: 'Lorem ipsum title dundun lelel',
  thumbnail: faker.image.business(1000, 6000),
  featuredImage: faker.image.business(1000, 600),
  tags: ['marketing digital', 'teste 1', 'teste2'],
} as BlogPageLayoutProps;
