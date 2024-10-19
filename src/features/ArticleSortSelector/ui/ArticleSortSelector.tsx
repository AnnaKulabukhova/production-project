import { useTranslation } from 'react-i18next';
import classes from './ArticleSortSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/deprecated/Select';
import { useMemo } from 'react';
import type { SelectOption } from '@/shared/ui/deprecated/Select/Select';
import type { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = ({ className, onChangeSort, onChangeOrder, sort, order }: ArticleSortSelectorProps) => {
  const { t } = useTranslation('articles');

  const oderOption = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        content: t('Ascending'),
        value: 'asc',
      },
      {
        content: t('Descending'),
        value: 'desc',
      },
    ],
    [t],
  );

  const sortOption = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        content: t('Created'),
        value: ArticleSortField.Created,
      },
      {
        content: t('Title'),
        value: ArticleSortField.Title,
      },
      {
        content: t('Views'),
        value: ArticleSortField.Views,
      },
    ],
    [t],
  );

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <div className={classNames(classes.articleSortSelector, {}, [className])}>
          <Select<ArticleSortField> onChange={onChangeSort} value={sort} options={sortOption} label={t('Sort by')} />
          <Select<SortOrder> onChange={onChangeOrder} value={order} options={oderOption} label={t('By')} />
        </div>
      }
      on={
        <div className={classNames(classes.articleSortSelector, {}, [className])}>
          <VStack gap='8'>
            <Text text={t('Sort by')} />
            <ListBox<ArticleSortField> onChange={onChangeSort} value={sort} items={sortOption} />
            <ListBox<SortOrder> onChange={onChangeOrder} value={order} items={oderOption} />
          </VStack>
        </div>
      }
    />
  );
};
