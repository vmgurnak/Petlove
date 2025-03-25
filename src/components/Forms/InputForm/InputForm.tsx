import clsx from 'clsx';
import { FC, forwardRef, LegacyRef, useState } from 'react';

import { SvgIcon } from '../../REUSABLE/SvgIcon';
import { ICONS } from '../../../constants/constants';

import css from './InputForm.module.css';

interface InputFormProps {
  children: React.ReactNode;
  type?: string;
  placeholder?: string;
  error?: boolean;
  valueInput?: string;
  iconEye?: boolean;
  addClass?: string;
  ref?: LegacyRef<HTMLInputElement>;
}

// export type InputFormRef = LegacyRef<HTMLInputElement>;

const InputForm: FC<InputFormProps> = forwardRef(
  (
    {
      children,
      type = 'text',
      placeholder = '',
      error = false,
      valueInput,
      iconEye = false,
      addClass = '',
      ...otherProps
    },
    ref
  ): JSX.Element => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const isValid = Boolean(!error && valueInput);

    // console.log('error', !error);
    // console.log('value', valueInput);
    // console.log('isValid', isValid);

    const handleFocus = () => setIsFocused(true);
    const handlePassword = () => setShowPassword(!showPassword);

    return (
      <label className={clsx(css.label, addClass)}>
        <input
          className={clsx(css.input, {
            [css.error]: error,
            [css.focused]: isFocused,
            [css.valid]: isValid,
          })}
          ref={ref}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          onFocus={handleFocus}
          {...otherProps}
        />
        <div className={css.iconWrap}>
          {valueInput && (
            <SvgIcon
              addClass={css.icon}
              icon={isValid ? ICONS.check : ICONS.cross}
            />
          )}
          {iconEye && (
            <button type="button" onClick={handlePassword}>
              <SvgIcon
                addClass={css.icon}
                icon={showPassword ? ICONS.eye : ICONS.eyeOff}
              />
            </button>
          )}
        </div>
        {children}
      </label>
    );
  }
);

InputForm.displayName = 'InputForm';

export default InputForm;
