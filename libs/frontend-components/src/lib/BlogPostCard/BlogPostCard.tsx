import { Box, BoxProps, Theme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import BlogPostPhoto, { BlogPostPhotoProps } from './BlogPostPhoto';
import BlogPostInfo, { BlogPostInfoProps } from './BlogPostInfo';
import { SxProps } from '@material-ui/system';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-hooks';
import { ReadingTime, ReadingTimeProps } from '../ReadingTime/ReadingTime';
/* eslint-disable-next-line */
export interface BlogPostCardProps extends Omit<BoxProps, 'ref'> {
  BlogPostPhotoProps?: BlogPostPhotoProps;
  BlogPostInfoProps?: BlogPostInfoProps;
  infoLeft?: boolean;
  content?: string;
  readingTime: ReadingTimeProps['time'];
  title: string;
  src: string;
  alt?: string;
}

/**
 * @param title string
 * @param infoLeft boolean
 * @param content string
 * @param readingTime 'hidden' | boolean
 * @param src string
 * @param alt string
 **/
export const BlogPostCard = React.forwardRef<HTMLElement, BlogPostCardProps>(
  (
    {
      BlogPostInfoProps,
      BlogPostPhotoProps,
      infoLeft = false,
      readingTime = 2,
      content,
      title = 'Placeholder title',
      sx,
      src,
      alt,
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
        {(!infoLeft && <ReadingTime content={content} time={readingTime} />) ||
          (!isDesktop && <ReadingTime content={content} time={readingTime} />)}
        <BlogPostPhoto src={src} alt={alt} {...BlogPostPhotoProps} />
        <BlogPostInfo
          title={title}
          content={content}
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
    maxWidth: '25em',
    width: 'fit-content',
    gap: 3,
    justifyContent: 'center',

    '@media (min-width: 1024px)': {
      gridTemplateColumns: leftAligned ? 'auto 1fr' : '1fr',
      gridTemplateRows: leftAligned ? '1fr' : 'auto 1fr',
    },
  } as SxProps<Theme>;
};
