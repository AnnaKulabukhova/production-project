import type { HTMLAttributeAnchorTarget } from 'react'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './ArticleList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import type { Article } from '../../model/types/article'
import { ArticlesViews } from '../../model/consts/articleConsts'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from '@/shared/ui/Text'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticlesViews
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticlesViews) => {
  return (
    new Array(view === ArticlesViews.Small ? 16 : 3)
      .fill(0)
      .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />)
  )
}

export const ArticleList = memo(({ className, articles, view = ArticlesViews.Small, isLoading, target }: ArticleListProps) => {
  const { t } = useTranslation()

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem target={target} view={view} article={article} key={article.title} />
    )
  }

  if (!isLoading && !articles.length) {
    <div className={classNames(classes.articleList, {}, [className, classes[view]])} >
      <Text size={TextSize.SizeL} title={t('Articles not found')} />
    </div>
  }

  return (
    <div data-testid="ArticleList" className={classNames(classes.articleList, {}, [className, classes[view]])} >
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  )
})
