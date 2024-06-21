import { classNames } from "shared/lib/classNames/classNames"
import classes from './AppLink.module.scss'
import { Link, LinkProps } from "react-router-dom"
import { FC, ReactNode, memo } from 'react'

export enum AppLinkTheme {
  Primary = 'primary',
  Secondary = 'secondary',
  Red = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: string
  children: ReactNode
}

export const AppLink = memo(({ className, children, theme = AppLinkTheme.Primary, to, ...otherProps }: AppLinkProps) => {
  return (
    <Link to={to} className={classNames(classes.appLink, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
