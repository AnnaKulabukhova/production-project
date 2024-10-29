import { memo, useCallback } from 'react';
import classes from './ArticlesPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { DynamicModuleLoading } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const LoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoading reducers={reducers} removeAfterUnmount={false}>
      <ToggleFeatures
        feature='isAppRedesigned'
        off={
          <Page
            data-testid="ArticlesPage"
            onScrollEnd={LoadNextPart}
            className={classNames(classes.articlesPage, {}, [className])}
          >
            <ArticlesPageFilter className={classes.filters} />
            <ArticleInfiniteList />
            <ArticlePageGreeting />
          </Page>
        }
        on={
          <StickyContentLayout
            content={
              <Page
                data-testid="ArticlesPage"
                className={classNames(classes.articlesPage, {}, [className])}
              >
                <ArticleInfiniteList loadMore={LoadNextPart} />
                <ArticlePageGreeting />
              </Page>
            }
            left={<ViewSelectorContainer />}
            right={<FiltersContainer />}
          />

        }
      />
    </DynamicModuleLoading>
  );
};

export default memo(ArticlesPage);
