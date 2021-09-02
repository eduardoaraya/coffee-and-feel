import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Button,
  IconButton,
  IconButtonProps,
  ButtonProps,
} from '@material-ui/core';
import { Facebook, Twitter, Google } from '@material-ui/icons';
import PasswordInput, { PasswordInputProps } from './PasswordInput';
import UsernameInput, { UsernameInputProps } from './UsernameInput';

export interface LoginFormFields {
  name: string;
  email: string;
}

export interface LoginProps {
  PasswordInputProps?: PasswordInputProps;
  UsernameInputProps?: UsernameInputProps;
  SocialButtonOneProps?: IconButtonSocialBaseProps;
  SocialButtonTwoProps?: IconButtonSocialBaseProps;
  SocialButtonThreeProps?: IconButtonSocialBaseProps;
  ForgotPasswordButtonProps?: ButtonProps;
}

const Login = ({
  PasswordInputProps,
  UsernameInputProps,
  SocialButtonOneProps,
  SocialButtonTwoProps,
  SocialButtonThreeProps,
  ForgotPasswordButtonProps,
}: LoginProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1rem',
        ':before': {
          backgroundImage:
            'url(https://images.pexels.com/photos/2860804/pexels-photo-2860804.jpeg?cs=srgb&dl=pexels-anni-roenkae-2860804.jpg&fm=jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          content: "''",
          filter: 'saturate(0.4)',
        },
      }}
    >
      <Paper
        sx={{
          minWidth: { xs: '100%', md: '400px' },
          minHeight: { xs: '100%', md: 'auto' },
          px: 4,
          py: 4,
          zIndex: 50,
        }}
      >
        <Grid container spacing={4} direction="column">
          <Grid item xs={2}>
            <Box
              component="h1"
              sx={{
                textAlign: 'center',
                m: 0,
                p: 0,
                fontSize: 'clamp(1.8em, 3.5vw, 2.2em',
                color: (theme) => theme.palette.secondary.dark,
              }}
            >
              Login
            </Box>
          </Grid>
          <Grid item container direction="column" spacing={4} xs={8}>
            <Grid item xs={4}>
              <UsernameInput {...UsernameInputProps} />
            </Grid>

            <Grid item xs={4}>
              <PasswordInput {...PasswordInputProps} />
            </Grid>

            <Grid item xs={1}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  variant="text"
                  color="secondary"
                  {...ForgotPasswordButtonProps}
                >
                  Esqueceu a senha?
                </Button>
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Button fullWidth variant="contained" color="primary">
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box sx={{ color: (theme) => theme.palette.grey[400] }}>
                Ou entre usando
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <IconButtonSocialBase {...SocialButtonOneProps}>
                  <Facebook />
                </IconButtonSocialBase>

                <IconButtonSocialBase {...SocialButtonTwoProps}>
                  <Twitter />
                </IconButtonSocialBase>

                <IconButtonSocialBase {...SocialButtonThreeProps}>
                  <Google />
                </IconButtonSocialBase>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;

export type IconButtonSocialBaseProps = IconButtonProps;

const IconButtonSocialBase = ({ ...rest }: IconButtonSocialBaseProps) => {
  return (
    <IconButton
      sx={{
        '.MuiSvgIcon-root': {
          fontSize: { xs: '1.5rem' },
          zIndex: 25,
        },
      }}
      {...rest}
    />
  );
};
