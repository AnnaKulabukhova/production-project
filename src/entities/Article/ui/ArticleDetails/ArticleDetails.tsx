import { memo } from 'react';
import classes from './ArticleDetails.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoading } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import { articleDetailsReducer } from './../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from './../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsError, getArticleDetailsIsLoading } from './../../model/selectors/articleDetails';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsDeprecated, ArticleDetailsDeprecatedError, ArticleDetailsDeprecatedLoading } from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import { ArticleDetailsRedesigned, ArticleDetailsRedesignedError, ArticleDetailsRedesignedLoading } from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';

export interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => dispatch(fetchArticleById(id)));
  let content;

  if (isLoading) {
    content = (
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<ArticleDetailsDeprecatedLoading />}
        on={<ArticleDetailsRedesignedLoading />}
      />
    );
  } else if (error) {
    content = (

      <ToggleFeatures
        feature='isAppRedesigned'
        off={<ArticleDetailsDeprecatedError />}
        on={<ArticleDetailsRedesignedError />}
      />
    );
  } else {
    content = (
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<ArticleDetailsDeprecated />}
        on={<ArticleDetailsRedesigned />}
      />
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
