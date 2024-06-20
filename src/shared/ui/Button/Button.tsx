import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import classes from './Button.module.scss'

export enum ButtonTheme {
  Primary = 'primary',
  Clear = 'clear',
  ClearInverted = 'clearInverted',
  Outline = 'outline',
  Background = 'background',
  BackgroundInverted = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  Xl = 'size_xl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ButtonTheme,
  square?: boolean
  size?: ButtonSize,
  disabled?: boolean
  children: ReactNode
}

export const Button = memo(({ className, size = ButtonSize.M, theme = ButtonTheme.Primary, children, square, disabled, ...otherProps }: ButtonProps) => {

  const classNameProps = [
    className ?? '',
    classes[theme],
    classes[size]
  ]

  const mods: Record<string, boolean | undefined> = {
    [classes.square]: square,
    [classes.disabled]: disabled

  }

  return (
    <button
      disabled={disabled}
      type="button"
      className={classNames(classes.button, mods, classNameProps)}
      {...otherProps}

    >
      {children}
    </button>
  )
})
