import React from 'react';
import { Box } from '@material-ui/core';
import { alpha } from '@material-ui/system';

export interface DotProps {
  index?: number;
  value?: number;
}

export const Dot = ({ index, value }: DotProps) => {
  return (
    <Box
      sx={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        boxShadow: (theme) => theme.shadows[5],
        backgroundColor: (theme) =>
          value === index
            ? theme.palette.primary.main
            : alpha(theme.palette.primary.main, 0.4),
      }}
    />
  );
};

export default Dot;
