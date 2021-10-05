import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps } from '@material-ui/core';
import { alpha } from '@material-ui/system';

/* eslint-disable-next-line */
export interface CheckoutSummaryBaseProps extends BoxProps {}

export function CheckoutSummaryBase({ sx, ...rest }: CheckoutSummaryBaseProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.grid}>
        <Box sx={styles.header}></Box>

        <Box sx={styles.body}></Box>

        <Box sx={styles.footer}></Box>
      </Box>
    </Box>
  );
}

export default CheckoutSummaryBase;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: { xs: '35.1em' },
    height: { xs: '56em' },
    border: (theme) => `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '8px',
  },

  grid: {
    display: 'grid',
    gridTemplateRows: { xs: '0.11fr 0.64fr 0.25fr' },
    width: { xs: '100%' },
    height: { xs: '100%' },
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: (theme) =>
      `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  footer: {
    bgcolor: (theme) => theme.palette.primary.main,
    display: 'flex',
    borderRadius: '0px 0px 8px 8px',
  },
});
