import { BlogOverviewPage } from '@atlascode/coffee-front-pages';
import { GetStaticProps } from 'next';
import React, { ReactElement } from 'react';
import { BlogPost } from '../../../mocks/data/blog-mock';
import { convertToSlug } from '@atlascode/coffee-shared-helpers';
import ServiceProvider from '@atlascode/coffee-frontend-services';
import { LayoutEcommerce } from '@atlascode/coffee-front-components';
import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BlogIndexPageProps {
  posts: BlogPost[];
}

const SHOW_ALL = 'Todos';

export function BlogIndexPage({ posts = [] }: BlogIndexPageProps): JSX.Element {
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
              url: `/blog/${convertToSlug(value.title)}/${value.id}`,
            };
          }
        )}
      />
    </React.Fragment>
  );
}

export default BlogIndexPage;

const service = ServiceProvider.BlogService.default();

// eslint-disable-next-line @typescript-eslint/ban-types
export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async ({
  defaultLocale,
  locale,
  locales,
  params,
  preview,
  previewData,
}) => {
  let result: BlogPost[] = [];
  try {
    result = await service.getAllPosts();
    // eslint-disable-next-line no-empty
  } catch {}
  return {
    props: {
      posts: result,
    },
  };
};

BlogIndexPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutEcommerce>{page}</LayoutEcommerce>;
};
