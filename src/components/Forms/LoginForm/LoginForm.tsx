import toast from 'react-hot-toast';

import { useMemo } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputForm from '../InputForm/InputForm.tsx';
import Title from '../../Title/Title';
import Button from '../Button/Button.tsx';

import { useAppDispatch } from '../../../redux/hooks.ts';
import { apiLogin } from '../../../redux/auth/operations.ts';
import { loginFormValidation } from '../../../Validation/loginFormValidation.ts';

import css from './LoginForm.module.css';

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginFormValidation),
  });

  const dispatch = useAppDispatch();

  const disabled = !isValid || !isDirty;
  const disabledMemo = useMemo(() => disabled, [disabled]);

  console.log(disabledMemo);

  interface userLogin {
    email: string;
    password: string;
  }

  const onSubmit = (data: userLogin) => {
    dispatch(apiLogin(data))
      .unwrap()
      .then(() => {
        toast('Login successful');
      })
      .catch((error) => toast.error(error.response.data.message));
    reset();
  };

  return (
    <div className={css.loginWrap}>
      <div className={css.loginForm}>
        <Title textTitle="Log in" addClass={css.title} />
        <p className={css.text}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <form
          className={css.form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="on"
          noValidate
        >
          <InputForm
            type="email"
            placeholder="Email"
            error={errors.email ? true : false}
            valueInput={watch('email')}
            addClass={css.inputWrap}
            {...register('email')}
          >
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </InputForm>
          <InputForm
            type="password"
            placeholder="Password"
            error={errors.password ? true : false}
            valueInput={watch('password')}
            iconEye={true}
            addClass={css.inputWrap}
            {...register('password')}
          >
            {errors.password && (
              <p className={css.error}>{errors.password.message}</p>
            )}
          </InputForm>
          <Button type="submit" disabled={disabledMemo}>
            Log in
          </Button>

          <p className={css.textLink}>
            Don’t have an account?
            <Link className={css.link} to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
