import { memo } from 'react'
import classes from './NotificationItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import type { Notification } from '../../model/types/notification'
import { Card, CardTheme } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo(({ className, item }: NotificationItemProps) => {
  const content = (
    <Card theme={CardTheme.OutLined} className={classNames(classes.notificationItem, {}, [className])} >
      <Text title={item.title} text={item.description} />
    </Card>
  )

  if (item.href) {
    return <a target='_blank' rel="noreferrer" href={item.href} className={classes.link}>{content}</a>
  }

  return content
})
