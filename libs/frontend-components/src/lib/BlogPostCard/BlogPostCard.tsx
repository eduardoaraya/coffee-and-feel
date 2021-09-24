import { Box, BoxProps, useMediaQuery } from '@material-ui/core';
import React from 'react';
import BlogPostPhoto, { BlogPostPhotoProps } from './BlogPostPhoto';
import { BlogPostInfo, BlogPostInfoProps } from './BlogPostInfo';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ReadingTime } from '@atlascode/coffee-front-components';

export interface BlogPostCardProps
  extends BoxProps,
    BlogPostInfoProps,
    BlogPostPhotoProps {
  leftAligned?: boolean;
}

export const BlogPostCard = ({
  sx,
  leftAligned = false,
  content,
  readingTime = 3,
  title,
  tags,
  src,
  alt,
  url,
  ...rest
}: BlogPostCardProps) => {
  const stylesMemo = React.useMemo(() => styles(leftAligned), [leftAligned]);

  const isDesktop = useMediaQuery('@media(min-width: 1024px)');

  return (
    <Box sx={{ ...stylesMemo.root, ...sx }} {...rest}>
      <Box sx={stylesMemo.grid}>
        <BlogPostPhoto src={src} alt={alt} />
        <BlogPostInfo
          url={url}
          content={content}
          readingTime={readingTime}
          title={title}
          tags={tags}
        />
      </Box>
    </Box>
  );
};

const styles = (leftAligned = false) => {
  return AtlasStylesheet.create({
    root: {
      fontSize: '10px',
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', lg: leftAligned ? 'auto 1fr' : '1fr' },
      gridTemplateRows: {
        xs: 'auto 1fr',
        lg: leftAligned ? '1fr' : 'auto 1fr',
      },
      maxWidth: { xs: '32.3em', lg: '65em' },
      justifyContent: 'center',
      gap: 2,
      columnGap: 2,
    },
  });
};

export default BlogPostCard;
