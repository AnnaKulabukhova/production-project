import type { MutableRefObject } from 'react'
import { useCallback, useRef } from 'react'

// Позволяет отменять предыдущее событие  в течение какого-то времени
export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const timer = useRef() as MutableRefObject<any>

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])
}
