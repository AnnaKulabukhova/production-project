import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './ArticlesFilters.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticlesTypeTabs } from '@/features/ArticlesTypeTabs'
import { VStack } from '@/shared/ui/redesigned/Stack'
import type { ArticleSortField, ArticleType } from '@/entities/Article'
import type { SortOrder } from '@/shared/types/sort'
import { Input } from '@/shared/ui/redesigned/Input'

interface ArticlesFiltersProps {
  className?: string
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSearch: (value: string) => void;
  type: ArticleType;
  onChangeType: (type: ArticleType) => void;
  search: string
}

export const ArticlesFilters = memo(({ className, onChangeOrder, onChangeSearch, onChangeSort, onChangeType, order, search, sort, type }: ArticlesFiltersProps) => {
  const { t } = useTranslation()
  return (
    <Card className={classNames(classes.articlesFilters, {}, [className])} padding='24'>
      <VStack gap='32'>
        <Input value={search} placeholder={t('Search')} onChange={onChangeSearch} />
        <ArticlesTypeTabs onChangeType={onChangeType} value={type} />
        <ArticleSortSelector onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} order={order} sort={sort} />
      </VStack>
    </Card>
  )
})