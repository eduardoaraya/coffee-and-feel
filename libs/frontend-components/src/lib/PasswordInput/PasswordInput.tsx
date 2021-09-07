import React from 'react';
import {
  TextField,
  BaseTextFieldProps,
  InputAdornment,
  IconButton,
} from '@material-ui/core';

import { Lock, Visibility, VisibilityOff } from '@material-ui/icons';

export type PasswordInputProps = BaseTextFieldProps;

const PasswordInput = ({ ...rest }: PasswordInputProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <TextField
      label="Senha"
      type={passwordVisible ? 'password' : 'text'}
      InputProps={{
        endAdornment: (
          <InputAdornment
            onClick={togglePasswordVisibility}
            sx={{ '.MuiSvgIcon-root': { fontSize: '1.2rem' } }}
            position="end"
          >
            {passwordVisible ? (
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
      }}
      variant="standard"
      fullWidth
      {...rest}
    />
  );
};

export default PasswordInput;
