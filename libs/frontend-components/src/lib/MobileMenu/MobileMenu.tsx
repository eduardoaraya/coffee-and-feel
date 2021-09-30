import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Box,
  BoxProps,
  SwipeableDrawer,
  Drawer,
  Paper,
  Button,
  IconButton,
  ButtonProps,
  SwipeableDrawerProps,
} from '@material-ui/core';
import { alpha } from '@material-ui/system';
import { Close } from '@material-ui/icons';
import _ from 'lodash';
import React from 'react';

type MobileMenuHandler = (...args: unknown[]) => void | Promise<unknown>;
type MobileMenuItem = {
  label: string;
  action: MobileMenuHandler;
};
type Image = {
  src: string;
  alt?: string;
};

export interface MobileMenuProps extends SwipeableDrawerProps {
  items: MobileMenuItem[];
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
  logo?: Image;
  logoClickHandler?: MobileMenuHandler;
}

export function MobileMenu({
  sx,
  anchor = 'right',
  logo = {
    src: 'logo.svg',
    alt: 'Coffee And Feel - Logo',
  },
  items = [],
  primaryAction,
  secondaryAction,
  onClose = _.noop,
  logoClickHandler = _.noop,
  ...rest
}: MobileMenuProps) {
  const menuClickHandler = React.useCallback(
    (event: React.SyntheticEvent, handler: (...args: unknown[]) => void) => {
      handler();
      onClose(event);
    },
    [onClose]
  );

  const { onClick: primaryActionClick = _.noop, ...primaryActionProps } = {
    ...primaryAction,
  };

  const { onClick: secondaryActionClick = _.noop, ...secondaryActionProps } = {
    ...secondaryAction,
  };

  return (
    <SwipeableDrawer
      onClose={onClose}
      anchor={anchor}
      sx={{ ...styles.root, ...sx }}
      {...rest}
    >
      <Box id="menu-paper" sx={styles.paper} elevation={0} component={Paper}>
        <Box sx={styles.paperInner}>
          <Box sx={styles.paperHeader}>
            <Box sx={styles.paperHeaderGrid}>
              <Box sx={styles.logoContainer}>
                <Box
                  onClick={(event: React.SyntheticEvent) =>
                    menuClickHandler(event, logoClickHandler)
                  }
                  sx={styles.logo}
                  src={logo.src}
                  alt={logo.alt}
                  component={'img'}
                />
              </Box>
              <Box sx={styles.closeButtonContainer}>
                <IconButton onClick={onClose} sx={styles.closeButton}>
                  <Close />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.paperBody}>
            <Box sx={styles.itemsContainer}>
              {items.map(({ action, label }, index) => {
                return (
                  <Button
                    onClick={(event) => menuClickHandler(event, action)}
                    sx={styles.item}
                    key={index}
                    variant="text"
                    color="primary"
                  >
                    {label}
                  </Button>
                );
              })}
            </Box>

            <Box sx={styles.actionsContainer}>
              <Button
                onClick={(event) =>
                  menuClickHandler(event, () => primaryActionClick(event))
                }
                {...primaryActionProps}
                sx={styles.primaryAction}
                variant="contained"
                color="primary"
              >
                Conhecer o clube
              </Button>

              <Button
                onClick={(event) =>
                  menuClickHandler(event, () => secondaryActionClick(event))
                }
                {...secondaryActionProps}
                sx={styles.secondaryAction}
                variant="text"
                color="secondary"
              >
                Ir para a loja
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}

export default MobileMenu;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  paper: {
    width: { xs: '31em', sm: '50em' },
    overflowX: 'hidden',
    height: { xs: '100%' },
  },
  paperHeader: {
    height: { xs: '6em' },
    width: { xs: '100%' },
    borderBottom: (theme) =>
      `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  },
  paperHeaderGrid: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  paperInner: {
    height: '100%',
  },
  paperBody: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    py: { xs: '7em' },
  },
  item: {
    borderRadius: { xs: '6px' },
    fontWeight: 800,
    color: '#333',

    ':hover': {
      color: (theme) => theme.palette.primary.main,
    },
  },
  logo: {
    width: 'auto',
    height: '100%',
  },
  logoContainer: {
    width: '100%',
    height: '100%',
    padding: { xs: '1.5em' },
    flexBasis: '40%',
  },
  closeButtonContainer: {
    flexBasis: '60%',
    display: 'flex',
    justifyContent: 'flex-end',
    pr: { xs: '1.5em' },
  },
  closeButton: {
    color: '#323232',
  },
  actionsContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: { xs: '2em' },
  },
  primaryAction: {
    width: 'fit-content',
  },
  secondaryAction: {
    borderRadius: { xs: '6px' },
  },
});
