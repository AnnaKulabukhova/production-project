import { memo } from 'react'
import { classNames } from "@/shared/lib/classNames/classNames"
import { MainLayout } from '../MainLayout'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import classes from './AppLoaderLayout.module.scss'

interface AppLoaderLayoutProps {
  className?: string
}

export const AppLoaderLayout = memo(({ className }: AppLoaderLayoutProps) => {
  return (
    <MainLayout className={classNames(classes.wrapper, {}, [className])}
      header={
        <HStack className={classes.header}>
          <Skeleton border='50%' width={40} height={40} />
        </HStack>
      }
      content={
        <VStack gap="16" style={{ height: '100%' }}>
          <Skeleton border='16px' width={'70%'} height={32} />
          <Skeleton border='16px' width={'40%'} height={20} />
          <Skeleton border='16px' width={'50%'} height={20} />
          <Skeleton border='16px' width={'30%'} height={32} />
          <Skeleton border='16px' width={'80%'} height={'40%'} />
          <Skeleton border='16px' width={'80%'} height={'40%'} />
        </VStack>
      }
      sidebar={<Skeleton border='32px' width={220} height={'100%'} />}
    />
  )
})