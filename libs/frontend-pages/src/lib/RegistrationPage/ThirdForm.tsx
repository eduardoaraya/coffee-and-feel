import { TextField } from '@material-ui/core';
import React from 'react';
import FormContainer, { FormContainerProps } from './FormContainer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FirstFormProps {
  FormContainerProps?: FormContainerProps;
}

export const ThirdForm = ({ FormContainerProps }: FirstFormProps) => {
  return (
    <FormContainer {...FormContainerProps}>
      <TextField fullWidth placeholder="Senha" label="Senha" />
      <TextField
        fullWidth
        placeholder="Confirmar senha"
        label="Confirmar senha"
      />
    </FormContainer>
  );
};

export default ThirdForm;
