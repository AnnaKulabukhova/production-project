import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CommentCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Comment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { Text } from '@/shared/ui/deprecated/Text';

interface CommentCardProps {
  className?: string;
  isLoading?: boolean;
  comment?: Comment;
}

export const CommentCard = memo(({ className, isLoading, comment }: CommentCardProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack data-testid="CommentCard.Loading" gap="8" max className={classNames(classes.commentCard, {}, [className, classes.loading])}>
        <div className={classes.header}>
          <Skeleton width={30} height={30} border={'50%'} />
          <Skeleton width={110} height={19} />
        </div>
        <Skeleton width={'100%'} height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack data-testid="CommentCard.Content" gap="8" max className={classNames(classes.commentCard, {}, [className])}>
      <AppLink to={getRouteProfile(comment.user.id)} className={classes.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} alt={t('Avatar of user')} />}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
});
