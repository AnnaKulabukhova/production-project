import { Icon } from '@/shared/ui/redesigned/Icon'
import { classNames } from "@/shared/lib/classNames/classNames"
import CircleUpIcon from '@/shared/assets/icons/circle-up.svg'
import { memo } from 'react'

interface ScrollToTopButtonProps {
  className?: string
}

const onClick = () => {
  window.scrollTo({ top: 100, behavior: 'smooth' })
}

export const ScrollToTopButton = memo(({ className }: ScrollToTopButtonProps) => {
  return (
    <Icon
      width={32}
      height={32}
      className={classNames('', {}, [className])}
      clickable
      onClick={onClick}
      Svg={CircleUpIcon}
    />
  )
})