import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/Auth/AuthOperations';
import { TitleOne } from '../PhoneBook/PhoneBook.styled.js';
import {
  FormRegister,
  LabelRegister,
  InputRegister,
  ButtonRegister,
  ErrorText,
  Wrraper,
  ButtonVisibillity,
} from './RegistrationForm.styled.js';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .max(40, 'Maximum length 40 characters')
      .required('Name required'),
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
      name: '',
      email: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: event => {
      const name = event.name;
      const email = event.email;
      const password = event.password;
      dispatch(register({ name, email, password }));
    },
  });

  return (
    <>
      <TitleOne>Registration page</TitleOne>
      <FormRegister onSubmit={formik.handleSubmit}>
        <LabelRegister>
          Name
          <Wrraper>
            <InputRegister
              type="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <ErrorText>{formik.errors.name}</ErrorText>
            )}
          </Wrraper>
        </LabelRegister>

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
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              errors={formik.errors.password && formik.touched.password}
            />
            <ButtonVisibillity
              type="button"
              onClick={handleClickShowPassword}
              errors={formik.errors.password && formik.touched.password}
            >
              {!showPassword ? (
                <MdVisibilityOff size={24} />
              ) : (
                <MdVisibility size={24} />
              )}
            </ButtonVisibillity>
            {formik.errors.password && formik.touched.password && (
              <ErrorText>{formik.errors.password}</ErrorText>
            )}
          </Wrraper>
        </LabelRegister>

        <ButtonRegister type="submit">Register</ButtonRegister>
      </FormRegister>
    </>
  );
};

export default RegistrationForm;
