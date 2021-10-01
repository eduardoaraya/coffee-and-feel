import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CheckoutLayoutHeaderProps extends BoxProps {}

const CheckoutLayoutHeader = ({ sx, ...rest }: CheckoutLayoutHeaderProps) => {
  return <Box sx={{ ...styles.root, ...rest }}></Box>;
};

export default CheckoutLayoutHeader;

const styles = AtlasStylesheet.create({
  root: {},
});
