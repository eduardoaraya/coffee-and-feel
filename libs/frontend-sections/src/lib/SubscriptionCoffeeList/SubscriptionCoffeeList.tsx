import {
  CustomButtonGroup,
  SubscriptionSlider,
  SubscriptionSliderProps,
  TabPanel,
} from '@atlascode/coffee-front-components';
import { MotionBox } from '@atlascode/coffee-frontend-utility';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import React from 'react';

type PlanCategory = {
  categoryLabel: string;
} & SubscriptionSliderProps;

export interface SubscriptionCoffeeListProps extends BoxProps {
  subscriptionCategories: PlanCategory[];
}

export function SubscriptionCoffeeList({
  sx,
  subscriptionCategories: items,
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
            buttons={items.map((value, index) => {
              return {
                children: value.categoryLabel,
                onClick: () => setValue(index),
              };
            })}
          />
        </Box>

        {items.map(({ categoryLabel, ...plan }, index) => {
          return (
            index === value && (
              <MotionBox
                key={index}
                animate={'visible'}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                  },
                  hidden: {
                    opacity: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <SubscriptionSlider {...plan} />
              </MotionBox>
            )
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
    textAlign: { xs: 'center', lg: 'start' },
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
