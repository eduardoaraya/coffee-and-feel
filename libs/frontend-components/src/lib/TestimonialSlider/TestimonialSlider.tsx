import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';
import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';

/* eslint-disable-next-line */
export interface TestimonialSliderProps extends BoxProps {}

export function TestimonialSlider({ sx, ...rest }: TestimonialSliderProps) {
  return <Box sx={{ ...styles.root, ...sx }} {...rest}></Box>;
}

export default TestimonialSlider;

const styles = AtlasStylesheet.create({
  root: {},
});
