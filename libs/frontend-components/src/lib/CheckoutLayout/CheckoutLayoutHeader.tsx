import React from 'react';
import { Box, BoxProps, ButtonBase } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CheckoutLayoutHeaderProps extends BoxProps {}

const CheckoutLayoutHeader = ({ sx, ...rest }: CheckoutLayoutHeaderProps) => {
  return (
    <Box sx={{ ...styles.root, ...rest }}>
      <Box sx={styles.navbar}>
        <Box sx={styles.navbarInnerContainer}>
          <ButtonBase sx={styles.logoButton}>
            <Box sx={styles.logo} component="img" src="logo.svg" />
          </ButtonBase>
        </Box>
      </Box>
      <Box sx={styles.anchor} />
    </Box>
  );
};

export default CheckoutLayoutHeader;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: '100%',
  },

  logoButton: {
    width: { xs: '10.7em', lg: '13.7em' },
    height: 'auto',
    padding: '1.25em',
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
