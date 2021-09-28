import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TestimonialPictureProps extends MotionBoxProps {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <MotionBox sx={{ ...styles.root, ...sx }} {...rest}>
      <Box component={'img'} sx={styles.img} src={src} alt={alt} />
    </MotionBox>
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
