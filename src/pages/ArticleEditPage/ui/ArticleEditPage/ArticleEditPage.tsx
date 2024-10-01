import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './ArticleEditPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'
import { useParams } from 'react-router-dom'
import { Text, TextSize } from '@/shared/ui/Text'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames(classes.articleEditPage, {}, [className])} >
      {isEdit
        ? <Text size={TextSize.SizeL} title={t(`Edit article with Id ${id}`)} />
        : <Text size={TextSize.SizeL} title={t('Create new article')} />
      }
    </Page>
  )
})

export default ArticleEditPage
