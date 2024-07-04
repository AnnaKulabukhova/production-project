import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './ArticleDetails.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { DynamicModuleLoading, ReducersList } from 'shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'
import { articleDetailsReducer } from './../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from './../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton'
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { Avatar } from 'shared/ui/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import Calendar from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)


  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.Text:
        return <ArticleTextBlockComponent key={id} className={classes.block} block={block} />
      case ArticleBlockType.Code:
        return <ArticleCodeBlockComponent key={id} className={classes.block} block={block} />
      case ArticleBlockType.Image:
        return <ArticleImageBlockComponent key={id} block={block} className={classes.block} />
      default:
        return null;
    }
  }, [])

  useInitialEffect(() => dispatch(fetchArticleById(id)))

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={classes.avatar} width={200} height={200} border='50%' />
        <Skeleton className={classes.title} width={670} height={30} />
        <Skeleton className={classes.skeleton} width={400} height={30} />
        <Skeleton className={classes.skeleton} width='100%' height={230} />
        <Skeleton className={classes.skeleton} width='100%' height={230} />
      </>
    )
  } else if (error) {
    content = (
      <Text align={TextAlign.Center} title={t('Download error')} />
    )
  } else {
    content = <>
      <div className={classes.avatarWrapper}>
        <Avatar src={article?.img} size={200} alt={article?.title} className={classes.avatar} />
      </div>
      <Text
        size={TextSize.SizeL}
        title={article?.title}
        text={article?.subtitle}
      />
      <div className={classes.articleInfo}>
        <Icon Svg={EyeIcon} />
        <Text text={String(article?.views)} />
      </div>
      <div className={classes.articleInfo}>
        <Icon Svg={Calendar} />
        <Text text={article?.createdAt} />
      </div>
      {article?.blocks.map(block => renderBlock(block))}

    </>
  }

  return (
    <DynamicModuleLoading reducers={reducers} removeAfterUnmount>
      <div className={classNames(classes.articleDetails, {}, [className])} >
        {content}
      </div>
    </DynamicModuleLoading>
  )
})