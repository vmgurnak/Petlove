import toast from 'react-hot-toast';

import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputForm from '../InputForm/InputForm.tsx';
import Title from '../../Title/Title.tsx';
import Button from '../Button/Button.tsx';

import { useAppDispatch } from '../../../redux/hooks.ts';
import { apiRegister } from '../../../redux/auth/operations.ts';
import { regFormValidation } from '../../../Validation/regFormValidation.ts';

import css from './RegistrationForm.module.css';

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(regFormValidation),
  });

  const dispatch = useAppDispatch();

  const disabled = !isValid || !isDirty;
  const disabledMemo = useMemo(() => disabled, [disabled]);

  console.log(disabledMemo);

  interface dataRegister {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
  }

  const onSubmit = (data: dataRegister) => {
    console.log(data);
    dispatch(
      apiRegister({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    )
      .unwrap()
      .then(() => toast('Registration successful'))
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    reset();
  };

  return (
    <div className={css.registrationWpap}>
      <div className={css.registrationForm}>
        <Title textTitle="Registration" addClass={css.title} />
        <p className={css.text}>Thank you for your interest in our platform.</p>
        <form
          className={css.form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="on"
          noValidate
        >
          <InputForm
            placeholder="Name"
            error={errors.name ? true : false}
            valueInput={watch('name')}
            addClass={css.inputWrap}
            {...register('name')}
          >
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </InputForm>
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
          <InputForm
            type="password"
            placeholder="Confirm Password"
            error={errors.repeatPassword ? true : false}
            valueInput={watch('repeatPassword')}
            iconEye={true}
            addClass={css.inputWrap}
            {...register('repeatPassword')}
          >
            {errors.repeatPassword && (
              <p className={css.error}>{errors.repeatPassword.message}</p>
            )}
          </InputForm>
          <Button type="submit" disabled={disabledMemo}>
            Log in
          </Button>
          <p className={css.textLink}>
            Already have an account?
            <Link className={css.link} to="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
