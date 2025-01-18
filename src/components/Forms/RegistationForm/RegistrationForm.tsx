import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import Title from '../../Title/Title';
import { ICONS } from '../../../constants/constants.ts';
import { SvgIcon } from '../../../helpers/SvgIcon.tsx';
import { regFormValidation } from '../../../Validation/regFormValidation.ts';

import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(regFormValidation),
  });

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const onSubmit = (data: object) => {
    console.log(data);
    reset();
  };

  return (
    <div className={css.registrationForm}>
      <Title textTitle="Registration" addClass={css.title} />
      <p className={css.text}>Thank you for your interest in our platform.</p>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        noValidate
      >
        <label className={css.label}>
          <input
            className={css.input}
            type="text"
            placeholder="Name"
            {...register('name')}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </label>
        <label className={css.label}>
          <input
            className={css.input}
            type="email"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </label>
        <label className={css.label}>
          <input
            className={css.input}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}
          <button
            className={css.btnIcon}
            type="button"
            onClick={handleTogglePassword}
          >
            <SvgIcon
              addClass={css.icon}
              icon={showPassword ? ICONS.eye : ICONS.eyeOff}
            />
          </button>
        </label>
        <label className={css.label}>
          <input
            className={css.input}
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            {...register('repeatPassword')}
          />
          {errors.repeatPassword && (
            <p className={css.error}>{errors.repeatPassword.message}</p>
          )}
          <button
            className={css.btnIcon}
            type="button"
            onClick={handleTogglePassword}
          >
            <SvgIcon
              addClass={css.icon}
              icon={showPassword ? ICONS.eye : ICONS.eyeOff}
            />
          </button>
        </label>

        <button className={css.btn} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
