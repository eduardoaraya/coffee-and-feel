import {
  Box,
  TextField,
  TextFieldProps,
  Typography,
  Button,
  ButtonProps,
} from '@material-ui/core';
import {
  AtlasJSSShallow,
  AtlasStylesheet,
} from '@atlascode/coffee-shared-helpers';
import _ from 'lodash';
import React from 'react';

export type SlotList = {
  label: string;
  slots: TextFieldProps[];
};

export interface CheckoutSubscriptionCoffeeProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
  title?: string;
  list?: SlotList[];
  ForwardButtonProps?: ButtonProps;
  BackwardButtonProps?: ButtonProps;
}

export function CheckoutSubscriptionCoffee({
  JSS,
  title = 'Placeholder section title',
  list = [],
  ForwardButtonProps,
  BackwardButtonProps,
}: CheckoutSubscriptionCoffeeProps) {
  const styles = React.useMemo(() => _.merge(stylesheet, JSS), [JSS]);

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title} color="secondary">
        {title}
      </Typography>

      <Box sx={styles.categoryGrid}>
        {list.map(({ label, slots }, index) => {
          return (
            <Box sx={styles.slotsContainer} key={index}>
              <Typography sx={styles.slotTitle}>{label}</Typography>
              {slots.map((valueInner, indexInner) => {
                return <TextField {...valueInner} key={indexInner} />;
              })}
            </Box>
          );
        })}
      </Box>

      <Box sx={styles.buttonsContainer}>
        <Button
          {...{
            ...BackwardButtonProps,
            variant: 'outlined',
            color: 'secondary',
            children: 'Voltar',
            sx: styles.backwardButton,
          }}
        />
        <Button
          {...{
            ...ForwardButtonProps,
            variant: 'contained',
            color: 'success',
            children: 'Avançar',
            sx: styles.forwardButton,
          }}
        />
      </Box>
    </Box>
  );
}

export default CheckoutSubscriptionCoffee;

const stylesheet = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '3em' },
  },

  title: {
    fontSize: { xs: '1.6em', lg: '2em' },
    textAlign: { xs: 'center', lg: 'start' },
  },

  slotsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '1.75em' },
  },

  slotTitle: {
    fontSize: { xs: '1.4em', lg: '1.6em' },
    fontWeight: 800,
  },

  slotItem: {},

  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '0.5fr 0.5fr' },
    gridAutoFlow: 'row',
    gap: { xs: '3em' },
    rowGap: { xs: '5em' },
  },

  buttonsContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: { xs: 'center', lg: 'flex-end' },
    gap: { xs: '4em' },
  },

  forwardButton: {},
  backwardButton: {},
});
