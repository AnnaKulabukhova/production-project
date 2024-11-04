import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './CreateArticle.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { getUserAuthData } from '@/entities/User'
import { useSelector } from 'react-redux'
import { Textarea } from '@/shared/ui/redesigned/Textarea'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import AddIcon from '@/shared/assets/icons/add.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Input } from '@/shared/ui/redesigned/Input'
import { useCreateArticle } from '../../api/createArticleApi'
import { Button } from '@/shared/ui/redesigned/Button'

interface CreateArticleProps {
  className?: string
}

const items = [
  { content: 'Image', value: 'Image' },
  { content: 'Code', value: 'Code' },
  { content: 'List', value: 'List' },
]

export const CreateArticle = memo(({ className }: CreateArticleProps) => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [tab, setTab] = useState('')
  const [text, setText] = useState('')
  const { t } = useTranslation('createArticle')
  const userData = useSelector(getUserAuthData)
  const [createArticleMutation] = useCreateArticle();


  const handlerSendArticle = (title: string, img?: string, subtitle?: string,) => () => {
    try {
      createArticleMutation({
        title,
        subtitle: subtitle ?? '',
        img,
        views: 0,
        createdAt: String(new Date()),
        userId: userData?.id ?? '',
        type: [],
        blocks: []
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack max gap='16' className={classNames(classes.createArticle, {}, [className])} >
      <HStack gap='8'>
        <Avatar size={32} src={userData?.avatar} />
        <Text bold text={userData?.username} />
      </HStack>

      <VStack max gap='16'>
        <Textarea value={title} size='l' bold placeholder={t('Title')} />
        <Textarea value={subtitle} className={classes.textareaContent} placeholder={t('краткое описание')} />
        <Input type='file' placeholder='Выберете изображение' />
        <HStack>
          <Text text='Выберете тематику статьи' />
        </HStack>
        <HStack max className={classes.g}>

          <Dropdown
            direction='bottom right'
            trigger={<Icon Svg={AddIcon} clickable={false} />}
            items={items}
            className={classes.dropdown}
          />

          <Textarea value={text} minRows={8} className={classes.textareaContent} placeholder={t('Title')} />
        </HStack>
      </VStack>
      <Button onClick={handlerSendArticle(title, subtitle)} className={classes.button}>{t('To publish')}</Button>
    </VStack>
  )
})