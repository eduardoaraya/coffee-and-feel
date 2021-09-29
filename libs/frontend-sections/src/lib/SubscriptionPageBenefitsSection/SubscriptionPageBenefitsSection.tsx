import {
  CustomButtonGroup,
  TabPanel,
} from '@atlascode/coffee-front-components';

import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import React from 'react';
import {
  SubscriptionPageBenefitCardProps,
  SubscriptionPageBenefitsDesktop,
  SubscriptionPageBenefitsMobile,
} from '@atlascode/coffee-front-components';
import { MotionBox } from '@atlascode/coffee-frontend-utility';

type BenefitCategory = {
  categoryLabel: string;
  benefits: SubscriptionPageBenefitCardProps[];
};

/* eslint-disable-next-line */
export interface SubscriptionPageBenefitsSectionProps extends BoxProps {
  subscriptionBenefits: BenefitCategory[];
}

export function SubscriptionPageBenefitsSection({
  sx,
  subscriptionBenefits: items,
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
            buttons={items.map((value, index) => {
              return {
                children: value.categoryLabel,
                onClick: () => setValue(index),
              };
            })}
          />
        </Box>

        {items.map(({ benefits, categoryLabel }, index) => {
          return (
            index === value && (
              <MotionBox
                initial="hidden"
                animate="visible"
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                  },
                }}
              >
                <SubscriptionPageBenefitsDesktop
                  sx={styles.benefitDesktop}
                  items={benefits}
                />
                <SubscriptionPageBenefitsMobile
                  sx={styles.benefitMobile}
                  items={benefits}
                />
              </MotionBox>
            )
          );
        })}
      </Container>
    </Box>
  );
}

export default SubscriptionPageBenefitsSection;

const styles = AtlasStylesheet.create({
  benefitDesktop: {
    display: { xs: 'none', lg: 'flex' },
  },

  benefitMobile: {
    display: { xs: 'unset', lg: 'none' },
  },

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
