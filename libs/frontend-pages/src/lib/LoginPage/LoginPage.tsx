import {
  SocialLoginButton,
  PasswordInput,
  PasswordInputProps,
  SocialLoginButtonProps,
} from '@atlascode/coffee-front-components';
import {
  Box,
  Theme,
  Grid,
  TextField,
  Button,
  InputAdornment,
  ButtonProps,
  BaseTextFieldProps,
  TextFieldProps,
} from '@material-ui/core';
import { SxProps } from '@material-ui/system';
import React from 'react';
import { Email } from '@material-ui/icons';
import _ from 'lodash';

/* eslint-disable-next-line */
export interface LoginPageProps {
  EmailInputFieldProps?: BaseTextFieldProps & TextFieldProps;
  PasswordInputFieldProps?: PasswordInputProps;
  ForgotPasswordProps?: ButtonProps;
  LoginButtonProps?: ButtonProps;
  CreateAccountLinkProps?: ButtonProps;
  SocialButtonFacebookProps?: SocialLoginButtonProps;
  SocialButtonGoogleProps?: SocialLoginButtonProps;
  backgroundImage?: {
    src: string;
    alt: string;
  };
}

const emailFieldDefaultProps: BaseTextFieldProps & TextFieldProps = {
  label: 'Email',
  variant: 'outlined',
  placeholder: 'Seu email...',
  fullWidth: true,
  InputProps: {
    startAdornment: (
      <InputAdornment
        position="start"
        sx={{ '.MuiSvgIcon-root': { fontSize: '1.2rem' } }}
      >
        <Email />
      </InputAdornment>
    ),
  },
};

const createAccountDefaultProps: ButtonProps = {
  children: 'Criar conta',
};

const socialButtonFacebookProps: SocialLoginButtonProps = {
  IconProps: {
    sx: {
      fontSize: { xs: '1rem !importat', lg: '1.5em !important' },
    },
  },
  variant: 'facebook',
};

const socialButtonGoogleProps: SocialLoginButtonProps = {
  IconProps: {
    sx: {
      fontSize: { xs: '1rem !importat', lg: '1.5em !important' },
    },
  },
  variant: 'google',
};

const loginPageImageProps: LoginPageProps['backgroundImage'] = {
  src: 'https://via.placeholder.com/1500',
  alt: 'Placeholder image alternative text',
};

const forgotPasswordButtonProps: LoginPageProps['ForgotPasswordProps'] = {
  children: 'Esqueci a senha',
  variant: 'text',
  size: 'small',
};

export function LoginPage({
  EmailInputFieldProps,
  CreateAccountLinkProps,
  PasswordInputFieldProps,
  LoginButtonProps,
  SocialButtonFacebookProps,
  SocialButtonGoogleProps,
  backgroundImage,
  ForgotPasswordProps,
}: LoginPageProps) {
  const passwordRef = React.useRef<HTMLElement>(null);

  const emailFieldProps = _.merge(EmailInputFieldProps, emailFieldDefaultProps);
  const createAccountButtonProps = _.merge(
    CreateAccountLinkProps,
    createAccountDefaultProps
  );
  const bgImageProps = _.merge(backgroundImage, loginPageImageProps);

  return (
    <Box sx={style.root}>
      <Box
        sx={{ height: { xs: 'auto', lg: '100vh' } }}
        component={Grid}
        flexDirection="row"
        container
      >
        <Box
          xs={12}
          lg={6}
          container
          item
          component={Grid}
          spacing={10}
          sx={{
            px: { xs: 5, lg: 12, xl: 40 },
            mt: { xs: 2, lg: 0 },
          }}
          justifyContent="center"
          flexDirection="column"
        >
          <Grid item>
            <TextField {...EmailInputFieldProps} />
          </Grid>

          <Grid item>
            <PasswordInput
              ref={passwordRef as any}
              {...PasswordInputFieldProps}
            />
          </Grid>

          <Grid item container spacing={3} flexDirection="column">
            <Grid spacing={2} container item>
              <Grid item container>
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Entrar
                </Button>
              </Grid>

              <Grid item container justifyContent="flex-end">
                <Button
                  {...ForgotPasswordProps}
                  sx={{
                    color: (theme) => theme.palette.grey[400],
                  }}
                >
                  Esqueci a senha
                </Button>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" item>
              <Button
                variant="text"
                sx={{
                  color: (theme) => theme.palette.grey[500],
                  fontSize: (theme) => theme.typography.subtitle2.fontSize,
                }}
                {...CreateAccountLinkProps}
              >
                Criar conta
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            container
            alignItems="center"
            spacing={4}
            flexDirection="column"
          >
            <Grid item>
              <SocialLoginButton {...SocialButtonGoogleProps}>
                Acessar com Google
              </SocialLoginButton>
            </Grid>

            <Grid item>
              <SocialLoginButton
                IconProps={{
                  sx: {
                    fontSize: { xs: '1rem !importat', lg: '1.5em !important' },
                  },
                }}
                variant="facebook"
                {...SocialButtonFacebookProps}
              >
                Acessar com Facebook
              </SocialLoginButton>
            </Grid>
          </Grid>
        </Box>

        <Box
          lg={6}
          sx={{ display: { xs: 'none', lg: 'block' } }}
          container
          item
          component={Grid}
        >
          <Box sx={style.imageContainer}>
            <Box sx={style.image} component="img" {...bgImageProps} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;

const style = {
  root: {
    width: '100%',
    overflow: 'hidden',
  } as SxProps<Theme>,

  mainGrid: {},

  imageGridContainer: {
    width: '100%',
  },

  imageContainer: {
    width: '100%',
    height: '100%',
  },

  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  } as SxProps<Theme>,
};
