import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Textarea } from '@/shared/ui/redesigned/Textarea'
import { Card } from '@/shared/ui/redesigned/Card'

interface CreatingBlockTextProps {
  className?: string
  newText: string
  title?: string
  onChangeText: (value: string) => void
  onChangeTitle: (value: string) => void
}

export const CreatingBlockText = memo(({ className, onChangeText, newText, title, onChangeTitle }: CreatingBlockTextProps) => {
  const { t } = useTranslation('createArticle')
  return (
    <Card max padding='24' >
      <Textarea value={title} onChange={onChangeTitle} placeholder={t('Enter the name of the text block')} />
      <Textarea onChange={onChangeText} value={newText} minRows={8} placeholder={t('Add a text')} />
    </Card>
  )
})