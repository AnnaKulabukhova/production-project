import { ButtonHTMLAttributes, FC } from "react"
import { classNames } from "../../../shared/lib/classNames/classNames"
import classes from './Button.module.scss'

export enum ThemeButton {
  Clear = 'clear',
  Outline = 'outline'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({ className, theme, children, ...otherProps }) => {
  return (
    <button
      type="button"
      className={classNames(classes.button, {}, theme ? [classes[theme]] : [])}
      {...otherProps}

    >
      {children}
    </button>
  )
}
