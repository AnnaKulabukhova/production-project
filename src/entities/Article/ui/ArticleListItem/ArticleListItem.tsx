import { memo } from 'react'
import type { HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './ArticleListItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import type { Article, ArticleTextBlock } from '../../model/types/article'
import { ArticlesViews } from '@/entities/Article/model/consts/articleConsts'
import { Card } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text/Text'
import { Icon } from '@/shared/ui/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { useHover } from '@/shared/lib/hooks/useHover/useHover'
import { Button } from '@/shared/ui/Button'
import { Avatar } from '@/shared/ui/Avatar'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { AppLink } from '@/shared/ui/AppLink'
import { getRouteArticlesDetails } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemProps {
  className?: string
  article: Article
  view?: ArticlesViews
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo(({ className, article, view = ArticlesViews.Small, target }: ArticleListItemProps) => {
  const { t } = useTranslation('articles')
  const [isHover, bindHover] = useHover()

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
      {view === ArticlesViews.Big
        ? (<div className={classNames('', {}, [className, classes[view]])}>
          <Card>
            <div className={classes.header}>
              <Avatar className={classes.avatar} size={30} src={article?.user.avatar} />
              <Text text={article?.user.username} />
              <Text text={article?.createdAt} className={classes.date} />
            </div>
            <Text title={article?.title} className={classes.title} />
            {types}
            <AppImage
              fallback={<Skeleton width={'100%'} height={250} />}
              src={article?.img}
              alt={article?.title}
              className={classes.image} />
            {text && <ArticleTextBlockComponent block={text} className={classes.textBlock} />}
            <div className={classes.footer}>
              <AppLink target={target} to={getRouteArticlesDetails(article?.id)}>
                <Button>
                  {t('Read more')}
                </Button>
              </AppLink>

              {views}
            </div>
          </Card>
        </div>)
        : (<div {...bindHover} className={classNames('', {}, [className, classes[view]])}>
          <AppLink
            target={target}
            to={getRouteArticlesDetails(article?.id)}
          >
            <Card>
              <div className={classes.imageWrapper}>
                <AppImage
                  fallback={<Skeleton width={200} height={200} />}
                  src={article?.img}
                  alt={article?.title}
                  className={classes.image} />
                <Text text={article?.createdAt} className={classes.date} />
              </div>
              <div className={classes.infoWrapper}>
                {types}
                {views}
              </div>
              <Text text={article?.title} className={classes.title} />
            </Card>
          </AppLink>
        </div>)
      }
    </>
  )
})
