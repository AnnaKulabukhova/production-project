import { HTMLAttributes, ReactNode } from 'react'
import classes from './Card.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = ({ className, children, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(classes.card, {}, [className])} {...otherProps}>
      {children}
    </div>
  )
}