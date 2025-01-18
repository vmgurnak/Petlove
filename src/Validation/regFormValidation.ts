import * as Yup from 'yup';

export const regFormValidation = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  email: Yup.string()
    .email('Enter a valid email!')
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter a valid email!'
    )
    .required('Email is required!'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters!')
    .required('Password is required!'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Repeat password is required'),
});
