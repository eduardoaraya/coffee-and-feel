import { Box, BoxProps, Theme } from '@material-ui/core';
import React from 'react';
import BlogPostPhoto, { BlogPostPhotoProps } from './BlogPostPhoto';
import BlogPostInfo, { BlogPostInfoProps } from './BlogPostInfo';
import { SxProps } from '@material-ui/system';
import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-hooks';
/* eslint-disable-next-line */
export interface BlogPostCardProps {
  ContainerProps?: BoxProps;
  BlogPostPhotoProps?: BlogPostPhotoProps;
  BlogPostInfoProps?: BlogPostInfoProps;
  infoLeft?: boolean;
}

export const BlogPostCard = React.forwardRef<HTMLElement, BlogPostCardProps>(
  (
    {
      ContainerProps,
      BlogPostInfoProps,
      BlogPostPhotoProps,
      infoLeft = false,
    }: BlogPostCardProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const mergedStyles = useMemoizedMergedObject(
      defaultStyles(infoLeft),
      ContainerProps?.sx,
      [infoLeft]
    );

    return (
      <Box ref={ref} sx={mergedStyles}>
        <BlogPostPhoto {...BlogPostPhotoProps} />
        <BlogPostInfo
          {...BlogPostInfoProps}
          ContainerProps={{
            sx: { alignSelf: 'center', justifyContent: 'center' },
          }}
        />
      </Box>
    );
  }
);

const defaultStyles = (leftAligned = false) => {
  return {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
    width: 'fit-content',
    gap: 3,

    '@media (min-width: 1024px)': {
      gridTemplateColumns: leftAligned ? 'auto 1fr' : '1fr',
      gridTemplateRows: leftAligned ? '1fr' : 'auto 1fr',
    },
  } as SxProps<Theme>;
};
