import {
  BaseTextFieldProps,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import React from 'react';
import FormContainer, { FormContainerProps } from './FormContainer';
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
  MobileDatePicker,
  MobileDatePickerProps,
} from '@material-ui/lab';
import AdapterFns from '@material-ui/lab/AdapterDateFns';
import _ from 'lodash';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SecondFormProps {
  FormContainerProps?: FormContainerProps;
  datePickerField?: MobileDatePickerProps;
  genderField?: BaseTextFieldProps & TextFieldProps;
  cpfField?: Omit<BaseTextFieldProps, 'ref'> &
    Omit<TextFieldProps, 'ref'> &
    NumberFormatProps;
  phoneField?: Omit<BaseTextFieldProps, 'ref'> &
    Omit<TextFieldProps, 'ref'> &
    NumberFormatProps;
}

export const SecondForm = ({
  FormContainerProps,
  datePickerField,
  genderField,
  cpfField,
  phoneField,
}: SecondFormProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterFns}>
      <FormContainer {...FormContainerProps}>
        <MobileDatePicker {...(datePickerField as MobileDatePickerProps)} />
        <TextField fullWidth placeholder="Gênero" {...genderField} />
        <NumberFormat
          customInput={TextField}
          fullWidth
          placeholder="CPF"
          {...cpfField}
        />
        <NumberFormat
          customInput={TextField}
          fullWidth
          placeholder="Telefone"
          {...phoneField}
        />
      </FormContainer>
    </LocalizationProvider>
  );
};

export default SecondForm;
