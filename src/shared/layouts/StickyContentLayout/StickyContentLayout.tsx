import type { ReactElement } from 'react'
import classes from './StickyContentLayout.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"

interface StickyContentLayoutProps {
  className?: string
  left?: ReactElement
  right?: ReactElement
  content: ReactElement
}

export const StickyContentLayout = ({ className, right, content, left }: StickyContentLayoutProps) => {
  return (
    <div className={classNames(classes.stickyContentLayout, {}, [className])} >
      {left && <div className={classes.left}>{left}</div>}
      <div className={classes.content}>{content}</div>
      {right && <div className={classes.right}>{right}</div>}
    </div>
  )
}
