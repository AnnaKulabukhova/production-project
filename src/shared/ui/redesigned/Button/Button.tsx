import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Mods } from '@/shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled'
export type ButtonSize = 'm' | 'l' | 'xl'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
  fullWight?: boolean;
  addonLeft?: ReactNode
  addonRight?: ReactNode
}

export const Button = memo(
  ({ addonLeft,
    addonRight,
    className,
    size = 'm',
    variant = 'outline',
    children, square,
    disabled,
    fullWight,
    ...otherProps }: ButtonProps) => {

    const classNameProps = [
      className,
      classes[variant],
      classes[size],
    ]

    const mods: Mods = {
      [classes.square]: square,
      [classes.disabled]: disabled,
      [classes.fullWight]: fullWight,
      [classes.withAddonLeft]: Boolean(addonLeft),
      [classes.withAddonRight]: Boolean(addonRight)
    };

    return (
      <button disabled={disabled} type="button" className={classNames(classes.button, mods, classNameProps)} {...otherProps}>
        <div className={classes.addonLeft}>{addonLeft}</div>
        {children}
        <div className={classes.addonRight}>{addonRight}</div>
      </button>
    );
  },
);
