import { Box, BoxProps, Container } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

/* eslint-disable-next-line */
export interface SubscriptionPageDefenseSectionProps extends BoxProps {}

export function SubscriptionPageDefenseSection({
  sx,
  ...rest
}: SubscriptionPageDefenseSectionProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container maxWidth="lg" sx={styles.container}></Container>
    </Box>
  );
}

export default SubscriptionPageDefenseSection;

const styles = AtlasStylesheet.create({
  root: {},
  container: {},
});
