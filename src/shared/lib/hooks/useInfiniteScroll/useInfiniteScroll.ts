import { MutableRefObject, useEffect, useRef } from "react"

export interface useInfiniteScrollOptions {
  // Вызывается когда пересечен тот или иной элемент
  callback?: () => void
  // Элемент на который будет триггер
  triggerRef: MutableRefObject<HTMLElement>
  // обертка внутри которой будет скролл
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }: useInfiniteScrollOptions) => {
  useEffect(() => {
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    let observer: IntersectionObserver | null = null
    if (callback) {
      let options = {
        root: wrapperElement,
        rootMargin: "0px",
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options);

      observer.observe(triggerElement)
    }

    return () => {
      if (observer && triggerElement) {
        debugger
        observer.unobserve(triggerElement)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}