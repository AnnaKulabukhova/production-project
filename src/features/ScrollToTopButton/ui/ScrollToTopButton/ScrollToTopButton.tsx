import { Icon } from '@/shared/ui/redesigned/Icon'
import { classNames } from "@/shared/lib/classNames/classNames"
import CircleUpIcon from '@/shared/assets/icons/circle-up.svg'
import { memo, useContext } from 'react'
import { VirtuosoContext } from '@/shared/lib/context/VirtuosoContext'

interface ScrollToTopButtonProps {
  className?: string
  virtualized: boolean
}

export const ScrollToTopButton = memo(({ className, virtualized }: ScrollToTopButtonProps) => {
  const virtuosoRef = useContext(VirtuosoContext)


  const onClick = () => {
    if (virtualized && virtuosoRef?.current) {
      virtuosoRef?.current.scrollToIndex({ index: 0, align: 'start' });
      console.log(virtuosoRef?.current, 'ScrollToTopButton');

      return false;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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