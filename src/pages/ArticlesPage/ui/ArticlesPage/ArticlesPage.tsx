import { memo, useCallback } from 'react'
import classes from './ArticlesPage.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { ArticleList, ArticlesViews, ArticlesViewSelector } from 'entities/Article'
import { useSelector } from 'react-redux'
import { articlesPageActions, articlesPageReducer, getArticlesList } from '../../model/slices/articlesPageSlice'
import { getArticlesPageError, getArticlesPageLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { DynamicModuleLoading, ReducersList } from 'shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Page } from 'shared/ui/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { initArticlesPage } from '../..//model/services/initArticlesPage/initArticlesPage'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('articles')
  const articles = useSelector(getArticlesList.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)
  const dispatch = useAppDispatch()

  const LoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  const onChangeView = useCallback((view: ArticlesViews) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  if (error) {
    return (
      <div className={classNames(classes.articlesPage, {}, [className])}>
        <Text text={t('An error occurred while uploading')} />
      </div>
    )
  }

  return (
    <DynamicModuleLoading reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={LoadNextPart} className={classNames(classes.articlesPage, {}, [className])} >
        <ArticlesViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoading>
  )
}

export default memo(ArticlesPage)
