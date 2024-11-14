import { useCallback } from 'react';
import type { ReactNode } from 'react';
import classes from './Tabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card';
import type { FlexDirection } from '../Stack/Flex/Flex';
import { Flex } from '../Stack/Flex/Flex';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: T) => void;
  direction?: FlexDirection
}

export const Tabs = <T extends string>({ className, tabs, value, onTabClick, direction = 'row' }: TabsProps<T>) => {

  const clickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        onTabClick(tab.value);
      };
    },
    [onTabClick],
  );

  return (
    <Flex
      direction={direction}
      gap='8'
      className={classNames(classes.tabs, {}, [className])}
      align='start'
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value
        return (
          <Card
            className={classNames(classes.tab, { [classes.selected]: isSelected }, [])}
            key={tab.value}
            variant={isSelected ? 'light' : 'normal'}
            onClick={clickHandle(tab)}
            border='42'
          >
            {tab.content}
          </Card>
        )
      })}
    </Flex>
  );
};
