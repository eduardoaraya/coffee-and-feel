import React from 'react';
import { Box, BoxProps, SvgIcon, Theme, ButtonBase } from '@material-ui/core';
import { SxProps } from '@material-ui/system';
import { SvgIconComponent } from '@material-ui/icons';
import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-react-hooks';

export interface IconButtonFilledProps extends BoxProps<typeof ButtonBase> {
  icon: SvgIconComponent;
  url: string;
  color?: 'primary' | 'secondary';
}

const IconButtonFilled = ({
  color = 'secondary',
  icon: Icon,
  sx,
  url,
}: IconButtonFilledProps) => {
  const stylesMemo = useMemoizedMergedObject(defaultStyles(color), sx, [color]);

  return (
    <Box component={ButtonBase} sx={stylesMemo}>
      <a className="link" target="_blank" href={url} rel="noreferrer">
        <SvgIcon className="icon" component={Icon} />
      </a>
    </Box>
  );
};

export default IconButtonFilled;

const defaultStyles = (color: 'primary' | 'secondary' = 'primary') => {
  return {
    display: 'flex',
    fontSize: '10px',
    width: '3em',
    height: '3em',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: (theme) => theme.palette[color].main,

    '.link': {
      outline: 'none',
      color: 'inherit',
      p: 0,
      m: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '.icon': {
      fill: (theme) => theme.palette[color].contrastText,
      fontSize: '1.6em',
    },
  } as SxProps<Theme>;
};
