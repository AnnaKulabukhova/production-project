import type { User } from '@/entities/User'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { useTranslation } from 'react-i18next'

interface ArticleAdditionalInfoProps {
  author: User
  createdAt: string
  views: number
}

export const ArticleAdditionalInfo = ({ author, createdAt, views }: ArticleAdditionalInfoProps) => {
  const { t } = useTranslation('article')

  return (
    <VStack gap='32'>
      <HStack gap='8'>
        <Avatar src={author.avatar} size={32} />
        <Text bold text={author.username} />
        <Text text={createdAt} />
      </HStack>
      <Text bold text={t('{{count}} views', { count: views })} />
      <Text />
    </VStack>
  )
}