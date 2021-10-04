import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, DrawerProps, Drawer, List, IconButton } from '@material-ui/core';
import { CheckoutItem, CheckoutItemProps } from '../CheckoutItem/CheckoutItem';
import { alpha } from '@material-ui/system';
import { CheckoutReturnArrow } from '@atlascode/coffee-frontend-svg';
import CheckoutMenuOverview from '../CheckoutMenuOverview/CheckoutMenuOverview';
import CheckoutDiscount from '../CheckoutDiscount/CheckoutDiscount';
import {
  CoffeeBagWithBadge,
  CoffeBagWithBadgeProps,
} from '../../CoffeeBagWithBadge/CoffeeBagWithBadge';

/* eslint-disable-next-line */
export interface CheckoutQuickviewProps extends DrawerProps {
  items?: CheckoutItemProps[];
  CoffeBagIconProps?: CoffeBagWithBadgeProps;
}

export function CheckoutQuickview({
  sx,
  anchor = 'right',
  open,
  onClose,
  items = [],
  CoffeBagIconProps,
  ...rest
}: CheckoutQuickviewProps) {
  const { BadgeProps = { badgeContent: items.length }, ...coffeBagIconRest } = {
    ...CoffeBagIconProps,
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={anchor}
      sx={{ ...styles.root, ...sx }}
      {...rest}
    >
      <Box sx={styles.container}>
        <Box sx={styles.header}>
          <Box sx={styles.headerIconContainer}>
            <IconButton sx={styles.headerReturnIcon}>
              <CheckoutReturnArrow fontSize="inherit" />
            </IconButton>
          </Box>

          <Box sx={styles.overviewContainer}>
            <CoffeeBagWithBadge
              BadgeProps={{ badgeContent: BadgeProps.badgeContent }}
              {...coffeBagIconRest}
            />
          </Box>
        </Box>

        <List sx={styles.list}>
          {items.length > 0 ? (
            <Box sx={styles.listBody}>
              {items.map((value, index) => {
                return (
                  <CheckoutItem sx={{ width: 'auto' }} {...value} key={index} />
                );
              })}
              <CheckoutDiscount sx={styles.discount} />
            </Box>
          ) : (
            <Box> hello vard</Box>
          )}
        </List>

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
    </Drawer>
  );
}

export default CheckoutQuickview;

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
    justifyContent: 'center',
    alignItems: 'center',
    pr: { xs: '3em' },
  },

  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateRows: '9.55% 60.45% 30%',
  },

  list: {
    py: { xs: 0 },
    width: { xs: '33em', lg: '35em' },
    height: { xs: '100%' },
    overflowX: 'hidden',
    overflowY: 'scroll',
  },

  header: {
    width: '100%',
    height: '100%',
    borderBottom: (theme) =>
      `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
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
  },

  footer: {
    width: '100%',
    height: '100%',
    bgcolor: (theme) => theme.palette.primary.main,
    borderRadius: '0px 0px 0px 8px',
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
