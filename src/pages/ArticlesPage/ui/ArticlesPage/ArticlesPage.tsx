import { memo, useCallback } from 'react'
import classes from './ArticlesPage.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from 'react-i18next'
import { ArticleList, ArticlesViews, ArticlesViewSelector } from 'entities/Article'
import { useSelector } from 'react-redux'
import { articlesPageActions, articlesPageReducer, getArticlesList } from '../../model/slices/articlesPageSlice'
import { getArticlesPageLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { DynamicModuleLoading, ReducersList } from 'shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article')
  const articles = useSelector(getArticlesList.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageView)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  })

  const onChangeView = useCallback((view: ArticlesViews) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  return (
    <DynamicModuleLoading reducers={reducers}>
      <div className={classNames(classes.articlesPage, {}, [className])} >
        <ArticlesViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </div>
    </DynamicModuleLoading>
  )
}

export default memo(ArticlesPage)
