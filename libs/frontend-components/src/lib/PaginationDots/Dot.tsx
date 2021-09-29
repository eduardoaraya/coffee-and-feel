/* eslint-disable @typescript-eslint/no-empty-interface */
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { BoxProps, Box } from '@material-ui/core';
import React from 'react';

export interface DotProps extends BoxProps {
  active?: boolean;
  elevation?: number;
  color?: 'primary' | 'secondary';
}

const Dot = ({ sx, active, elevation = 3, color, ...rest }: DotProps) => {
  return (
    <Box
      sx={{ ...styles.root(active, color, elevation), ...sx }}
      {...rest}
    ></Box>
  );
};

export default Dot;

const styles = AtlasStylesheet.create({
  root: (
    active = true,
    color: 'primary' | 'secondary' = 'primary',
    elevation = 3
  ) => {
    return {
      fontSize: '10px',
      width: '1.1em',
      height: '1.1em',
      borderRadius: '50%',
      bgcolor: (theme) =>
        (active && theme.palette[color].main) ||
        theme.palette[color].contrastText,
      boxShadow: (theme) => theme.shadows[elevation],
      transition: 'all 0.5s ease',
    };
  },
});
