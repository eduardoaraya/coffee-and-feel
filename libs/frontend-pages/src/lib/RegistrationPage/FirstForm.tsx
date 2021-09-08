import { TextField } from '@material-ui/core';
import React from 'react';
import FormContainer, { FormContainerProps } from './FormContainer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FirstFormProps {
  FormContainerProps?: FormContainerProps;
}

export const FirstForm = ({ FormContainerProps }: FirstFormProps) => {
  return (
    <FormContainer {...FormContainerProps}>
      <TextField fullWidth placeholder="Nome" label="Nome" />
      <TextField fullWidth placeholder="Sobrenome" label="Sobrenome" />
      <TextField fullWidth placeholder="Email" label="Email" />
    </FormContainer>
  );
};

export default FirstForm;
