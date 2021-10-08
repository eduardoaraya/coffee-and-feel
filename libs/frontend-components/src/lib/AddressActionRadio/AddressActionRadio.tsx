import {
  AtlasStylesheet,
  AtlasJSSShallow,
} from '@atlascode/coffee-shared-helpers';
import { Box, ButtonProps, Button, Typography } from '@material-ui/core';
import {
  EnhancedRadio,
  EnhancedRadioProps,
} from '../EnhancedRadio/EnhancedRadio';
import { webkitVerticalTruncate } from '@atlascode/coffee-frontend-mixins';
import React from 'react';
import _ from 'lodash';

/* eslint-disable-next-line */

const EnhancedRadioJSSKey = 'enhancedRadioJSS';
export interface AddressActionRadioProps extends EnhancedRadioProps {
  address?: string;
  label?: string;
  ButtonProps?: ButtonProps;
  JSS?: { [key in typeof EnhancedRadioJSSKey]?: EnhancedRadioProps['JSS'] } &
    AtlasJSSShallow<typeof stylesheet>;
}

export function AddressActionRadio({
  address,
  label = 'Endereço',
  ButtonProps,
  active,
  JSS,
  ...rest
}: AddressActionRadioProps) {
  const styles = React.useMemo(
    () => _.merge(stylesheet, { [EnhancedRadioJSSKey]: { ...JSS } }),
    [JSS]
  );

  return (
    <EnhancedRadio active={active} JSS={styles[EnhancedRadioJSSKey]} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.textContainer}>
          <Typography sx={styles.label}>{label}</Typography>
          <Typography sx={styles.address}>{address}</Typography>
        </Box>

        <Box sx={styles.buttonContainer}>
          <Button
            {...ButtonProps}
            variant="outlined"
            size="small"
            color="secondary"
            sx={styles.button}
          >
            Mudar endereço
          </Button>
        </Box>
      </Box>
    </EnhancedRadio>
  );
}

export default AddressActionRadio;

const stylesheet = AtlasStylesheet.create({
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
    gap: { xs: '1.5em' },
    pl: { xs: '1em' },
    pr: { lg: '3.5em' },
  },

  textContainer: {
    color: (theme) => theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '0.75em' },
  },

  label: {
    fontSize: { xs: '1.4em', lg: '1.6em' },
    fontWeight: 900,
  },

  address: {
    fontSize: { xs: '1.2em', lg: '1.4em' },
    maxWidth: { xs: '32ch', lg: '59ch' },
    ...(webkitVerticalTruncate(3) as Record<string, unknown>),
  },

  buttonContainer: {
    flexGrow: { lg: 1 },
    display: 'flex',
    justifyContent: { lg: 'flex-end' },
    alignItems: 'center',
  },

  button: {
    fontSize: { xs: '1em !important', lg: '1.2em !important' },
    borderRadius: '6px',
    maxWidth: 'fit-content',
  },
});