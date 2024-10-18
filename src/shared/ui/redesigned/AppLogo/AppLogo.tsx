import { memo } from 'react'
import classes from './AppLogo.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { HStack } from '../../deprecated/Stack'
import AppSvg from '@/shared/assets/icons/app-image.svg';

interface AppLogoProps {
  className?: string
  size?: number
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
  return (
    <HStack
      max
      justify='center'
      className={classNames(classes.appLogo, {}, [className])}
    >
      <div className={classes.gradientSmall} />
      <div className={classes.gradientSmall} />
      <AppSvg
        width={size}
        height={size}
        color='black'
      />
    </HStack>
  )
})