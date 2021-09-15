import React from 'react';
import { Box } from '@material-ui/core';
import { ResponsiveStyleValue } from '@material-ui/system';
import { Property } from 'csstype';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BlogPostPhoto {
  src: string;
  alt: string;
  fontSize: ResponsiveStyleValue<Property.FontSize>;
}

const BlogPostPhoto = ({ alt, src, fontSize }: BlogPostPhoto) => {
  return (
    <Box
      sx={{
        fontSize: 'inherit',
        width: '26.3em',
        height: '18.8em',
        boxShadow: (theme) => theme.shadows[3],
        borderRadius: '8px',
      }}
    >
      <Box
        component="img"
        alt={alt}
        src={src}
        sx={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default BlogPostPhoto;
