import classes from './MultiSelectTabs.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { useCallback } from 'react';
import type { ReactNode } from 'react';
import { Card } from '../Card';
import type { FlexDirection } from '../Stack/Flex/Flex';
import { Flex } from '../Stack/Flex/Flex';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface MultiSelectTabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T[];
  onTabClick: (tab: T[]) => void;
  direction?: FlexDirection
}

export const MultiSelectTabs = <T extends string>({ className, tabs, value, onTabClick, direction = 'row' }: MultiSelectTabsProps<T>) => {

  const clickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        const newValue = value.includes(tab.value)
          ? value.filter(el => el !== tab.value)
          : [...value, tab.value]
        onTabClick(newValue);
      }
    },
    [onTabClick, value],
  );


  return (
    <Flex
      direction={direction}
      gap='8'
      className={classNames(classes.tabs, {}, [className])}
      align='start'
    >
      {tabs.map((tab) => {
        const isSelected = value.includes(tab.value)
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
