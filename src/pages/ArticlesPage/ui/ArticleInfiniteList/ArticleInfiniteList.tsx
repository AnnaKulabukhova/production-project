import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { getArticlesList } from '../../model/slices/articlesPageSlice';
import { getArticlesPageError, getArticlesPageLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { Text } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
  const { t } = useTranslation('articles');
  const error = useSelector(getArticlesPageError);
  const articles = useSelector(getArticlesList.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return (
      <div className={className}>
        <Text text={t('AnErrorOccurredWhileUploading')} />
      </div>
    );
  }

  return <ArticleList isLoading={isLoading} view={view} articles={articles} className={className} />;
});
