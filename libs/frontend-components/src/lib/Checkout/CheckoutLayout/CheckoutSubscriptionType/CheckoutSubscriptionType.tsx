import {
  AtlasJSSShallow,
  AtlasStylesheet,
} from '@atlascode/coffee-shared-helpers';
import React from 'react';
import { Box, Typography, Button, ButtonProps } from '@material-ui/core';
import _ from 'lodash';
import { CustomButtonGroup } from '../../../CustomButtonGroup/CustomButtonGroup';
import { MotionBox } from '@atlascode/coffee-frontend-utility';
import {
  TextPriceActionRadio,
  TextPriceActionRadioProps,
} from '../../../TextPriceActionRadio/TextPriceActionRadio';

export interface CheckoutSubscriptionTypeProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
  title?: string;
  subscriptions?: SubscriptionTypeGroup[];
  ForwardButtonProps?: ButtonProps;
  BackwardButtonProps?: ButtonProps;
}

type SubscriptionTypeGroup = {
  categoryLabel: string;
  subscriptions: TextPriceActionRadioProps[];
};

export function CheckoutSubscriptionType({
  JSS,
  title,
  ForwardButtonProps,
  BackwardButtonProps,
  subscriptions = [],
}: CheckoutSubscriptionTypeProps) {
  const styles = React.useMemo(() => _.merge(stylesheet, JSS), [JSS]);

  const [value, setValue] = React.useState<number>(0);

  return (
    <Box sx={styles.root}>
      <Typography color="secondary" sx={styles.title}>
        Selectione o melhor plano para você.
      </Typography>

      <Box sx={styles.buttonGroupContainer}>
        <CustomButtonGroup
          value={value}
          buttons={subscriptions.map(
            ({ categoryLabel, subscriptions }, index) => {
              return {
                children: categoryLabel,
                onClick: () => setValue(index),
              };
            }
          )}
        />
      </Box>

      {subscriptions.map(
        ({ categoryLabel, subscriptions: subInner }, index) => {
          return (
            index === value && (
              <MotionBox
                sx={styles.radioInputContainer}
                animate="visible"
                initial="hidden"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                key={index}
              >
                {subInner.map((value, index) => {
                  return <TextPriceActionRadio key={index} {...value} />;
                })}
              </MotionBox>
            )
          );
        }
      )}

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
          }}
        />
      </Box>
    </Box>
  );
}

export default CheckoutSubscriptionType;

const stylesheet = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    flexDirection: 'column',
    width: '100%',
    display: 'flex',
    gap: { xs: '4em' },
  },

  title: {
    fontSize: { xs: '1.4em', lg: '1.6em' },
  },

  buttonGroupContainer: {},

  radioInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '2em' },
  },

  actionRadioText: {
    color: (theme) => theme.palette.primary.main,
    fontWeight: 800,
    fontSize: { xs: '2em' },
  },

  actionRadioRoot: {
    py: { xs: '4.5em' },
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: { xs: 'center', lg: 'flex-end' },
    gap: { xs: '4em' },
  },

  backwardButton: {},
  forwardButton: {},
});
