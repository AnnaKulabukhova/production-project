import classes from './Page.module.scss';
import type { MutableRefObject, ReactNode, UIEvent } from 'react';
import { memo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import type { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import type { TestProps } from '@/shared/types/tests';
import { getScrollSaveBypath, scrollSaveActions } from '@/features/scrollSave';
import { toggleFeatures } from '@/shared/lib/features';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollSaveBypath(state, location.pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      off: () => wrapperRef,
      on: () => undefined
    }),
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: location.pathname,
    }));
  }, 500);

  const pageStyle = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => classes.page,
    on: () => classes.pageRedesigned
  })

  return (
    <>
      <main
        data-testid={props['data-testid'] ?? 'Page'}
        ref={wrapperRef}
        className={classNames(pageStyle, {}, [className])}
        onScroll={onScroll}
      >
        {children}
        {onScrollEnd ? <div ref={triggerRef} /> : null}
      </main>
    </>
  );
});
