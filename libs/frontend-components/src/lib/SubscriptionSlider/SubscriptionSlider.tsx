import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { CarbonSlider } from '../CarbonSlider/CarbonSlider';

/* eslint-disable-next-line */
export interface SubscriptionSliderProps extends BoxProps {}

export function SubscriptionSlider({ sx, ...rest }: SubscriptionSliderProps) {
  return <Box sx={{ ...styles.root, ...sx }} {...rest}></Box>;
}

export default SubscriptionSlider;

const styles = AtlasStylesheet.create({
  root: {},
});
