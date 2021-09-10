import React from 'react';
import { BaseTextFieldProps, TextField } from '@material-ui/core';
import { darken, ResponsiveStyleValue } from '@material-ui/system';
import { Property } from 'csstype';

export type CreditCardTextFieldProps = BaseTextFieldProps;

const CreditCardTextField = React.forwardRef(
  (
    {
      fontSize = '10px',
      ...props
    }: CreditCardTextFieldProps & {
      fontSize?: ResponsiveStyleValue<Property.FontSize>;
    },
    ref: CreditCardTextFieldProps['ref']
  ) => {
    return (
      <TextField
        {...props}
        sx={{
          '> *': {
            fontSize: `${fontSize} !important`,
          },

          '.MuiInput-input': {
            color: '#fff',
          },

          '.MuiInputLabel-root': {
            ':not(.Mui-focused)': {
              color: darken('#fff', 0.05),
            },
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
