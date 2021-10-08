import { Box, Button, ButtonProps } from '@material-ui/core';
import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import React from 'react';
import _ from 'lodash';
import { EnhancedRadioGroup } from '../../../EnhancedRadioGroup/EnhancedRadioGroup';
import {
  TextActionRadio,
  TextActionRadioProps,
} from '../../../TextActionRadio/TextActionRadio';

/* eslint-disable-next-line */
export interface CheckoutPaymentSelectionProps {
  JSS?: AtlasJSSShallow<typeof stylesheet>;
  items?: TextActionRadioProps[];
  activeIndex?: number;
  ForwardButtonProps?: ButtonProps;
  BackwardButtonProps?: ButtonProps;
}

export const CheckoutPaymentSelection = ({
  JSS,
  items = [],
  activeIndex = 0,
  ForwardButtonProps,
  BackwardButtonProps,
  ...rest
}: CheckoutPaymentSelectionProps) => {
  const styles = React.useMemo(() => {
    return _.merge(stylesheet, JSS);
  }, [JSS]);

  return (
    <Box sx={styles.root} {...rest}>
      <Box sx={styles.container}>
        <EnhancedRadioGroup
          activeIndex={activeIndex}
          component={TextActionRadio}
          items={items}
        />

        <Box sx={styles.buttonsContainer}>
          <Button
            {...{
              ...BackwardButtonProps,
              variant: 'outlined',
              color: 'secondary',
              sx: styles.backwardsButton,
              children: 'Voltar',
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
    </Box>
  );
};

export default CheckoutPaymentSelection;

const stylesheet = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '4em' },
  },

  buttonsContainer: {
    display: 'flex',
    gap: { xs: '4em' },
    width: '100%',
    justifyContent: { xs: 'center', lg: 'flex-end' },
  },

  backwardsButton: {},

  forwardButton: {},
});
