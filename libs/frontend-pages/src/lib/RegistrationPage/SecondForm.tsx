import {
  BaseTextFieldProps,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import React from 'react';
import FormContainer, { FormContainerProps } from './FormContainer';
// import { } from '@material-ui/core'
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from '@material-ui/lab';
import AdapterFns from '@material-ui/lab/AdapterDateFns';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FirstFormProps {
  FormContainerProps?: FormContainerProps;
  datePickerField?: DatePickerProps;
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
}: FirstFormProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterFns}>
      <FormContainer {...FormContainerProps}>
        <DatePicker
          onChange={() => console.log('hello')}
          renderInput={(props) => <TextField {...props} />}
          value={null}
          {...datePickerField}
        />
        <TextField fullWidth placeholder="Gênero" {...genderField} />
        <TextField fullWidth placeholder="CPF" {...cpfField} />
        <TextField fullWidth placeholder="Telefone" {...phoneField} />
      </FormContainer>
    </LocalizationProvider>
  );
};

export default SecondForm;
