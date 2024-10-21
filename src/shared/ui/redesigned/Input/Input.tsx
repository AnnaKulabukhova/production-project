import type { InputHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import classes from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Mods } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  readonly?: boolean;
  addonLeft?: ReactNode
  addonRight?: ReactNode
}

export const Input = memo((props: InputProps) => {
  const { className, placeholder, type = 'text', value, readonly, addonLeft, addonRight, onChange, ...otherProps } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [classes.readonly]: readonly,
    [classes.withAddonLeft]: Boolean(addonLeft),
    [classes.withAddonRight]: Boolean(addonRight),
  }

  return (
    <div className={classNames(classes.inputWrapper, mods, [className])}>
      <div className={classes.addonLeft}>{addonLeft}</div>
      <input
        placeholder={placeholder}
        className={classes.input}
        type={type} value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
        {...otherProps}
      />
      <div className={classes.addonRight}>{addonRight}</div>
    </div>
  );
});
