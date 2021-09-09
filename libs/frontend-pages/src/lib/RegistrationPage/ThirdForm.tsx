import { TextField } from '@material-ui/core';
import React from 'react';
import FormContainer, { FormContainerProps } from './FormContainer';
import {
  PasswordInput,
  PasswordInputProps,
} from '@atlascode/coffee-front-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FirstFormProps {
  FormContainerProps?: FormContainerProps;
  passwordField?: PasswordInputProps;
  passwordConfirmField?: PasswordInputProps;
}

export const ThirdForm = ({
  FormContainerProps,
  passwordField,
  passwordConfirmField,
}: FirstFormProps) => {
  return (
    <FormContainer {...FormContainerProps}>
      <PasswordInput
        fullWidth
        placeholder="Senha"
        label="Senha"
        {...passwordField}
      />
      <PasswordInput
        fullWidth
        placeholder="Confirmar senha"
        label="Confirmar senha"
        {...passwordConfirmField}
      />
    </FormContainer>
  );
};

export default ThirdForm;
