import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginPage as LoginPageComponent } from '@atlascode/coffee-front-pages';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoginPageProps {}

const LoginPage = (props: LoginPageProps) => {
  const {
    submitForm,
    isSubmitting,
    isValid,
    values,
    errors,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Este campo é obrigatório')
        .email('É necessário ser um e-mail válido'),
      password: Yup.string().required('Este campo é obrigatório'),
    }),
    onSubmit: () => console.log('submitting'),
  });

  console.log(values);

  return (
    <LoginPageComponent
      EmailInputFieldProps={{
        variant: 'outlined',
        name: 'email',
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.email,
        error: Boolean(errors.email),
        helperText: errors.email,
      }}
      PasswordInputFieldProps={{
        name: 'password',
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.password,
        error: Boolean(errors.password),
        helperText: errors.password,
      }}
    />
  );
};

export default LoginPage;
