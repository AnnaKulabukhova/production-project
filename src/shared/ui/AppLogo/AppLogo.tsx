import { memo } from 'react'
import classes from './AppLogo.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { HStack } from '../Stack'
import AppSvg from '@/shared/assets/icons/app-image.svg';


interface AppLogoProps {
  className?: string
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify='center'
      className={classNames(classes.appLogo, {}, [className])}
    >
      <div className={classes.gradientSmall} />
      <div className={classes.gradientSmall} />
      <AppSvg />
    </HStack>
  )
})