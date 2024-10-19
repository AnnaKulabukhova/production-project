import { memo } from 'react'
import { ArticlesViewSelector } from '@/features/ArticlesViewSelector'
import { useArticlesFilters } from '../../lib/hooks/useArticleFilters'

interface ViewSelectorContainerProps {
  className?: string
}

export const ViewSelectorContainer = memo(({ className }: ViewSelectorContainerProps) => {
  const { view, onChangeView } = useArticlesFilters()
  return (
    <ArticlesViewSelector className={className} view={view} onViewClick={onChangeView} />
  )
})
