import { VStack } from '@/shared/ui/redesigned/Stack'
import classes from './ScrollToolbar.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { ScrollToTopButton } from '@/features/ScrollToTopButton'
import { useEffect, useState } from 'react'

interface ScrollToolbarProps {
  className?: string
  virtualized: boolean
}

export const ScrollToolbar = ({ className, virtualized }: ScrollToolbarProps) => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <VStack
      max
      className={classNames(classes.ScrollToolbar, {}, [className])}
      justify='center'
      align='center'
    >
      {showBtn &&
        <ScrollToTopButton virtualized={virtualized} />
      }
    </VStack>
  )
}