import React from 'react';
import { Box } from '@material-ui/core';
import { ResponsiveStyleValue } from '@material-ui/system';
import { Property } from 'csstype';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogPostPhotoProps {
  src?: string;
  alt?: string;
  fontSize?: ResponsiveStyleValue<Property.FontSize>;
}

const BlogPostPhoto = ({
  alt = 'This is an alternative text placeholder meant to enhance accessibility, edit me',
  src = 'https://via.placeholder.com/750',
  fontSize = '10px',
}: BlogPostPhotoProps) => {
  return (
    <Box
      sx={{
        fontSize: fontSize,
        width: '32.3em',
        height: '20.8em',
        boxShadow: (theme) => theme.shadows[3],
        borderRadius: '8px',
      }}
    >
      <Box
        component="img"
        alt={alt}
        src={src}
        sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default BlogPostPhoto;
