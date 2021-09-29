import {
  CustomButtonGroup,
  SubscriptionBenefitsListCard,
  SubscriptionBenefitsListCardProps,
  TabPanel,
} from '@atlascode/coffee-front-components';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import React from 'react';

type PlanCategory = {
  categoryLabel: string;
  plan: SubscriptionBenefitsListCardProps[];
};

/* eslint-disable-next-line */
export interface SubscriptionBenefitsListSectionProps extends BoxProps {
  plans: PlanCategory[];
}

export function SubscriptionBenefitsListSection({
  sx,
  plans = [],
  ...rest
}: SubscriptionBenefitsListSectionProps) {
  const [value, setValue] = React.useState<number>(0);

  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container sx={styles.container}>
        <Typography sx={styles.title} variant="h2">
          Escolha o melhor plano para você.
        </Typography>

        <Box sx={styles.buttonGroupContainer}>
          <CustomButtonGroup
            value={value}
            buttons={plans.map((value, index) => {
              return {
                children: value.categoryLabel,
                onClick: () => setValue(index),
              };
            })}
          />
        </Box>

        {plans.map(({ categoryLabel, plan }, index) => {
          return (
            <TabPanel
              sx={styles.panel}
              display="flex"
              key={index}
              index={index}
              value={value}
            >
              {plan.map((planProps, innerIndex) => {
                return (
                  <SubscriptionBenefitsListCard
                    {...planProps}
                    key={innerIndex}
                  />
                );
              })}
            </TabPanel>
          );
        })}
      </Container>
    </Box>
  );
}

export default SubscriptionBenefitsListSection;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: '3.5em' },
  },
  title: {},
  buttonGroupContainer: {},
  panel: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  panelWrapper: {
    width: '100%',
  },
});
