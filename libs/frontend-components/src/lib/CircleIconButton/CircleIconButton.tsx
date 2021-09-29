import {
  BoxProps,
  ButtonBase,
  Theme,
  Box,
  PaperProps,
  Button,
} from '@material-ui/core';
import { ResponsiveStyleValue, SxProps } from '@material-ui/system';
import { ArrowForwardSharp, SvgIconComponent } from '@material-ui/icons';
import { Property } from 'csstype';
import React from 'react';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';

/* eslint-disable-next-line */
export interface CircleIconButtonProps extends BoxProps<typeof Button> {
  fontSize?: ResponsiveStyleValue<Property.FontSize>;
  color?: 'primary' | 'secondary';
  icon?: SvgIconComponent;
  inverted?: boolean;
  elevation?: PaperProps['elevation'];
}

export function CircleIconButton({
  sx,
  color = 'primary',
  fontSize = '10px',
  icon: Icon = ArrowForwardSharp,
  inverted = false,
  elevation = 3,
  ...rest
}: CircleIconButtonProps) {
  const defaultStylesMemo = React.useMemo(
    () => defaultStyles(fontSize, color, inverted, elevation),
    [fontSize, color, inverted, elevation]
  );

  return (
    <Box
      {...rest}
      sx={{ ...defaultStylesMemo.root, ...sx }}
      component={ButtonBase}
    >
      <Box component={Icon} className="icon-inner" />
    </Box>
  );
}

export default CircleIconButton;

const defaultStyles = (
  fontSize: ResponsiveStyleValue<Property.FontSize> = '10px',
  color: 'primary' | 'secondary',
  inverted = false,
  elevation = 0
) =>
  AtlasStylesheet.create({
    root: {
      fontSize: fontSize,
      width: '4em',
      height: '4em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      padding: '2.35em',
      boxShadow: (theme) => theme.shadows[elevation],
      bgcolor: (theme) =>
        inverted
          ? theme.palette[color].main
          : theme.palette[color].contrastText,
      color: (theme) =>
        inverted
          ? theme.palette[color].contrastText
          : theme.palette[color].main,
    },
    '.icon-inner': {
      fontSize: '2.6em',
    },
  });
