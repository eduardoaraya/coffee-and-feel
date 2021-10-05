import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Typography, IconButton } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';

/* eslint-disable-next-line */
export interface CheckoutMenuOverviewProps extends BoxProps {}

export function CheckoutMenuOverview({
  sx,
  ...rest
}: CheckoutMenuOverviewProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.infoNumeric}>
        <Typography sx={styles.infoAmount}>2 itens</Typography>
        <Typography sx={styles.infoPrice}>R$15,50</Typography>
      </Box>

      <IconButton size="small">
        <KeyboardArrowDown color="primary" fontSize="inherit" />
      </IconButton>
    </Box>
  );
}

export default CheckoutMenuOverview;

const styles = AtlasStylesheet.create({
  root: {
    height: { xs: '100%' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: { xs: '1em' },
    fontSize: '10px',
  },

  infoNumeric: {
    display: 'flex',
    flexDirection: 'column',
  },

  infoAmount: {
    fontSize: { xs: '1.2em' },
    color: '#323232',
  },

  infoPrice: {
    fontSize: { xs: '1.2em' },
    color: '#323232',
  },
});
