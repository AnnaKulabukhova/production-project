import type { MutableRefObject } from 'react';
import { useEffect } from 'react';

export interface useInfiniteScrollOptions {
  // Вызывается когда пересечен тот или иной элемент
  callback?: () => void;
  // Элемент на который будет триггер
  triggerRef: MutableRefObject<HTMLDivElement | null>;
  // обертка внутри которой будет скролл
  wrapperRef: MutableRefObject<HTMLElement | null>;
}

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }: useInfiniteScrollOptions) => {
  useEffect(() => {
    const wrapperElement = wrapperRef?.current;
    const triggerElement = triggerRef?.current;

    let observer: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      if (triggerElement) {
        observer.observe(triggerElement);
      }
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
