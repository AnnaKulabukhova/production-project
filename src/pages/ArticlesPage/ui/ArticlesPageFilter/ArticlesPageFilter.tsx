import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ArticlesPageFilter.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';


import { ArticlesTypeTabs } from '@/features/ArticlesTypeTabs';
import { ArticlesViewSelector } from '@/features/ArticlesViewSelector';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { useArticlesFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const {
    sort,
    search,
    order,
    type,
    view,
    onChangeView,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType
  } = useArticlesFilters()

  return (
    <div className={classNames(classes.articlesPageFilter, {}, [className])}>
      <div className={classes.sortWrapper}>
        <ArticleSortSelector onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} order={order} sort={sort} />
        <ArticlesViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={classes.search}>
        <Input value={search} placeholder={t('Search')} onChange={onChangeSearch} />
      </Card>
      <ArticlesTypeTabs onChangeType={onChangeType} value={type} />
    </div>
  );
});
