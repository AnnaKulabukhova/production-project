import { useTranslation } from 'react-i18next'
import { classNames } from "@/shared/lib/classNames/classNames"
import { RatingCard } from '@/entities/Rating'
import { VStack } from '@/shared/ui/Stack'

interface ProfileRatingProps {
  className?: string
}

export const ProfileRating = ({ className }: ProfileRatingProps) => {
  const { t } = useTranslation('profile')
  return (
    <VStack justify='center' max className={classNames('', {}, [className])} >
      <RatingCard
        title={t('Review of profile')}
        hasFeedback
      />
    </VStack>
  )
}