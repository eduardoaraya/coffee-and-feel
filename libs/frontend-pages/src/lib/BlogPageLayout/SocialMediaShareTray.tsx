import React from 'react';
import {
  Box,
  BoxProps,
  IconButton,
  IconButtonClassKey,
  Theme,
  Typography,
} from '@material-ui/core';
import {
  WhatsApp,
  Facebook,
  Instagram,
  SvgIconComponent,
} from '@material-ui/icons';
import { SxProps } from '@material-ui/system';
import { useMemoizedMergedObject } from '@atlascode/coffee-frontend-hooks';
import IconButtonFilled from './IconButtonFilled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SocialMediaShareTrayProps {
  ContainerProps?: BoxProps;
  socialMediaList?: Array<{ icon: SvgIconComponent; url: string }>;
}

export const SocialMediaShareTray = ({
  ContainerProps,
  socialMediaList = [
    { icon: WhatsApp, url: 'https://placeholder.com' },
    { icon: Facebook, url: 'https://placeholder.com' },
    { icon: Instagram, url: 'https://placeholder.com' },
  ],
}: SocialMediaShareTrayProps) => {
  const defaultStylesMemo = useMemoizedMergedObject(
    defaultStyles(),
    ContainerProps?.sx
  );

  return (
    <Box sx={defaultStylesMemo}>
      <Box className="bar" />

      <Box className="innerContainer">
        <Typography className="typography" variant="caption">
          Compartilhe a postagem em suas redes sociais.
        </Typography>

        <Box className="socialMediaTray">
          {socialMediaList.map(({ icon: Icon, url }, index) => {
            return (
              <IconButtonFilled
                className="socialMediaTray-iconButton"
                color="secondary"
                key={index}
                icon={Icon}
                url={url}
              ></IconButtonFilled>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SocialMediaShareTray;

const defaultStyles = () => {
  return {
    fontSize: '10px',
    display: 'flex',
    width: '20em',
    height: '16em',
    gap: 2.5,

    '.bar': {
      width: '8px',
      height: '100%',
      bgcolor: (theme) => theme.palette.secondary.main,
      borderRadius: '2.5em',
    },

    '.innerContainer': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 2.5,
    },

    '.typography': {
      fontSize: '1.1em',
      fontWeight: 600,
      color: (theme) => theme.palette.secondary.light,
    },

    '.socialMediaTray': {
      display: 'flex',
      gap: 2,
    },

    '.socialMediaTray-iconButton': {
      bgcolor: (theme) => theme.palette.secondary.main,
      fontSize: '0.5em',

      '.icon': {
        fill: (theme) => theme.palette.secondary.contrastText,
      },
    },
  } as SxProps<Theme>;
};
