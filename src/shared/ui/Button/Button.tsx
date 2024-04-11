import { ButtonHTMLAttributes, FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import classes from './Button.module.scss'

export enum ThemeButton {
    Clear = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
   theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({className, theme,  children,  ...otherProps}) => {
  return (
    <button 
        className={classNames(classes.button, {},[classes[theme]])}
        {...otherProps}
    >   
        {children}
    </button>
  )
}
