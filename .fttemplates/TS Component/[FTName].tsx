
import { memo } from 'react'
import classes from './[FTName].module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface <FTName> Props {
  className?: string
}

export const <FTName> = memo(({className}: <FTName>Props) => {
  return (
  <div className={classNames(classes.<FTName | lowercase>, {}, [className])} >
  </div>
  )
})