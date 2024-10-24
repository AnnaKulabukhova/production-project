import { useTranslation } from 'react-i18next'
import { classNames } from "@/shared/lib/classNames/classNames"
import { RatingCard } from '@/entities/Rating'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useGetProfileRating, useRateProfile } from '../api/ProfileRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { useCallback } from 'react'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { toggleFeatures } from '@/shared/lib/features'

interface ProfileRatingProps {
  className?: string
  profileId: string
}

export const ProfileRating = ({ className, profileId }: ProfileRatingProps) => {
  const { t } = useTranslation('profile')

  const userData = useSelector(getUserAuthData)

  const { data, isLoading } = useGetProfileRating({ userId: userData?.id ?? '', profileId })
  const [rateProfile] = useRateProfile()

  const rate = data?.[0]?.rate


  const handlerRateProfile = useCallback((starCount: number, feedback?: string) => {
    try {
      rateProfile({
        feedback,
        profileId,
        rate: starCount,
        userId: userData?.id ?? ''
      })
    } catch {
      console.log('error');
    }

  }, [profileId, rateProfile, userData?.id])

  const onAccept = useCallback((starCount: number, feedback?: string) => {
    handlerRateProfile(starCount, feedback)
  }, [handlerRateProfile])

  const onCancel = useCallback((starCount: number) => {
    handlerRateProfile(starCount)
  }, [handlerRateProfile])

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => SkeletonDeprecated,
    on: () => SkeletonRedesigned
  })

  if (isLoading) {
    return <Skeleton width={'100%'} height={140} border='16px' />;
  }

  return (
    <VStack justify='center' max className={classNames('', {}, [className])} >
      <RatingCard
        title={t('Review of profile')}
        feedbackTitle={t('Leave your feedback about the profile')}
        hasFeedback
        rate={rate}
        onCancel={onCancel}
        onAccept={onAccept}
      />
    </VStack>
  )
}