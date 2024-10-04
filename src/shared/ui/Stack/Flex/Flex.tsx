import { memo } from 'react'
import type { DetailedHTMLProps, HTMLAttributes, ReactNode, Ref } from 'react'
import classes from './Flex.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import type { Mods } from '@/shared/lib/classNames/classNames'

export type FlexJustify = 'start' | 'end' | 'center' | 'between'
export type FlexAlign = 'start' | 'end' | 'center'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  max?: boolean
  gap?: FlexGap
  ref?: Ref<HTMLDivElement>
}

const justifyClasses: Record<FlexJustify, string> = {
  start: classes.justifyStart,
  end: classes.justifyEnd,
  center: classes.justifyCenter,
  between: classes.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
  start: classes.alignStart,
  end: classes.alignEnd,
  center: classes.alignCenter

}
const directionClasses: Record<FlexDirection, string> = {
  row: classes.directionRow,
  column: classes.directionColumn
}
const gapClasses: Record<FlexGap, string> = {
  4: classes.gap4,
  8: classes.gap8,
  16: classes.gap16,
  32: classes.gap32
}

export const Flex = memo(({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  max,
  ...otherProps
}: FlexProps) => {
  const cls = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap]
  ]

  const mods: Mods = {
    [classes.max]: max
  }

  return (
    <div className={classNames(classes.flex, mods, cls)} {...otherProps}>
      {children}
    </div>
  )
})
