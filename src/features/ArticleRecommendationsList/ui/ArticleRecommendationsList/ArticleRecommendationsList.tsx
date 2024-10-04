import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text'
import { ArticleList } from '@/entities/Article'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Loader } from '@/shared/ui/Loader'
import { useArticleRecommendationList } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
  const { t } = useTranslation()
  const { isLoading, data: articles, error } = useArticleRecommendationList(3)

  if (isLoading) {
    return (
      <HStack justify='center'>
        <Loader />
      </HStack>
    )
  }

  if (error || !articles) {
    return (
      <HStack justify='center'>
        <Text
          theme={TextTheme.Error}
          title={t('An error occurred while uploading')}
          align={TextAlign.Center}
        />
      </HStack>
    )
  }

  return (
    <VStack
      data-testid='ArticleRecommendationsList'
      gap='8'
      className={classNames('', {}, [className])} >
      <Text
        size={TextSize.SizeL}
        title={t('We recommend it')}
      />
      <ArticleList
        target='_blank'
        articles={articles}
      />
    </VStack>
  )
})
