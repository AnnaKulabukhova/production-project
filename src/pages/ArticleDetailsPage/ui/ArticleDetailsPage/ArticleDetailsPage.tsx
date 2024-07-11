import { memo, useCallback, useEffect } from 'react'
import classes from './ArticleDetailsPage.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { DynamicModuleLoading, ReducersList } from 'shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentSlice/articleDetailsCommentSlice'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'shared/ui/Page'


interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComment: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleDetailsCommentIsLoading)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])


  if (!id) {
    return (<div className={classNames(classes.articleDetailsPage, {}, [className])} >
      {t('Article not found')}
    </div>)
  }

  return (
    <DynamicModuleLoading removeAfterUnmount reducers={reducers}>
      <Page className={classNames(classes.articleDetailsPage, {}, [className])} >
        <Button onClick={onBackToList}>{t('onBackToList')}</Button>
        <ArticleDetails id={id} />
        <Text className={classes.commentTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoading>
  )
}

export default memo(ArticleDetailsPage)