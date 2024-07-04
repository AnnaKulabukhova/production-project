import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './CommentCard.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { Comment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { Avatar } from 'shared/ui/Avatar'
import { Skeleton } from 'shared/ui/Skeleton'
import { AppLink } from 'shared/ui/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
  className?: string
  isLoading?: boolean
  comment?: Comment
}

export const CommentCard = memo(({ className, isLoading, comment }: CommentCardProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(classes.commentCard, {}, [className, classes.loading])} >
        <div className={classes.header}>
          <Skeleton width={30} height={30} border={'50%'} />
          <Skeleton width={110} height={19} />
        </div>
        <Skeleton width={'100%'} height={50} />
      </div>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <div className={classNames(classes.commentCard, {}, [className])} >
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={classes.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} alt={t('Avatar of user')} />}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  )
})