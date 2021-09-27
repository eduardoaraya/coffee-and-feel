import { Story, Meta } from '@storybook/react';
import { BlogPageLayout, BlogPageLayoutProps } from './BlogPageLayout';
import * as faker from 'faker';
import { BlogPostCardProps } from '@atlascode/coffee-front-components';
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
  title: 'Lorem ipsum title dundun lelel',
  featuredImage: faker.image.business(1000, 600),
  tags: ['marketing digital', 'teste 1', 'teste2'],
  latestPosts: Array.from({ length: 10 }).map((value, index) => {
    return {
      readingTime: true,
      src: `${faker.image.business(300, 300)}?random=${Math.floor(
        Math.random() * 1000
      )}`,
      title: faker.lorem.sentence(),
      content: `${faker.lorem.paragraphs(Math.floor(Math.random() * 75 + 1))}`,
    } as BlogPostCardProps;
  }),
} as BlogPageLayoutProps;
