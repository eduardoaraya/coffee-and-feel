import React from 'react';
import { Box, BoxProps, Theme } from '@material-ui/core';
import { SxProps } from '@material-ui/system';
import {
  BlogPostCard,
  BlogPostCardProps,
} from '@atlascode/coffee-front-components';
import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-hooks';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LastPostsProps extends BoxProps {
  posts: BlogPostCardProps[];
}

const LastPosts = ({ posts, sx, ...rest }: LastPostsProps) => {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="post-grid">
        {posts.map((post, index) => {
          return <BlogPostCard {...post} key={index} />;
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

    '.post-grid': {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridAutoFlow: 'row',

      '@media (min-width: 1024px)': {
        gridTemplateColumns: '33.333% 33.333% 33.333%',
      },
    },
  } as SxProps<Theme>;
};
