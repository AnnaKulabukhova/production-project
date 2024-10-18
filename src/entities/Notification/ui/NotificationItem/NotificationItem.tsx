import { memo } from 'react';
import classes from './NotificationItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Notification } from '../../model/types/notification';
import { Card as CardDEprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo(({ className, item }: NotificationItemProps) => {
  const content = (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <CardDEprecated theme={CardTheme.OutLined} className={classNames(classes.notificationItem, {}, [className])}>
          <TextDeprecated title={item.title} text={item.description} />
        </CardDEprecated>
      }
      on={
        <Card padding='8' className={classNames(classes.notificationItemRedesigned, {}, [className])}>
          <Text title={item.title} text={item.description} />
        </Card>
      }
    />
  );

  if (item.href) {
    return (
      <a target="_blank" rel="noreferrer" href={item.href} className={classes.link}>
        {content}
      </a>
    );
  }

  return content;
});
