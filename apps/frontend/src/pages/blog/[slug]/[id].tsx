import React from 'react';
import {
  BlogPageLayout,
  BlogPageLayoutProps,
} from '@atlascode/coffee-front-pages';
import { Box, BoxProps, Theme } from '@material-ui/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import Axios from 'axios';
import * as faker from 'faker';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

type BlogPageProps = Pick<
  BlogPageLayoutProps,
  'title' | 'content' | 'latestPosts' | 'featuredImage'
>;

const BlogPage = ({
  latestPosts,
  content,
  title,
  featuredImage,
}: BlogPageProps) => {
  return <BlogPageLayout />;
};

type BlogStaticPaths = GetStaticPaths<{ slug: string; id: string }>;

export const getStaticPaths: BlogStaticPaths = async ({
  defaultLocale,
  locales,
}) => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStactProps: GetStaticProps<BlogPageProps> = async ({
  defaultLocale,
  params,
  preview,
  locale,
}) => {
  return { props: {} };
};

export default BlogPage;

const blogPostsMockData = Array.from({ length: 15 }).map((value, index) => {
  return {
    id: faker.datatype.number(),
    alt: faker.lorem.sentences(),
    content: faker.lorem.paragraphs(Math.floor(Math.random() * 55 + 1)),
    date: faker.date.recent(),
    img: faker.image.business(1000, 600),
    title: faker.lorem.sentence(),
  } as {
    id: number;
    title: string;
    content: string;
    img: string;
    alt: string;
    date: Date;
  };
});

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
