import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

/* eslint-disable-next-line */
export interface SubscriptionPageStepsSectionProps extends BoxProps {}

export function SubscriptionPageStepsSection({
  sx,
  ...rest
}: SubscriptionPageStepsSectionProps) {
  return <Box sx={{ ...styles.root, ...sx }} {...rest}></Box>;
}

export default SubscriptionPageStepsSection;

const styles = AtlasStylesheet.create({
  root: {},
});
