import { memo } from 'react'
import classes from './Text.module.scss'
import { classNames } from "shared/lib/classNames/classNames"


export enum TextTheme {
  Primary = 'primary',
  Error = 'error'
}
export enum TextAlign {
  Left = 'left',
  Right = 'right',
  Center = 'center'
}

interface TextProps {
  text?: string
  className?: string
  title?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = memo(({ className, text, align = TextAlign.Left, title, theme = TextTheme.Primary }: TextProps) => {
  return (
    <div className={classNames(classes.textWrapper, {}, [className, classes[theme], classes[align]])} >
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  )
})