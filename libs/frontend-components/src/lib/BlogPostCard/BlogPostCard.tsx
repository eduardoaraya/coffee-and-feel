import { Box, BoxProps, Theme } from '@material-ui/core';
import React from 'react';
import BlogPostPhoto from './BlogPostPhoto';
import BlogPostInfo from './BlogPostInfo';
import { SxProps } from '@material-ui/system';
import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-hooks';
/* eslint-disable-next-line */
export interface BlogPostCardProps {
  ContainerProps?: BoxProps;
}

export const BlogPostCard = React.forwardRef(
  ({ ContainerProps }: BlogPostCardProps, ref: React.Ref<HTMLElement>) => {
    const mergedStyles = useMemoizedMergedObject(
      defaultStyles(),
      ContainerProps?.sx
    );

    return (
      <Box ref={ref} sx={mergedStyles}>
        <BlogPostPhoto />
        <BlogPostInfo
          ContainerProps={{
            sx: { alignSelf: 'center', justifyContent: 'center' },
          }}
        />
      </Box>
    );
  }
);

export default BlogPostCard;

const defaultStyles = () => {
  return {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr',
    width: 'fit-content',
    gap: 2,
  } as SxProps<Theme>;
};
