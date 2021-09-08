import { Box, BoxProps, Button, ButtonProps } from '@material-ui/core';
import { ResponsiveStyleValue, alpha, darken } from '@material-ui/system';
import { Property } from 'csstype';
import { Twitter, Facebook, Google } from '@material-ui/icons';
import React from 'react';

const SocialVariants = ['twitter', 'google', 'facebook'] as const;
type SocialVariants = typeof SocialVariants[keyof typeof SocialVariants];

interface MuiButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
  variant?: SocialVariants;
  IconProps?: BoxProps;
  children?: React.ReactNode;
}

type IndexOf<T extends readonly unknown[]> = Exclude<
  Partial<T>['length'],
  T['length']
>;

const SocialIconSchemes: {
  [Key in typeof SocialVariants[IndexOf<typeof SocialVariants>]]: {
    backgroundColor: ResponsiveStyleValue<Property.BackgroundColor>;
    color: ResponsiveStyleValue<Property.Color>;
    icon: React.FC<unknown>;
  };
} = {
  facebook: {
    backgroundColor: '#3B5998',
    color: '#fff',
    icon: Facebook,
  },
  google: {
    backgroundColor: '#5B87E8',
    color: '#fff',
    icon: Google,
  },
  twitter: {
    backgroundColor: '#0f9afb',
    color: '#fff',
    icon: Twitter,
  },
} as const;

/* eslint-disable-next-line */
export interface SocialLoginButtonProps extends MuiButtonProps {}

export function SocialLoginButton({
  variant = 'twitter',
  IconProps,
  sx,
  ...rest
}: SocialLoginButtonProps) {
  const {
    backgroundColor,
    color,
    icon: Icon,
  } = SocialIconSchemes[variant as keyof typeof SocialIconSchemes];

  return (
    <Button
      startIcon={
        <Box
          sx={{ fontSize: { xs: '1rem !important' } }}
          component={Icon}
          {...IconProps}
        />
      }
      variant="contained"
      size="large"
      sx={{
        fontSize: '1rem !important',
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: '6px',
        gap: '1.25em',
        fontWeight: 700,
        ':hover': { backgroundColor: darken(backgroundColor as string, 0.2) },
        ...sx,
      }}
      {...rest}
    ></Button>
  );
}

export default SocialLoginButton;
