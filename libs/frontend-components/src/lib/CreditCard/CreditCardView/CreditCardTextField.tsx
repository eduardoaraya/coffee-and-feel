import React from 'react';
import {
  BaseTextFieldProps,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import { darken, ResponsiveStyleValue } from '@material-ui/system';
import { Property } from 'csstype';
import _ from 'lodash';

export type CreditCardTextFieldProps = TextFieldProps;

const defaultStyles = (
  fontSize: ResponsiveStyleValue<Property.FontSize>
): CreditCardTextFieldProps['sx'] => {
  return {
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
  };
};

const CreditCardTextField = React.forwardRef(
  (
    {
      fontSize = '10px',
      sx,
      ...props
    }: CreditCardTextFieldProps & {
      fontSize?: ResponsiveStyleValue<Property.FontSize>;
    },
    ref: CreditCardTextFieldProps['ref']
  ) => {
    const styles = React.useMemo(
      () => _.merge(defaultStyles(fontSize), sx),
      [sx, fontSize]
    );

    return <TextField {...props} sx={{ ...styles }} ref={ref} />;
  }
);

export default CreditCardTextField;
