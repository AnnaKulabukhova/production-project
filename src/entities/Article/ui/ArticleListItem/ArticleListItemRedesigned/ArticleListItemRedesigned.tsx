import { useTranslation } from 'react-i18next'
import classes from './ArticleListItemRedesigned.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import type { ArticleListItemProps } from '../ArticleListItem';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye-new.svg';
import { ArticleBlockType, ArticlesViews } from '@/entities/Article/model/consts/articleConsts';
import type { ArticleTextBlock } from '@/entities/Article/model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { getRouteArticlesDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemRedesigned = ({ className, article, view = ArticlesViews.Small, target }: ArticleListItemProps) => {
  const { t } = useTranslation('articles');
  const [isHover, bindHover] = useHover();

  const types = <Text text={article?.type.join(', ')} className={classes.types} />;
  const views = (
    <HStack gap='8'>
      <Icon Svg={EyeIcon} />
      <Text text={String(article?.views)} className={classes.view} />
    </HStack>
  );

  if (view === ArticlesViews.Big) {
    const text = article?.blocks.find(
      (textBlock) => textBlock.type === ArticleBlockType.Text
    ) as ArticleTextBlock;

    return (
      <Card
        max
        border='32'
        padding='24'
        data-testid="ArticleListItem"
        className={classNames('', {}, [className, classes[view]])}
      >
        <VStack max gap='16'>
          <HStack gap='8' max>
            <Avatar size={32} src={article?.user.avatar} />
            <Text bold text={article?.user.username} />
            <Text text={article?.createdAt} />
          </HStack>

          <Text bold title={article?.title} />
          <Text size='s' title={article?.subtitle} />
          <AppImage
            fallback={<Skeleton width={'100%'} height={250} />}
            src={article?.img}
            alt={article?.title}
            className={classes.image}
          />
          {text?.paragraphs && <Text className={classes.textBlock} text={text.paragraphs.slice(0, 2).join(' ')} />}

          <HStack justify='between' max >
            <AppLink target={target} to={getRouteArticlesDetails(article?.id)}>
              <Button>{`${t('Read more')}...`}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    )
  }
  return (
    <AppLink
      target={target}
      to={getRouteArticlesDetails(article?.id)}
      data-testid="ArticleListItem"
      {...bindHover}
      className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}
    >
      <Card className={classes.card} border='32'>
        <AppImage
          fallback={<Skeleton width={'100%'} height={200} />}
          src={article?.img}
          alt={article?.title}
          className={classes.image}
        />
        <VStack gap='4' className={classes.info} max>
          <Text size='l' bold text={article?.title} className={classes.title} />
          <VStack gap='4' className={classes.footer} max>
            <HStack justify='between' max>
              <Text text={article?.createdAt} className={classes.date} />
              {views}
            </HStack>
            <HStack gap='8' max>
              <Avatar size={32} src={article?.user.avatar} className={classes.avatar} />
              <Text bold text={article?.user.username} />
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  )
}