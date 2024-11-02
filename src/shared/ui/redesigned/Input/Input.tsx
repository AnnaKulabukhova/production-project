import type { InputHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import classes from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Mods } from '@/shared/lib/classNames/classNames';
import { Text } from '../Text';
import { HStack } from '../Stack';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly' | 'size'>;
type InputSize = 's' | 'm' | 'l'

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  readonly?: boolean;
  addonLeft?: ReactNode
  addonRight?: ReactNode
  label?: string
  size?: InputSize
}

export const Input = memo((props: InputProps) => {
  const { className, placeholder, type = 'text', value, readonly, size = 'm', label, addonLeft, addonRight, onChange, ...otherProps } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [classes.readonly]: readonly,
    [classes.withAddonLeft]: Boolean(addonLeft),
    [classes.withAddonRight]: Boolean(addonRight),
  }

  const input = (
    <div className={classNames(classes.inputWrapper, mods, [className, classes[size]])}>
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
  )

  if (label) {
    return (
      <HStack gap='8' max>
        <Text text={label} />
        {input}
      </HStack>
    )
  }

  return (
    input
  );
});
