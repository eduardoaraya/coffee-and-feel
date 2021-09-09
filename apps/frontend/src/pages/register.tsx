import { RegistrationPage } from '@atlascode/coffee-front-pages';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { TextField } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegisterPageProps {}

const MAX_INDEX = 2;

const RegisterPage = (props: RegisterPageProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    submitForm,
    isSubmitting,
    isValid,
    setFieldValue,
    setFieldTouched,
    setFieldError,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      // Second step
      birthday: '',
      gender: '',
      cpf: '',
      phone: '',
      // Third Step
      password: '',
      passwordConfirmation: '',
    },
    onSubmit: (values, action) => console.log(values),
    validationSchema: Yup.object({
      firstName: Yup.string().required('Este campo é obrigatório'),
      lastName: Yup.string().required('Este campo é obrigatório'),
      email: Yup.string()
        .email('Precisa ser um e-mail válido')
        .required('Este campo é obrigatório'),
      birthday: Yup.string().required('Este campo é obrigatório'),
      gender: Yup.string().required('Este campo é obrigatório'),
      // Fazer validação de REGEX do CPF
      cpf: Yup.string().required('Este campo é obrigatório'),
      // Utilizar máscara para forçar padrão de formatação
      phone: Yup.string().required('Este campo é obrigatório'),
      password: Yup.string().required('Este campo é obrigatório'),
      passwordConfirmation: Yup.string().required('Este campo é obrigatório'),
    }),
  });

  const handleForward = () => {
    if (activeIndex < MAX_INDEX) {
      setActiveIndex((prevState) => prevState + 1);
    }
  };

  const handleBackward = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  console.log(values);

  return (
    <RegistrationPage
      activeIndex={activeIndex as 0 | 1 | 2}
      FirstFormProps={{
        emailField: {
          name: 'email',
          value: values.email,
          error: Boolean(errors.email),
          helperText: errors.email,
          onChange: handleChange,
          onBlur: handleBlur,
        },
        firstNameField: {
          name: 'firstName',
          value: values.firstName,
          error: Boolean(errors.firstName),
          helperText: errors.firstName,
          onChange: handleChange,
          onBlur: handleBlur,
        },
        lastNameField: {
          name: 'lastName',
          value: values.lastName,
          helperText: errors.lastName,
          error: Boolean(errors.lastName),
          onChange: handleChange,
          onBlur: handleBlur,
        },
      }}
      SecondFormsProps={{
        cpfField: {
          name: 'cpf',
          value: values.cpf,
          error: Boolean(errors.cpf),
          helperText: errors.cpf,
          onChange: handleChange,
          onBlur: handleBlur,
        },
        datePickerField: {
          // eslint-disable-next-line react/display-name
          renderInput: (props) => (
            <TextField
              {...props}
              value={values.birthday}
              helperText={errors.birthday}
              error={Boolean(errors.birthday)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ),

          label: 'Data de nascimento',
          onChange: (date) => {
            setFieldValue('birthday', new Date(date as Date).toJSON());
          },
          value: new Date(values.birthday),
        },
      }}
      ForwardButtonProps={{
        onClick: handleForward,
        children: activeIndex < MAX_INDEX ? 'Avançar' : 'Criar conta',
      }}
      BackwardButtonProps={{
        onClick: handleBackward,
        disabled: activeIndex === 0,
      }}
    />
  );
};

export default RegisterPage;
