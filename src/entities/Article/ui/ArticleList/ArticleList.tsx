import type { HTMLAttributeAnchorTarget, HTMLAttributes } from 'react';
import { forwardRef, memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ArticleList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Article } from '../../model/types/article';
import { ArticlesViews } from '../../model/consts/articleConsts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticlesViews;
  target?: HTMLAttributeAnchorTarget;
  loadMore?: () => void
}

const getSkeletons = (view: ArticlesViews) => {
  return new Array(view === ArticlesViews.Small ? 16 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);
};

export const ArticleList = memo(({ className, articles, view = ArticlesViews.Small, isLoading, target, loadMore }: ArticleListProps) => {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return <ArticleListItem target={target} view={view} article={article} key={article.title} />;
  };

  if (!isLoading && !articles.length) {
    <div className={classNames(classes.articleList, {}, [className, classes[view]])}>
      <Text size={TextSize.SizeL} title={t('Articles not found')} />
    </div>;
  }

  const gridComponentsSmall = {
    List: forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ style, children, ...props }, ref) => (
      <div
        ref={ref}
        {...props}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: '16px',
          ...style,
        }}
      >
        {children}
      </div>
    )),
  };

  const gridComponentsBig = {
    List: forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ style, children, ...props }, ref) => (
      <div
        ref={ref}
        {...props}
        style={{
          display: "flex",
          flexDirection: 'column',
          flexWrap: "wrap",
          gap: '16px',
          ...style,
        }}
      >
        {children}
      </div>
    )),
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <div data-testid="ArticleList" className={classNames(classes.articleList, {}, [className, classes[view]])}>
          {articles.length > 0 ? articles.map(renderArticle) : null}
          {isLoading && getSkeletons(view)}
        </div>
      }
      on={
        <HStack max justify='between' wrap='wrap' gap='16' data-testid="ArticleList" className={classNames(classes.articleListRedesigned, {}, [])}>
          {view === ArticlesViews.Big ?
            (
              <>
                <Virtuoso
                  useWindowScroll
                  style={{ width: '100%', paddingBottom: '16px' }}
                  endReached={loadMore}
                  data={articles}
                  itemContent={(index, article: Article) => renderArticle(article)}
                  components={gridComponentsBig}
                />
                {isLoading && getSkeletons(view)}
              </>
            ) : (
              <>
                <VirtuosoGrid
                  useWindowScroll
                  style={{ width: '100%' }}
                  endReached={loadMore}
                  data={articles}
                  components={gridComponentsSmall}
                  itemContent={(index, article: Article) => renderArticle(article)}
                />
                {isLoading && getSkeletons(view)}
              </>
            )
          }
        </HStack>
      }
    />
  );
});
