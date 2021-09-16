import { Box, BoxProps, Theme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import BlogPostPhoto, { BlogPostPhotoProps } from './BlogPostPhoto';
import BlogPostInfo, { BlogPostInfoProps } from './BlogPostInfo';
import { SxProps } from '@material-ui/system';
import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-hooks';
import {
  ReadingTime,
  ReadingTimeProps,
} from '@atlascode/coffee-front-components';
/* eslint-disable-next-line */
export interface BlogPostCardProps extends Omit<BoxProps, 'ref'> {
  BlogPostPhotoProps?: BlogPostPhotoProps;
  BlogPostInfoProps?: BlogPostInfoProps;
  infoLeft?: boolean;
  readingTime?: ReadingTimeProps['time'];
}

export const BlogPostCard = React.forwardRef<HTMLElement, BlogPostCardProps>(
  (
    {
      BlogPostInfoProps,
      BlogPostPhotoProps,
      infoLeft = false,
      readingTime = 2,
      sx,
      ...rest
    }: BlogPostCardProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const mergedStyles = useMemoizedMergedObject(defaultStyles(infoLeft), sx, [
      infoLeft,
    ]);

    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
      <Box ref={ref} sx={mergedStyles} {...rest}>
        {(!infoLeft && <ReadingTime time={readingTime} />) ||
          (!isDesktop && <ReadingTime time={readingTime} />)}
        <BlogPostPhoto {...BlogPostPhotoProps} />
        <BlogPostInfo
          readingTime={!infoLeft || !isDesktop ? 'hidden' : readingTime}
          {...BlogPostInfoProps}
          sx={{ alignSelf: 'center', justifyContent: 'center' }}
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
