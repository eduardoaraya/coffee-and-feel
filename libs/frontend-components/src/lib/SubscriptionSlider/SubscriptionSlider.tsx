import { Box, BoxProps, Typography } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { CarbonSlider } from '../CarbonSlider/CarbonSlider';
import { SubscriptionAttributeCardProps } from '@atlascode/coffee-front-components';

/* eslint-disable-next-line */
export interface SubscriptionSliderProps extends BoxProps {
  attributes: SubscriptionAttributeCardProps[];
  title: string;
  description: string;
  src: string;
  alt: string;
}

export function SubscriptionSlider({
  sx,
  attributes = [],
  title,
  description,
  src,
  alt,
  ...rest
}: SubscriptionSliderProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.grid}>
          <Box sx={styles.photoContainer}></Box>

          <Box sx={styles.infoContainer}>
            <Typography sx={styles.title}></Typography>
            <Typography sx={styles.description}></Typography>

            <Box sx={styles.attributesContainer}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SubscriptionSlider;

const styles = AtlasStylesheet.create({
  root: {},
  grid: {},
  title: {},
  description: {},
  attribute: {},
  circle: {},

  container: {},
  photoContainer: {},
  infoContainer: {},
  paginationContainer: {},
  attributesContainer: {},
});
