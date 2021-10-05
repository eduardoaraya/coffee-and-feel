import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Typography } from '@material-ui/core';
import { alpha } from '@material-ui/system';
import { CheckoutDiscount } from '../CheckoutSummaryDiscount/CheckoutSummaryDiscount';
import {
  CheckoutItem,
  CheckoutItemProps,
} from '../CheckoutSummaryItem/CheckoutSummaryItem';

/* eslint-disable-next-line */
export interface CheckoutSummaryProps extends BoxProps {
  items?: CheckoutItemProps[];
}

export function CheckoutSummary({
  sx,
  items = [],
  ...rest
}: CheckoutSummaryProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.grid}>
          <Box sx={styles.header}>
            <Typography sx={styles.headerTitle}>Resumo da compra</Typography>
          </Box>

          <Box sx={styles.body}>
            {items.map((value, index) => {
              return (
                <CheckoutItem
                  sx={{ width: 'auto', minHeight: '12em' }}
                  {...value}
                  key={index}
                />
              );
            })}
            <CheckoutDiscount sx={styles.discount} />
          </Box>

          <Box sx={styles.footer}>
            <Box sx={styles.footerInner}>
              <Box sx={styles.labelValueContainer}>
                <Box>Subtotal:</Box>
                <Box>R$27,90</Box>
              </Box>

              <Box sx={styles.labelValueContainer}>
                <Box>Descontos:</Box>
                <Box>R$00,00</Box>
              </Box>

              <Box sx={styles.labelValueContainer}>
                <Box>Entrega:</Box>
                <Box>R$00,00</Box>
              </Box>

              <Box sx={styles.totalContainer}>
                <Box>Total:</Box>
                <Box>R$27,90</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckoutSummary;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  container: {
    width: { xs: '35.1em' },
    height: { xs: '56em' },
    border: (theme) => `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '8px',
  },

  discount: {
    width: '100%',
    py: { xs: '5em' },
    px: { xs: '3em' },
  },

  grid: {
    display: 'grid',
    gridTemplateRows: { xs: '11% 64% 25%' },
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

  headerTitle: {
    fontSize: { xs: '1.4em' },
    fontWeight: 900,
    textTransform: 'uppercase',
    color: (theme) => theme.palette.secondary.main,
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

  footerInner: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    gap: { xs: '0.5em' },
    justifyContent: 'center',
    color: (theme) => theme.palette.primary.contrastText,
  },

  labelValueContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    fontWeight: 400,
    fontSize: { xs: '1.4em' },
  },

  totalContainer: {
    mt: { xs: '1em' },
    fontWeight: 900,
    fontSize: { xs: '1.6em' },
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
});
