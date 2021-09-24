import { BlogOverviewPage } from '@atlascode/coffee-front-pages';
import { GetStaticProps } from 'next';
import React from 'react';
import Axios, { AxiosResponse } from 'axios';
import { BlogPost } from '../../../mocks/data/blog';
import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BlogIndexPageProps {
  posts: BlogPost[];
}

const SHOW_ALL = 'Todos';

const BlogIndexPage = ({ posts = [] }: BlogIndexPageProps) => {
  const [categoriestList, setCategoriesList] = React.useState<{
    [key: string]: unknown[];
  }>({ [SHOW_ALL]: [] });
  const [uniqCategories, setUniqueCategories] = React.useState<string[]>([]);
  const [activeCategory, setActiveCategory] = React.useState<string>(SHOW_ALL);

  React.useEffect(() => {
    const allCategories = posts.map((value, index) => {
      return value.category;
    });

    const uniqueCategories = _.uniq(allCategories);

    const categorizedPosts = {};

    uniqueCategories.forEach((category, index) => {
      const postCategoryLocal = posts.filter((post, index) => {
        return post.category === category;
      });

      categorizedPosts[category] = postCategoryLocal;
    });

    setCategoriesList({ ...categorizedPosts, [SHOW_ALL]: [...posts] });
    setUniqueCategories(uniqueCategories);
  }, [posts]);

  const handleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <React.Fragment>
      <BlogOverviewPage
        selectProps={{
          options: [SHOW_ALL, ...uniqCategories],
          value: activeCategory,
          onChange: (e) => handleActiveCategory(e.target.value),
        }}
        posts={(categoriestList[activeCategory] as BlogPost[]).map(
          (value, index) => {
            return {
              readingTime: 3,
              src: value.imgURL,
              title: value.title,
              tags: [value.category],
              content: value.content,
            };
          }
        )}
      />
    </React.Fragment>
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
