import {
  AtlasStylesheet,
  formatToCurrency,
} from '@atlascode/coffee-shared-helpers';
import {
  EnhancedRadio,
  EnhancedRadioProps,
} from '../EnhancedRadio/EnhancedRadio';
import { Box, Typography } from '@material-ui/core';
import React from 'react';

/* eslint-disable-next-line */
export interface DeliveryActionRadioProps extends EnhancedRadioProps {
  free?: boolean;
  arrival?: string;
  price?: number;
}

export function DeliveryActionRadio({
  sx,
  active,
  free,
  arrival,
  price = 0,
  ...rest
}: DeliveryActionRadioProps) {
  const styles = React.useMemo(() => stylesheet(free), [free]);

  return (
    <EnhancedRadio sx={{ ...styles.root, ...sx }} active={active} {...rest}>
      <Box sx={styles.container}>
        <Typography sx={styles.arrival}>{arrival}</Typography>

        <Box sx={styles.priceContainer}>
          <Typography sx={styles.price}>
            {formatToCurrency('pt-BR', 'BRL', price)}
          </Typography>
          {free && (
            <Typography sx={styles.priceCaption}>Frete gratuito!</Typography>
          )}
        </Box>
      </Box>
    </EnhancedRadio>
  );
}

export default DeliveryActionRadio;

const stylesheet = (free?: boolean) =>
  AtlasStylesheet.create({
    root: {
      fontSize: '10px',
    },

    container: {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: { xs: 'column', lg: 'row' },
      justifyContent: { xs: 'center', lg: 'flex-start' },
      alignItems: { lg: 'center' },
      rowGap: { xs: '1.75em' },
      color: (theme) => theme.palette.secondary.main,
      pr: { lg: '3.5em' },
    },

    arrival: {
      fontSize: { xs: '1.2em', lg: '1.6em' },
      maxWidth: { xs: '30ch', lg: '57ch' },
      color: 'inherit',
    },

    priceContainer: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: { xs: '1.2em', lg: '1.6em' },
      rowGap: { xs: '0.35em' },
      flexGrow: { lg: 1 },
      alignItems: { lg: 'flex-end' },
    },
    price: {
      fontSize: 'inherit',
      color: (theme) => (free ? theme.palette.grey[400] : 'inherit'),
      ...(free && { textDecoration: 'line-through' }),
    },
    priceCaption: {
      fontSize: 'inherit',
      color: 'inherit',
      fontWeight: 900,
    },
  });
