import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TestimonialPictureProps extends BoxProps {
  src?: string;
  alt?: string;
}

const TestimonialPicture = ({
  sx,
  src = 'https://via.placeholder.com/1500',
  alt = 'This is an alternative text, change me.',
  ...rest
}: TestimonialPictureProps) => {
  return (
    <Box sx={{ ...styles.root, ...rest }}>
      <Box component={'img'} sx={styles.img} src={src} alt={alt} />
    </Box>
  );
};

export default TestimonialPicture;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: { xs: '30em', lg: '46em' },
    height: { xs: '27em', lg: '50em' },
    borderRadius: '20px',
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
  },
});

// 460 x 500  --- 300 x 270
