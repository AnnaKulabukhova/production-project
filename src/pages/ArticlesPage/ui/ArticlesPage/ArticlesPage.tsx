import { memo } from 'react'
import classes from './ArticlesPage.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from 'react-i18next'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article')
  return (
    <div className={classNames(classes.articlesPage, {}, [className])} >
      ARTICLES
    </div>
  )
}

export default memo(ArticlesPage)
