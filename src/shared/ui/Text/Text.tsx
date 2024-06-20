import { memo } from 'react'
import classes from './Text.module.scss'
import { classNames } from "shared/lib/classNames/classNames"


export enum TextTheme {
  Primary = 'primary',
  Error = 'error'
}

interface TextProps {
  text?: string
  className?: string
  title?: string
  theme?: TextTheme
}

export const Text = memo(({ className, text, title, theme = TextTheme.Primary }: TextProps) => {
  return (
    <div className={classNames(classes.textWrapper, {}, [className ?? '', classes[theme]])} >
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  )
})