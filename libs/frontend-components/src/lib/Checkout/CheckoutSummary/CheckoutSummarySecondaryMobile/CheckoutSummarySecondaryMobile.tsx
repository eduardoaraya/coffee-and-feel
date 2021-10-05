import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, DrawerProps, Drawer, List, IconButton } from '@material-ui/core';
import { alpha } from '@material-ui/system';
import { CheckoutReturnArrow } from '@atlascode/coffee-frontend-svg';
import CheckoutMenuOverview from '../../CheckoutHeaderAction/CheckoutHeaderAction';
import CheckoutDiscount from '../CheckoutSummaryDiscount/CheckoutSummaryDiscount';
import {
  CheckoutItemProps,
  CheckoutItem,
} from '../CheckoutSummaryItem/CheckoutSummaryItem';
import { CheckoutSummaryBase } from '../CheckoutSummaryBase/CheckoutSummaryBase';

/* eslint-disable-next-line */
export interface CheckoutMenuProps extends DrawerProps {
  items?: CheckoutItemProps[];
}

export function CheckoutMenu({
  sx,
  anchor = 'right',
  open,
  onClose,
  items = [],
  ...rest
}: CheckoutMenuProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={anchor}
      sx={{ ...styles.root, ...sx }}
      {...rest}
    >
      <CheckoutSummaryBase
        sx={{ height: '100%', borderRadius: '0px 0px 8px 8px' }}
        headerContent={
          <Box sx={styles.header}>
            <Box sx={styles.headerIconContainer}>
              <IconButton sx={styles.headerReturnIcon}>
                <CheckoutReturnArrow fontSize="inherit" />
              </IconButton>
            </Box>

            <Box sx={styles.overviewContainer}>
              <CheckoutMenuOverview />
            </Box>
          </Box>
        }
        bodyContent={
          <List sx={styles.list}>
            <Box sx={styles.listBody}>
              {items.map((value, index) => {
                return (
                  <CheckoutItem sx={{ width: 'auto' }} {...value} key={index} />
                );
              })}
              <CheckoutDiscount sx={styles.discount} />
            </Box>
          </List>
        }
        footerContent={
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
        }
      />
    </Drawer>
  );
}

export default CheckoutMenu;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',

    '.MuiPaper-root': {
      borderRadius: '0px 0px 0px 8px',
    },
  },

  discount: {
    width: '100%',
    py: { xs: '5em' },
    px: { xs: '3em' },
  },

  overviewContainer: {
    flexGrow: 1,
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
  },

  list: {
    py: { xs: 0 },
    width: { xs: '33em' },
    height: { xs: '100%' },
  },

  header: {
    width: '100%',
    height: '100%',
    display: 'flex',
    px: { xs: '2em' },
  },

  headerIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerReturnIcon: {
    fontSize: { xs: '2em' },
  },

  headerOverviewContainer: {},

  listBody: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
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
