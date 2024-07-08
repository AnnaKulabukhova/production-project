import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './ArticleList.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { Article, ArticlesViews } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticlesViews
}

const getSkeletons = (view: ArticlesViews) => {
  return (
    new Array(view === ArticlesViews.Small ? 16 : 3)
      .fill(0)
      .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />)
  )
}

export const ArticleList = memo(({ className, articles, view = ArticlesViews.Small, isLoading }: ArticleListProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(classes.articleList, {}, [className, classes[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem view={view} article={article} key={article.title} />
    )
  }

  return (
    <div className={classNames(classes.articleList, {}, [className, classes[view]])} >
      {articles.length ? articles.map(renderArticle) : null}
    </div>
  )
})