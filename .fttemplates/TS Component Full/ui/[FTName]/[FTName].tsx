import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './[FTName].module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface < FTName > Props {
  className ?: string
}

export const <FTName> = memo(({className}: <FTName>Props) => {
   const {t} = useTranslation()
  return (
  <div className={classNames(classes.<FTName | lowercase>, {}, [className])} >
  </div>
  )
})