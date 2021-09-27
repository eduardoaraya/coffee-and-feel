import React from 'react';
import {
  Box,
  BoxProps,
  Theme,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import { SxProps } from '@material-ui/system';
import {
  BlogPostCard,
  BlogPostCardProps,
} from '@atlascode/coffee-front-components';
import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-hooks';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LastPostsProps extends BoxProps {
  posts: BlogPostCardProps[];
  TypographyProps?: TypographyProps;
  BlogPostCardProps?: BlogPostCardProps;
}

const LastPosts = ({
  posts,
  sx,
  TypographyProps,
  BlogPostCardProps,
  ...rest
}: LastPostsProps) => {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Typography
        className="latestPosts-title"
        variant="h3"
        {...TypographyProps}
      >
        Últimas postagens
      </Typography>

      <Box className="post-grid">
        {posts.map((post, index) => {
          return <BlogPostCard {...post} key={index} {...BlogPostCardProps} />;
        })}
      </Box>
    </Box>
  );
};

export default LastPosts;

const defaultStyles = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 6,

    '.latestPosts-title': {
      textAlign: 'center',
      fontWeight: 700,
      py: 10,
    },

    '@media (min-width: 1024px)': {
      my: 6,
      alignItems: 'unset',
    },

    '.post-grid': {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridAutoFlow: 'row',
      rowGap: 8,
      justifyContent: 'center',
      justifyItems: 'center',

      '@media (min-width: 1024px)': {
        gridTemplateColumns: '33.333% 33.333% 33.333%',
        rowGap: 15,
      },
    },
  } as SxProps<Theme>;
};
