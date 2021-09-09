import {
  BaseTextFieldProps,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import React from 'react';
import FormContainer, { FormContainerProps } from './FormContainer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FirstFormProps {
  FormContainerProps?: FormContainerProps;
  firstNameField?: BaseTextFieldProps & TextFieldProps;
  lastNameField?: BaseTextFieldProps & TextFieldProps;
  emailField?: BaseTextFieldProps & TextFieldProps;
}

export const FirstForm = ({
  FormContainerProps,
  firstNameField,
  lastNameField,
  emailField,
}: FirstFormProps) => {
  return (
    <FormContainer {...FormContainerProps}>
      <TextField
        fullWidth
        placeholder="Nome"
        label="Nome"
        {...firstNameField}
      />
      <TextField
        fullWidth
        placeholder="Sobrenome"
        label="Sobrenome"
        {...lastNameField}
      />
      <TextField fullWidth placeholder="Email" label="Email" {...emailField} />
    </FormContainer>
  );
};

export default FirstForm;
