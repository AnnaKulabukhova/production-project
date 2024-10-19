import type { ReactElement } from 'react';
import classes from './MainLayout.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { VStack } from '@/shared/ui/redesigned/Stack';

interface MainLayoutProps {
  className?: string
  header: ReactElement
  sidebar: ReactElement
  content: ReactElement
  toolbar?: ReactElement
}

export const MainLayout = ({ className, content, header, sidebar, toolbar }: MainLayoutProps) => {
  return (
    <div className={classNames(classes.mainLayout, {}, [className])} >
      <div className={classes.sidebar}>{sidebar}</div>
      <div className={classes.content}>{content}</div>
      <VStack align='end' className={classes.rightBar}>
        <div className={classes.header}>{header}</div>
        <div className={classes.toolbar}>{toolbar}</div>
      </VStack>
    </div>
  )
}