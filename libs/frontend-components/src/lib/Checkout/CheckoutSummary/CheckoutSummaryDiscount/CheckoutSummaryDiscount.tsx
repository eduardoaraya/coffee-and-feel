import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Typography } from '@material-ui/core';
import {
  InputWithButton,
  InputWithButtonProps,
} from '../../../InputWithButton/InputWithButton';
import { alpha } from '@material-ui/system';

/* eslint-disable-next-line */
export interface CheckoutDiscountProps extends BoxProps {
  label?: string;
  caption?: string;
  InputWithButtonProps?: InputWithButtonProps;
}

export function CheckoutDiscount({
  sx,
  label = 'Cupom de desconto',
  caption = '',
  InputWithButtonProps = {
    InputProps: {
      placeholder: 'BLACKFRIDAY30',
    },
    ButtonProps: {
      children: 'Ativar',
    },
  },
  ...rest
}: CheckoutDiscountProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Typography sx={styles.label}>{label}</Typography>
        <InputWithButton fontSize="inherit" {...InputWithButtonProps} />
        <Typography sx={styles.caption}>{caption}</Typography>
      </Box>
    </Box>
  );
}

export default CheckoutDiscount;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    color: '#323232',
    rowGap: { xs: '1.25em' },
  },

  label: {
    fontSize: { xs: '1.2em' },
    color: '#323232',
    ml: { xs: '0.35em' },
  },

  caption: {
    fontSize: { xs: '1em' },
    color: '#323232',
    ml: { xs: '0.35em' },
  },
});
