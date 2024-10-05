import { useCallback } from 'react';
import type { ReactNode } from 'react';
import classes from './Tabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: T) => void;
}

export const Tabs = <T extends string>({ className, tabs, value, onTabClick }: TabsProps<T>) => {
  const clickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        onTabClick(tab.value);
      };
    },
    [onTabClick],
  );

  return (
    <div className={classNames(classes.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={classes.tab}
          key={tab.value}
          theme={tab.value === value ? CardTheme.Normal : CardTheme.OutLined}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
