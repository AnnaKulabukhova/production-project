import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './ArticleListItem.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { Article, ArticlesViews, ArticleTextBlock } from '../../model/types/article'
import { Card } from 'shared/ui/Card'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon'
import EyeIcon from 'shared/assets/icons/eye.svg'
import { useHover } from 'shared/lib/hooks/useHover/useHover'
import { Button } from 'shared/ui/Button'
import { Avatar } from 'shared/ui/Avatar'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
  className?: string,
  article?: Article
  view?: ArticlesViews
}

export const ArticleListItem = memo(({ className, article, view = ArticlesViews.Small }: ArticleListItemProps) => {
  const { t } = useTranslation('articles')
  const [isHover, bindHover] = useHover()
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article?.id)
  }, [navigate, article?.id])

  const text = article?.blocks.find((textBlock) => textBlock.type === 'text' && !textBlock.title) as ArticleTextBlock
  const types = <Text text={article?.type.join(', ')} className={classes.types} />
  const views = (
    <>
      <Text text={String(article?.views)} className={classes.view} />
      <Icon Svg={EyeIcon} />
    </>
  )

  return (
    <>
      {view === ArticlesViews.Big ? (
        <div className={classNames('', {}, [className, classes[view]])}>
          <Card>
            <div className={classes.header}>
              <Avatar className={classes.avatar} size={30} src={article?.user.avatar} />
              <Text text={article?.user.username} />
              <Text text={article?.createdAt} className={classes.date} />
            </div>
            <Text title={article?.title} className={classes.title} />
            {types}
            <img src={article?.img} alt={article?.title} className={classes.image} />
            {text && <ArticleTextBlockComponent block={text} className={classes.textBlock} />}
            <div className={classes.footer}>
              <Button onClick={onOpenArticle}>{t('Read more')}</Button>
              {views}
            </div>
          </Card>
        </div>
      ) : (
        <div  {...bindHover} className={classNames('', {}, [className, classes[view]])}>
          <Card onClick={onOpenArticle}>
            <div className={classes.imageWrapper}>
              <img src={article?.img} alt={article?.title} className={classes.image} />
              <Text text={article?.createdAt} className={classes.date} />
            </div>
            <div className={classes.infoWrapper}>
              {types}
              {views}

            </div>
            <Text text={article?.title} className={classes.title} />
          </Card>
        </div>
      )}
    </>
  )
})