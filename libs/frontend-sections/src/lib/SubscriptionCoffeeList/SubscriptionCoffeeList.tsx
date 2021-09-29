import {
  CustomButtonGroup,
  SubscriptionSlider,
  SubscriptionSliderProps,
  TabPanel,
} from '@atlascode/coffee-front-components';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import React from 'react';

type PlanCategory = {
  categoryLabel: string;
} & SubscriptionSliderProps;

export interface SubscriptionCoffeeListProps extends BoxProps {
  plans: PlanCategory[];
}

export function SubscriptionCoffeeList({
  sx,
  plans,
  ...rest
}: SubscriptionCoffeeListProps) {
  const [value, setValue] = React.useState<number>(0);

  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container maxWidth="lg" sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>
          Cafés disponíveis em cada assinatura
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

        {plans.map(({ categoryLabel, ...plan }, index) => {
          return (
            <TabPanel
              sx={styles.panel}
              display="flex"
              key={index}
              index={index}
              value={value}
            >
              <SubscriptionSlider {...plan} />;
            </TabPanel>
          );
        })}
      </Container>
    </Box>
  );
}

export default SubscriptionCoffeeList;

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
