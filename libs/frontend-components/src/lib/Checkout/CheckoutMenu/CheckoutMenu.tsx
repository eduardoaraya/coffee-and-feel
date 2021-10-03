import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, DrawerProps, Drawer, List, ListItem } from '@material-ui/core';
import { alpha } from '@material-ui/system';

/* eslint-disable-next-line */
export interface CheckoutMenuProps extends DrawerProps {}

export function CheckoutMenu({
  sx,
  anchor = 'right',
  open,
  onClose,
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
      <Box sx={styles.container}>
        <Box sx={styles.header}></Box>

        <List sx={styles.list}>
          <Box sx={styles.listBody}></Box>
        </List>

        <Box sx={styles.footer}></Box>
      </Box>
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

  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateRows: '9.55% 60.45% 30%',
  },

  list: {
    width: { xs: '31em' },
    height: { xs: '100%' },
    overflowX: 'hidden',
    overflowY: 'scroll',
  },

  header: {
    width: '100%',
    height: '100%',
    borderBottom: (theme) =>
      `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  },

  headerInner: {
    display: 'flex',
  },

  headerReturnIcon: {},

  headerOverviewContainer: {},

  listBody: {
    width: '100%',
  },

  footer: {
    width: '100%',
    height: '100%',
    bgcolor: (theme) => theme.palette.primary.main,
    borderRadius: '0px 0px 0px 8px',
  },
});
