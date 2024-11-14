import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { getUserAuthData } from '@/entities/User'
import { useSelector } from 'react-redux'
import { Textarea } from '@/shared/ui/redesigned/Textarea'
import { useCreateArticle } from '../../api/createArticleApi'
import { Button } from '@/shared/ui/redesigned/Button'
import { InputFile } from '@/shared/ui/redesigned/InputFile'
import AddImageIcon from '@/shared/assets/icons/image-plus-line.svg'
import { type ArticleType } from '@/entities/Article'
import { TypeTabsForNewArticle } from '../TypeTabsForNewArticle/TypeTabsForNewArticle'
import { AddNewBlock } from '../AddNewBlock/AddNewBlock'
import type { ArticleBlocks } from '../../model/types/createArticleTypes'
import { Card } from '@/shared/ui/redesigned/Card'

interface CreatingArticleProps {
  className?: string
}

export const CreatingArticle = memo(({ className }: CreatingArticleProps) => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [type, setType] = useState<ArticleType[]>([])
  const [imageArticle, setImageArticle] = useState('')
  const [blockArticles, setBlockArticles] = useState<ArticleBlocks>([])

  const { t } = useTranslation('createArticle')
  const userData = useSelector(getUserAuthData)
  const [createArticleMutation] = useCreateArticle();
  const date = new Date()
  const fullDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

  const handlerSendArticle = () => {
    try {
      createArticleMutation({
        title,
        subtitle: subtitle ?? '',
        img: imageArticle,
        views: 0,
        createdAt: fullDate,
        userId: userData?.id ?? '',
        type,
        blocks: blockArticles
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack max gap='16' >
      <HStack gap='8'>
        <Avatar size={32} src={userData?.avatar} />
        <Text bold text={userData?.username} />
      </HStack>

      <VStack max gap='16'>
        <Textarea
          placeholder={t('Title')}
          onChange={(value: string) => setTitle(value)}
          value={title}
          bold
        />
        <Textarea
          onChange={(value: string) => setSubtitle(value)}
          value={subtitle}
          placeholder={t('Brief description of the article')}
        />
        <Card max padding='24'>
          <HStack max justify='between' align='start'>
            <VStack max gap='16'>
              <Text size='m' text={t('Add an image for the article')} />
              <InputFile
                width={100}
                height={100}
                img={AddImageIcon}
                value={imageArticle}
                onChange={(value: string) => setImageArticle(value)}
              />
            </VStack>

            <VStack max gap='24'>
              <Text text={`${t('Select the subject of the article')}:`} />
              <TypeTabsForNewArticle value={type} onChangeType={(newTypes: ArticleType[]) => setType(newTypes)} />
            </VStack>
          </HStack>
        </Card>

        <HStack max >
          <AddNewBlock blockArticles={blockArticles} setBlockArticles={setBlockArticles} />
        </HStack>
      </VStack>
      <Button onClick={handlerSendArticle} >{t('Publish')}</Button>
    </VStack >
  )
})
