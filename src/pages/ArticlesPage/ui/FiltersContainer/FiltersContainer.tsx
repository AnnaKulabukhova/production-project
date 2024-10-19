import { ArticlesFilters } from '@/widgets/ArticlesFilters'
import { memo } from 'react'
import { useArticlesFilters } from '../../lib/hooks/useArticleFilters'

interface FiltersContainerProps {
  className?: string
}

export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
  const {
    sort,
    search,
    order,
    type,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType
  } = useArticlesFilters()

  return (
    <ArticlesFilters
      search={search}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeSort={onChangeSort}
      onChangeType={onChangeType}
      order={order}
      sort={sort} type={type}
      className={className}
    />
  )
})