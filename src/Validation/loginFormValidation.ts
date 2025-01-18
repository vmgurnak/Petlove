import * as Yup from 'yup';

export const signInFormValidation = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters!')
    .matches(/[a-zA-Z]/, 'Password must be contain at least one Latin letter.')
    .required('Password is required!'),
});
