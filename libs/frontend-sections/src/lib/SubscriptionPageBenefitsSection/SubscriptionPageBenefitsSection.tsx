import { SubscriptionPageBenefitCard } from '@atlascode/coffee-front-components';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container } from '@material-ui/core';

/* eslint-disable-next-line */
export interface SubscriptionPageBenefitsSectionProps extends BoxProps {}

export function SubscriptionPageBenefitsSection({
  sx,
  ...rest
}: SubscriptionPageBenefitsSectionProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container sx={styles.container} maxWidth="lg">
        <SubscriptionPageBenefitCard />
      </Container>
    </Box>
  );
}

export default SubscriptionPageBenefitsSection;

const styles = AtlasStylesheet.create({
  root: {},
  container: {},
  buttonGroupContainer: {},
  title: {},
  paper: {},
});
