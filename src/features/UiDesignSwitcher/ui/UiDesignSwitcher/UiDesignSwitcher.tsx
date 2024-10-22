import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { getFeaturesFlag, updateFeatureFlag } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

interface UiDesignSwitcherProps {
  className?: string
}

export const UiDesignSwitcher = memo(({ className }: UiDesignSwitcherProps) => {
  const { t } = useTranslation('settings')
  const isAppRedesigned = getFeaturesFlag('isAppRedesigned')
  const dispatch = useAppDispatch()
  const userData = useSelector(getUserAuthData)
  const [isLoading, setIsLoading] = useState(false)

  const items = [
    {
      content: t('New version of the site'),
      value: 'new'
    },
    {
      content: t('Old version of the site'),
      value: 'old'
    }
  ]

  const onChange = async (value: string) => {
    if (userData) {
      setIsLoading(true)
      await dispatch(updateFeatureFlag({
        userId: userData?.id,
        newFeatures: {
          isAppRedesigned: value === 'new'
        }
      })).unwrap()
      setIsLoading(false)
    }
  }

  return (
    <HStack gap='16' className={className}>
      <Text text={t('Interface option')} />
      {isLoading ? (
        <Skeleton width={100} height={30} />
      ) : (
        <ListBox
          items={items} value={isAppRedesigned ? 'new' : 'old'}
          onChange={onChange}
        />
      )
      }

    </HStack>
  )
})