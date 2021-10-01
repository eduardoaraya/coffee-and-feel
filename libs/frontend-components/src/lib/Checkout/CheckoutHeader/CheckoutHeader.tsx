import React from 'react';
import {
  Box,
  BoxProps,
  ButtonBase,
  IconButton,
  Typography,
} from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { KeyboardArrowDown } from '@material-ui/icons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckoutHeaderProps extends BoxProps {}

export const CheckoutHeader = ({ sx, ...rest }: CheckoutHeaderProps) => {
  return (
    <Box sx={{ ...styles.root, ...rest }}>
      <Box sx={styles.navbar}>
        <Box sx={styles.navbarInnerContainer}>
          <ButtonBase sx={styles.logoButton}>
            <Box sx={styles.logo} component="img" src="logo.svg" />
          </ButtonBase>

          <Box sx={styles.infoContainer}>
            <Box sx={styles.infoInner}>
              <Box sx={styles.infoBlock}>
                <Box sx={styles.infoNumeric}>
                  <Typography sx={styles.infoAmount}>2 itens</Typography>
                  <Typography sx={styles.infoPrice}>R$15,50</Typography>
                </Box>

                <IconButton size="small">
                  <KeyboardArrowDown color="primary" fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.anchor} />
    </Box>
  );
};

export default CheckoutHeader;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: '100%',
  },

  infoContainer: {
    flexGrow: 1,
    display: { xs: 'block', lg: 'none' },
  },

  infoInner: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },

  infoBlock: {
    width: { xs: '13.7em' },
    height: { xs: '100%' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: { xs: '1em' },
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

  logoButton: {
    width: { xs: '10.7em', lg: '13.7em' },
    height: 'auto',
    padding: '1.25em',
    borderRadius: '8px',
  },

  logo: {
    height: '100%',
    width: '100%',
  },

  navbar: {
    width: '100%',
    height: { xs: '6.7em', lg: '7.7em' },
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
  },

  anchor: {
    width: '100%',
    height: { xs: '6.7em', lg: '7.7em' },
    position: 'relative',
    visibility: 'hidden',
    display: 'block',
    opacity: 0,
  },

  navbarInnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});
