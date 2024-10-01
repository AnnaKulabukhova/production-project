import { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode, UIEvent } from 'react'
import classes from './Page.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollSaveBypath, scrollSaveActions } from '@/features/scrollSave'
import { useLocation } from 'react-router-dom'
// import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import type { StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import type { TestProps } from '@/shared/types/test'

interface PageProps extends TestProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const wrapperRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getScrollSaveBypath(state, location.pathname))

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: location.pathname
    }))
  }, 500)

  useEffect(() => {
    if (!wrapperRef.current || !isDataLoaded) return
    setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.scrollTop = scrollPosition
      }
    }, 0)
  }, [isDataLoaded, scrollPosition])

  useEffect(() => {
    if (!wrapperRef.current) return

    const observer = new MutationObserver(() => {
      if (wrapperRef.current && wrapperRef.current.scrollHeight > scrollPosition) {
        setIsDataLoaded(true)
        observer.disconnect()
      }
    })
    observer.observe(wrapperRef.current, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [scrollPosition])

  // useInitialEffect(() => {
  //   if (!wrapperRef.current) return;

  //   console.log('scrollHeight', wrapperRef.current?.scrollHeight);
  //   const newObserver = new MutationObserver(() => {
  //     console.log('hfj scrollHeight', wrapperRef.current?.scrollHeight);
  //     if (wrapperRef.current && wrapperRef.current.scrollHeight > scrollPosition) {
  //       wrapperRef.current.scrollTop = scrollPosition
  //       newObserver.disconnect()
  //     }
  //   })
  //   newObserver.observe(wrapperRef.current, { childList: true, subtree: true });
  //   return () => newObserver.disconnect();
  // })

  // useInitialEffect(() => {
  //   const initialScrollPosition = scrollPosition
  //   console.log('scrollHeight', wrapperRef.current?.scrollHeight);

  //   setTimeout(() => {
  //     console.log('hfj scrollHeight', wrapperRef.current?.scrollHeight);
  //     if (wrapperRef.current) {
  //       wrapperRef.current.scrollTop = initialScrollPosition
  //     }
  //   }, 2000)
  // })

  console.log('scrollPosition', scrollPosition)

  return (
    <>
      <main
        data-testid={props['data-testid'] ?? 'Page'}
        ref={wrapperRef}
        className={classNames(classes.page, {}, [className])}
        onScroll={onScroll}
      >
        {children}
        {onScrollEnd ? <div ref={triggerRef} /> : null}
      </main>
    </>
  )
})
