import React from 'react';
import { Box, BoxProps, Theme } from '@material-ui/core';
import { ResponsiveStyleValue, SxProps } from '@material-ui/system';
import { Property } from 'csstype';

import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-react-hooks';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogPostPhotoProps extends BoxProps {
  src?: string;
  alt?: string;
  fontSize?: ResponsiveStyleValue<Property.FontSize>;
}

const BlogPostPhoto = ({
  alt = 'This is an alternative text placeholder meant to enhance accessibility, edit me',
  src = 'https://via.placeholder.com/750',
  fontSize = '10px',
  sx,
  ...rest
}: BlogPostPhotoProps) => {
  const defaultStyleMemo = useMemoizedMergedObject(defaultStyles(fontSize), sx);

  return (
    <Box sx={defaultStyleMemo} {...rest}>
      <Box className="img" component="img" alt={alt} src={src} />
    </Box>
  );
};

export default BlogPostPhoto;

const defaultStyles = (
  fontSize: ResponsiveStyleValue<Property.FontSize> = '10px'
): SxProps<Theme> => {
  return {
    fontSize: fontSize,
    width: '32.3em',
    height: '20.8em',
    boxShadow: (theme) => theme.shadows[3],
    borderRadius: '8px',

    '.img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  };
};
