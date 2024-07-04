import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from "shared/lib/classNames/classNames"
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { Text } from 'shared/ui/Text/Text'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className])} >
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
      </div>
    )
  }

  return (
    <div className={classNames('', {}, [className])} >
      {comments?.length
        ? comments.map(comment => <CommentCard comment={comment} isLoading={isLoading} key={comment.id} />)
        : <Text text={t('No comments')} />
      }
    </div>
  )
})