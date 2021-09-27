import React, { ReactElement } from 'react';
import {
  BlogPageLayout,
  BlogPageLayoutProps,
} from '@atlascode/coffee-front-pages';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BlogPost } from '../../../../mocks/data/blog-mock';
import { convertToSlug } from '@atlascode/coffee-shared-helpers';
import ServiceProvider from '@atlascode/coffee-frontend-services';
import { LayoutEcommerce } from '@atlascode/coffee-front-components';

type BlogPageProps = Pick<
  BlogPageLayoutProps,
  'title' | 'content' | 'latestPosts' | 'featuredImage'
>;

const BlogPage = (props: BlogPageProps) => {
  return (
    <div className="page">
      <BlogPageLayout {...props} />
    </div>
  );
};

export default BlogPage;

const service = ServiceProvider.BlogService.default();

type BlogStaticPaths = GetStaticPaths<{ slug: string; id: string }>;

export const getStaticPaths: BlogStaticPaths = async ({
  defaultLocale,
  locales,
}) => {
  const blogRequest: BlogPost[] = await service.getAllPosts();
  return {
    paths: blogRequest.map((value, index) => {
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
  const { id } = params;
  try {
    const { content, imgURL, title } = await service.getPost(id.toString());
    return {
      props: {
        content,
        title,
        featuredImage: imgURL,
        latestPosts: [],
      },
    };
  } catch {
    return {
      props: {
        content: null,
        title: null,
        featuredImage: null,
        latestPosts: [],
      },
    };
  }
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};
