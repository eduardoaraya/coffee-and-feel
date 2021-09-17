import React from 'react';
import {
  BlogPageLayout,
  BlogPageLayoutProps,
} from '@atlascode/coffee-front-pages';
import { GetStaticPaths, GetStaticProps } from 'next';
import Axios, { AxiosResponse } from 'axios';
import { BlogPost } from '../../../../mocks/data/blog';
import { convertToSlug } from '@atlascode/coffee-shared-helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

type BlogPageProps = Pick<
  BlogPageLayoutProps,
  'title' | 'content' | 'latestPosts' | 'featuredImage'
>;

const BlogPage = (props: BlogPageProps) => {
  return <BlogPageLayout {...props} />;
};

type BlogStaticPaths = GetStaticPaths<{ slug: string; id: string }>;

export const getStaticPaths: BlogStaticPaths = async ({
  defaultLocale,
  locales,
}) => {
  const blogRequest: AxiosResponse<BlogPost[]> = await Axios.get(
    'https://mockbackend.com/api/blog'
  );

  console.log(blogRequest);

  return {
    paths: blogRequest.data.map((value, index) => {
      return {
        params: {
          id: `${value.id}`,
          slug: convertToSlug(value.title),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  defaultLocale,
  params,
  preview,
  locale,
}) => {
  const findOneBlogRequest: AxiosResponse<BlogPost> = await Axios.get(
    `https://mockbackend.com/api/blog/${params.id}`
  );

  const findOneBlogRequestData: BlogPost = findOneBlogRequest.data;

  return {
    props: {
      content: findOneBlogRequestData.content,
      featuredImage: findOneBlogRequestData.imgURL,
      latestPosts: [],
      title: findOneBlogRequestData.title,
    },
  };
};

export default BlogPage;

type RequiredKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

// eslint-disable-next-line @typescript-eslint/ban-types
type OptionalPropertyOf<T extends object> = Exclude<
  {
    [K in keyof T]: T extends Record<K, T[K]> ? never : K;
  }[keyof T],
  undefined
>;
