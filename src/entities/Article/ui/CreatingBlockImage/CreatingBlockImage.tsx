import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { InputFile } from '@/shared/ui/redesigned/InputFile'
import AddImageIcon from '@/shared/assets/icons/image-plus-line.svg'
import { Card } from '@/shared/ui/redesigned/Card'
import { Textarea } from '@/shared/ui/redesigned/Textarea'

interface CreatingBlockImageProps {
  className?: string
  onChangeImage: (newImage: string) => void
  image: string
  onChangeDescription: (newDescription: string) => void
  description: string
}

export const CreatingBlockImage = memo(({ className, description, image, onChangeDescription, onChangeImage }: CreatingBlockImageProps) => {
  const { t } = useTranslation('createArticle')
  return (
    <Card padding='24' max  >
      <InputFile value={image} onChange={onChangeImage} width={150} height={150} img={AddImageIcon} />
      <Textarea value={description} onChange={onChangeDescription} placeholder={t('Add a description for the image')} />
    </Card>
  )
})