import { BlogOverviewPage } from '@atlascode/coffee-front-pages';
import { GetStaticProps } from 'next';
import React from 'react';
import Axios, { AxiosResponse } from 'axios';
import { BlogPost } from '../../../mocks/data/blog';
import { getReadingTime } from '@atlascode/coffee-shared-helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BlogIndexPageProps {
  posts: BlogPost[];
}

const BlogIndexPage = (props: BlogIndexPageProps) => {
  return (
    <BlogOverviewPage
      posts={props.posts.map((value, index) => {
        return {
          readingTime: false,
          src: value.imgURL,
          title: value.title,
          BlogPostInfoProps: {
            tags: [value.category],
            content: value.content,
            readingTime: true,
          },
        };
      })}
    />
  );
};

export default BlogIndexPage;

// eslint-disable-next-line @typescript-eslint/ban-types
export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async ({
  defaultLocale,
  locale,
  locales,
  params,
  preview,
  previewData,
}) => {
  const blogRequest: AxiosResponse<BlogPost[]> = await Axios.get(
    'https://mockbackend.com/api/blog'
  );

  return {
    props: {
      posts: blogRequest.data,
    },
  };
};
