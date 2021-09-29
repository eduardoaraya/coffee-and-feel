import {
  CustomButtonGroup,
  SubscriptionBenefitsListCard,
  SubscriptionBenefitsListCardProps,
  TabPanel,
} from '@atlascode/coffee-front-components';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import React from 'react';
import { MotionBox } from '@atlascode/coffee-frontend-utility';

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
            value === index && (
              <MotionBox
                sx={styles.panel}
                animate="visible"
                initial="hidden"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                key={index}
              >
                {plan.map((planProps, innerIndex) => {
                  return (
                    <SubscriptionBenefitsListCard
                      {...planProps}
                      key={innerIndex}
                    />
                  );
                })}
              </MotionBox>
            )
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
  title: {
    fontSize: { xs: '2em', lg: '3em' },
    fontWeight: 'bold',
  },
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
