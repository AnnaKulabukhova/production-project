import { getArticleDetailsData } from '@/entities/Article'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import classes from './AdditionalInfoContainer.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useCallback } from 'react'
import { getRouteArticleEdit } from '@/shared/const/router'
import { useNavigate } from 'react-router-dom'

interface AdditionalInfoContainerProps {
  className?: string
}

export const AdditionalInfoContainer = ({ className }: AdditionalInfoContainerProps) => {
  const { t } = useTranslation()
  const article = useSelector(getArticleDetailsData)
  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [navigate, article]);

  if (!article) {
    return null
  }

  return (
    <Card className={classNames(classes.additionalInfoContainer, {}, [className])} border='32' padding='24'>
      <ArticleAdditionalInfo
        author={article?.user}
        createdAt={article?.createdAt}
        views={article?.views}
        onEditArticle={onEditArticle}
      />
    </Card>
  )
}