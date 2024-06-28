import { memo } from 'react'
import classes from './ArticleDetailsPage.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (<div className={classNames(classes.articleDetailsPage, {}, [className])} >
      {t('Article not found')}
    </div>)
  }

  return (
    <div className={classNames(classes.articleDetailsPage, {}, [className])} >
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailsPage)