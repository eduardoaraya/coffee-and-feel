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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SecondFormProps {
  FormContainerProps?: FormContainerProps;
  datePickerField?: MobileDatePickerProps;
  genderField?: BaseTextFieldProps & TextFieldProps;
  cpfField?: BaseTextFieldProps & TextFieldProps;
  phoneField?: BaseTextFieldProps & TextFieldProps;
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
        <TextField fullWidth placeholder="CPF" {...cpfField} />
        <TextField fullWidth placeholder="Telefone" {...phoneField} />
      </FormContainer>
    </LocalizationProvider>
  );
};

export default SecondForm;
