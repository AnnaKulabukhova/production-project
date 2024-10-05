import { memo } from 'react';
import { useNotifications } from '../../model/api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const { isLoading, data } = useNotifications(null, {
    // Повторный запрос данных с сервера каждые 5сек
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack gap="8" className={className}>
        <Skeleton width={'100%'} height={'70px'} border="10px" />
        <Skeleton width={'100%'} height={'70px'} border="10px" />
        <Skeleton width={'100%'} height={'70px'} border="10px" />
      </VStack>
    );
  }

  return (
    <VStack gap="8" className={className}>
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
});
