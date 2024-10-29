import type { ButtonHTMLAttributes, ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Mods } from '@/shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled'
export type ButtonSize = 'm' | 'l' | 'xl'
export type ButtonColor = 'normal' | 'success' | 'error'

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
  color?: ButtonColor
}

export const Button = forwardRef(
  ({ addonLeft,
    addonRight,
    className,
    color = 'normal',
    size = 'm',
    variant = 'outline',
    children, square,
    disabled,
    fullWight,
    ...otherProps }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {

    const classNameProps = [
      className,
      classes[variant],
      classes[size],
      classes[color],
    ]

    const mods: Mods = {
      [classes.square]: square,
      [classes.disabled]: disabled,
      [classes.fullWight]: fullWight,
      [classes.withAddonLeft]: Boolean(addonLeft),
      [classes.withAddonRight]: Boolean(addonRight)
    };

    return (
      <button ref={ref} disabled={disabled} type="button" className={classNames(classes.button, mods, classNameProps)} {...otherProps}>
        <div className={classes.addonLeft}>{addonLeft}</div>
        {children}
        <div className={classes.addonRight}>{addonRight}</div>
      </button>
    );
  },
);
