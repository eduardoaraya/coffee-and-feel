import { CustomButtonGroup } from '@atlascode/coffee-front-components';

import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import React from 'react';
import SubscriptionBenefitsDesktop from './SubscriptionBenefitsDesktop';
import { SubscriptionBenefitsMobile } from './SubscriptionBenefitsMobile';
import { SubscriptionPageBenefitCardProps } from '@atlascode/coffee-front-components';

type BenefitCategory = { [label: string]: SubscriptionPageBenefitCardProps };

/* eslint-disable-next-line */
export interface SubscriptionPageBenefitsSectionProps extends BoxProps {
  benefits: BenefitCategory[];
}

export function SubscriptionPageBenefitsSection({
  sx,
  ...rest
}: SubscriptionPageBenefitsSectionProps) {
  const [value, setValue] = React.useState<number>(0);

  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container sx={styles.container} maxWidth="lg">
        <Typography variant="h2" sx={styles.title}>
          Benefícios que você recebe em cada assinatura.
        </Typography>

        <Box sx={styles.buttonGroupContainer}>
          <CustomButtonGroup
            value={value}
            buttons={[
              { children: 'Standard', onClick: () => setValue(0) },
              { children: 'Premium', onClick: () => setValue(1) },
            ]}
          />
        </Box>
        <SubscriptionBenefitsMobile />
      </Container>
    </Box>
  );
}

export default SubscriptionPageBenefitsSection;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  container: {
    p: { xs: 0, lg: 'initial' },
  },
  buttonGroupContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    py: { xs: '3.5em' },
  },
  title: {
    fontSize: { xs: '2em', lg: '3em' },
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
