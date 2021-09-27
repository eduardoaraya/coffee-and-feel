import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

export interface BlogPostPhotoProps extends BoxProps {
  src?: string;
  alt?: string;
}

export const BlogPostPhoto = ({
  sx,
  src = 'https://via.placeholder.com/1500',
  alt = 'This is a placeholder alternative text, change me',
  ...rest
}: BlogPostPhotoProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box component="img" alt={alt} src={src} sx={styles.img} />
      </Box>
    </Box>
  );
};

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  container: {
    width: { xs: '32.3em' },
    height: { xs: '20.8em' },
    boxShadow: (theme) => theme.shadows[3],
    borderRadius: '8px',
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default BlogPostPhoto;
