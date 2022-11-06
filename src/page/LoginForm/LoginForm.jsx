import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from 'redux/Auth/AuthOperations';
import { TitleOne } from '../PhoneBook/PhoneBook.styled.js';
import {
  FormRegister,
  LabelRegister,
  InputRegister,
  ButtonRegister,
  ErrorText,
  Wrraper,
} from '../RegistrationForm/RegistrationForm.styled.js';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email address')
      .email('Email is not valid')
      .required('Email required'),
    password: yup
      .string('Enter your password')
      .min(8, 'At least 8 characters')
      .required('Password required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: event => {
      const email = event.email;
      const password = event.password;
      dispatch(login({ email, password }));
      navigate('/contacts');
    },
  });

  return (
    <>
      <TitleOne>Login page</TitleOne>

      <FormRegister onSubmit={formik.handleSubmit}>
        <LabelRegister>
          Email
          <Wrraper>
            <InputRegister
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              errors={formik.errors.email && formik.touched.email}
            />
            {formik.errors.email && formik.touched.email && (
              <ErrorText>{formik.errors.email}</ErrorText>
            )}
          </Wrraper>
        </LabelRegister>
        <LabelRegister>
          Password
          <Wrraper>
            <InputRegister
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              errors={formik.errors.password && formik.touched.password}
            />
            {formik.errors.password && formik.touched.password && (
              <ErrorText>{formik.errors.password}</ErrorText>
            )}
          </Wrraper>
        </LabelRegister>
        <ButtonRegister type="submit">Sign in</ButtonRegister>
      </FormRegister>
    </>
  );
};

export default LoginForm;
