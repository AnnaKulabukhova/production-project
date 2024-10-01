import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import type { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { Text } from '@/shared/ui/Text/Text'
import { VStack } from '@/shared/ui/Stack'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <VStack max gap='16' className={classNames('', {}, [className])} >
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
      </VStack>
    )
  }

  return (
    <VStack max gap='16' className={classNames('', {}, [className])}>
      {
        comments?.length
          ? comments.map(comment => <CommentCard comment={comment} isLoading={isLoading} key={comment.id} />)
          : <Text text={t('No comments')} />
      }
    </VStack>
  )
})
