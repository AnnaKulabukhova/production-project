import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ArticleDetails.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoading } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import { articleDetailsReducer } from './../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from './../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './../../model/selectors/articleDetails';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import type { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import Calendar from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock, index: number) => {
    switch (block.type) {
      case ArticleBlockType.Text:
        return <ArticleTextBlockComponent key={index} className={classes.block} block={block} />;
      case ArticleBlockType.Code:
        return <ArticleCodeBlockComponent key={index} className={classes.block} block={block} />;
      case ArticleBlockType.Image:
        return <ArticleImageBlockComponent key={index} block={block} className={classes.block} />;
      default:
        return null;
    }
  }, []);

  useInitialEffect(() => dispatch(fetchArticleById(id)));
  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
        <Skeleton className={classes.title} width={670} height={30} />
        <Skeleton className={classes.skeleton} width={400} height={30} />
        <Skeleton className={classes.skeleton} width="100%" height={230} />
        <Skeleton className={classes.skeleton} width="100%" height={230} />
      </>
    );
  } else if (error) {
    content = <Text align={TextAlign.Center} title={t('Download error')} />;
  } else {
    content = (
      <>
        <HStack justify="center" max className={classes.avatarWrapper}>
          <Avatar src={article?.img} size={200} alt={article?.title} className={classes.avatar} />
        </HStack>
        <VStack gap="4" max data-testId="ArticleDetails.Info">
          <Text size={TextSize.SizeL} title={article?.title} text={article?.subtitle} />
          <HStack align="center" gap="8" className={classes.articleInfo}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack align="center" gap="8" className={classes.articleInfo}>
            <Icon Svg={Calendar} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map((block, index) => renderBlock(block, index))}
      </>
    );
  }

  return (
    <DynamicModuleLoading reducers={reducers} removeAfterUnmount>
      <VStack gap="16" className={classNames(classes.articleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoading>
  );
});
