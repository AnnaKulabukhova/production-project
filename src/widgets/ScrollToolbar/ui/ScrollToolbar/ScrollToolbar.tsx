import { VStack } from '@/shared/ui/redesigned/Stack'
import classes from './ScrollToolbar.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { ScrollToTopButton } from '@/features/ScrollToTopButton'

interface ScrollToolbarProps {
  className?: string
}

export const ScrollToolbar = ({ className }: ScrollToolbarProps) => {
  return (
    <VStack
      max
      className={classNames(classes.ScrollToolbar, {}, [className])}
      justify='center'
      align='center'
    >
      <ScrollToTopButton />
    </VStack>
  )
}