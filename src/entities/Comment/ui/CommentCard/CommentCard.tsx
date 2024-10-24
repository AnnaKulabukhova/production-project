import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CommentCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Comment } from '../../model/types/comment';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
  className?: string;
  isLoading?: boolean;
  comment?: Comment;
}

export const CommentCard = memo(({ className, isLoading, comment }: CommentCardProps) => {
  const { t } = useTranslation();


  if (isLoading) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        off={
          <VStack data-testid="CommentCard.Loading" gap="8" max className={classNames(classes.commentCard, {}, [className, classes.loading])}>
            <div className={classes.header}>
              <SkeletonDeprecated width={30} height={30} border={'50%'} />
              <SkeletonDeprecated width={110} height={19} />
            </div>
            <SkeletonDeprecated width={'100%'} height={50} />
          </VStack>
        }
        on={
          <VStack data-testid="CommentCard.Loading" gap="8" max className={classNames('', {}, [className, classes.loading])}>
            <HStack gap='16' >
              <Skeleton width={30} height={30} border={'50%'} />
              <Skeleton width={110} height={19} />
            </HStack>
            <Skeleton width={'100%'} height={150} border='32px' />
          </VStack>
        }
      />
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <VStack data-testid="CommentCard.Content" gap="8" max className={classNames(classes.commentCard, {}, [className])}>
          <AppLinkDeprecated to={getRouteProfile(comment.user.id)} className={classes.header}>
            {comment.user.avatar && (
              <AvatarDeprecated size={30} src={comment.user.avatar} alt={t('Avatar of user')} />
            )}
            <TextDeprecated title={comment.user.username} />
          </AppLinkDeprecated>
          <Text text={comment.text} />
        </VStack>
      }
      on={
        <Card max border='32' padding='24'>
          <VStack data-testid="CommentCard.Content" gap="8" max className={classNames('', {}, [className])}>

            <AppLink to={getRouteProfile(comment.user.id)} >
              <HStack gap='16'>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} alt={t('Avatar of user')} />}
                <Text bold text={comment.user.username} />
              </HStack>
            </AppLink>
            <Text text={comment.text} />
          </VStack>
        </Card>

      }
    />
  );
});

