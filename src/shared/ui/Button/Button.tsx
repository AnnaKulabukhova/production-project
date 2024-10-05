import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Mods } from '@/shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
  Primary = 'primary',
  Clear = 'clear',
  ClearInverted = 'clearInverted',
  Outline = 'outline',
  OutlineInverted = 'outlineInverted',
  OutlineRed = 'outlineRed',
  Background = 'background',
  BackgroundInverted = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  Xl = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
  fullWight?: boolean;
}

export const Button = memo(
  ({ className, size = ButtonSize.M, theme = ButtonTheme.Outline, children, square, disabled, fullWight, ...otherProps }: ButtonProps) => {
    const classNameProps = [className, classes[theme], classes[size]];

    const mods: Mods = {
      [classes.square]: square,
      [classes.disabled]: disabled,
      [classes.fullWight]: fullWight,
    };

    return (
      <button disabled={disabled} type="button" className={classNames(classes.button, mods, classNameProps)} {...otherProps}>
        {children}
      </button>
    );
  },
);
