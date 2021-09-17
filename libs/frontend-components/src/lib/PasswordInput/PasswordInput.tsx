import React from 'react';
import {
  TextField,
  BaseTextFieldProps,
  InputAdornment,
  TextFieldProps,
  IconButton,
} from '@material-ui/core';
import _ from 'lodash';

import { Lock, Visibility, VisibilityOff } from '@material-ui/icons';
// import { TextFieldProps } from 'material-ui';

export type PasswordInputProps = BaseTextFieldProps & TextFieldProps;

const defaultProps = (
  visible: boolean,
  onClick: (...args: unknown[]) => void
): PasswordInputProps => {
  return {
    fullWidth: true,
    variant: 'outlined',
    label: 'Senha',
    type: visible ? 'password' : 'text',
    InputProps: {
      endAdornment: (
        <InputAdornment
          onClick={onClick}
          sx={{ '.MuiSvgIcon-root': { fontSize: '1.2rem' } }}
          position="end"
        >
          {visible ? (
            <IconButton>
              <VisibilityOff />
            </IconButton>
          ) : (
            <IconButton>
              <Visibility />
            </IconButton>
          )}
        </InputAdornment>
      ),

      startAdornment: (
        <InputAdornment
          position="start"
          sx={{
            '.MuiSvgIcon-root': {
              fontSize: '1.2rem',
            },
          }}
        >
          <Lock />
        </InputAdornment>
      ),
    },
  };
};

export const PasswordInput = React.forwardRef(
  (props: PasswordInputProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [passwordVisible, setPasswordVisible] =
      React.useState<boolean>(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible((prevState) => !prevState);
    };

    const mergedProps = React.useMemo(
      () =>
        _.merge(defaultProps(passwordVisible, togglePasswordVisibility), props),
      [props, passwordVisible]
    );

    return <TextField ref={ref} {...mergedProps} />;
  }
);

export default PasswordInput;
