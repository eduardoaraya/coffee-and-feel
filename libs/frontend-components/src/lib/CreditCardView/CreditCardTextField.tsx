import React from 'react';
import {
  BaseTextFieldProps,
  TextField,
  createStyles,
  withStyles,
} from '@material-ui/core';
import { alpha, lighten, darken } from '@material-ui/system';

export type CreditCardTextFieldProps = BaseTextFieldProps;

const CreditCardTextField = React.forwardRef(
  (props: CreditCardTextFieldProps, ref: CreditCardTextFieldProps['ref']) => {
    return (
      <TextField
        {...props}
        sx={{
          '.MuiInput-input': {
            color: '#fff',
          },

          '.MuiInputLabel-root': {
            fontSize: '10px',

            ':not(.Mui-focused)': {
              color: darken('#fff', 0.05),
            },
          },

          '.MuiInputBase-root': {
            fontSize: '10px',
          },

          '.MuiInput-root': {
            transition: 'all 0.5s ease',

            ':before': {
              transition: 'all 0.5s ease',
              borderBottom: '1px solid #fff',
            },
            ':hover::before': {
              borderBottom: '2px solid #ffffffde !important',
            },
          },
        }}
        ref={ref}
      />
    );
  }
);

export default CreditCardTextField;
