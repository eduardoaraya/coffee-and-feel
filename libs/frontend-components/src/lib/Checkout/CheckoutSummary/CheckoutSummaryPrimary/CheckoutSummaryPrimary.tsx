import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Box,
  DrawerProps,
  Drawer,
  List,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  CheckoutItem,
  CheckoutItemProps,
} from '../CheckoutSummaryItem/CheckoutSummaryItem';
import { alpha } from '@material-ui/system';
import { CheckoutReturnArrow } from '@atlascode/coffee-frontend-svg';
import CheckoutDiscount from '../CheckoutSummaryDiscount/CheckoutSummaryDiscount';
import {
  CoffeeBagWithBadge,
  CoffeBagWithBadgeProps,
} from '../../../CoffeeBagWithBadge/CoffeeBagWithBadge';
import CheckoutSummaryPrimaryEmptyContent from './EmptyContentAnimation';
import { CheckoutSummaryBase } from '../CheckoutSummaryBase/CheckoutSummaryBase';

/* eslint-disable-next-line */
export interface CheckoutSummaryPrimaryProps extends DrawerProps {
  items?: CheckoutItemProps[];
  CoffeBagIconProps?: CoffeBagWithBadgeProps;
}

export function CheckoutSummaryPrimary({
  sx,
  anchor = 'right',
  open,
  onClose,
  items = [],
  CoffeBagIconProps,
  ...rest
}: CheckoutSummaryPrimaryProps) {
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
      <CheckoutSummaryBase
        sx={{ borderRadius: '0px', height: '100%', width: 'auto' }}
        headerContent={
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
        }
        bodyContent={
          <List sx={styles.list}>
            {items.length > 0 ? (
              <Box sx={styles.listBody}>
                {items.map((value, index) => {
                  return (
                    <CheckoutItem
                      sx={{ width: 'auto' }}
                      {...value}
                      key={index}
                    />
                  );
                })}
                <CheckoutDiscount sx={styles.discount} />
              </Box>
            ) : (
              <Box sx={styles.emptyCartContainer}>
                <CheckoutSummaryPrimaryEmptyContent />
              </Box>
            )}
          </List>
        }
        footerContent={
          <Box sx={styles.footerInner}>
            <Box sx={styles.totalContainer}>
              <Box>Subtotal:</Box>
              <Box>R$27,90</Box>
            </Box>

            <Typography sx={styles.footerCaption}>
              Frete, descontos e cupons são calculados na finalização da compra.
            </Typography>
          </Box>
        }
      />
    </Drawer>
  );
}

export default CheckoutSummaryPrimary;

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

  list: {
    py: { xs: 0 },
    width: { xs: '33em', lg: '35em' },
    height: { xs: '100%' },
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

  footerCaption: {
    color: (theme) => theme.palette.primary.contrastText,
    fontSize: { xs: '1.2em' },
    maxWidth: { xs: '36ch' },
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

  emptyCartContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
