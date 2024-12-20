import { useTranslation } from 'react-i18next'
import classes from '../ArticleListItem.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import type { ArticleListItemProps } from '../ArticleListItem';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticlesViews } from '@/entities/Article/model/consts/articleConsts';
import type { ArticleTextBlock } from '@/entities/Article/model/types/article';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticlesDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Button } from '@/shared/ui/deprecated/Button';


export const ArticleListItemDeprecated = ({ className, article, view = ArticlesViews.Small, target }: ArticleListItemProps) => {
  const { t } = useTranslation('articles');
  const [isHover, bindHover] = useHover();

  const text = article?.blocks.find((textBlock) => textBlock.type === 'text') as ArticleTextBlock;
  const types = <Text text={article?.type.join(', ')} className={classes.types} />;
  const views = (
    <>
      <Text text={String(article?.views)} className={classes.view} />
      <Icon Svg={EyeIcon} />
    </>
  );

  return (
    <>
      {view === ArticlesViews.Big ? (
        <div data-testid="ArticleListItem" className={classNames('', {}, [className, classes[view]])}>
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
              className={classes.image}
            />
            {text && <ArticleTextBlockComponent block={text} className={classes.textBlock} />}
            <div className={classes.footer}>
              <AppLink target={target} to={getRouteArticlesDetails(article?.id)}>
                <Button>{t('Read more')}</Button>
              </AppLink>

              {views}
            </div>
          </Card>
        </div>
      ) : (
        <AppLink
          className={classNames(classes.ArticleListItemSmall, {}, [className, classes[view]])}
          target={target}
          to={getRouteArticlesDetails(article?.id)}
          data-testid="ArticleListItem"
          {...bindHover}
        >
          <Card>
            <div className={classes.imageWrapper}>
              <AppImage
                fallback={<Skeleton width={200} height={200} />}
                src={article?.img}
                alt={article?.title}
                className={classes.image}
              />
              <Text text={article?.createdAt} className={classes.date} />
            </div>
            <div className={classes.infoWrapper}>
              {types}
              {views}
            </div>
            <Text text={article?.title} className={classes.title} />
          </Card>
        </AppLink>
      )}
    </>
  );
}