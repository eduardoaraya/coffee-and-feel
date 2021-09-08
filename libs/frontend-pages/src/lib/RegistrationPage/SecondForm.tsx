import { TextField } from '@material-ui/core';
import React from 'react';
import FormContainer, { FormContainerProps } from './FormContainer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FirstFormProps {
  FormContainerProps?: FormContainerProps;
}

export const SecondForm = ({ FormContainerProps }: FirstFormProps) => {
  return (
    <FormContainer {...FormContainerProps}>
      <TextField fullWidth placeholder="Data de nascimento" />
      <TextField fullWidth placeholder="Gênero" />
      <TextField fullWidth placeholder="CPF" />
      <TextField fullWidth placeholder="Telefone" />
    </FormContainer>
  );
};

export default SecondForm;
