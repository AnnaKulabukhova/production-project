import { Icon } from '@/shared/ui/redesigned/Icon'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import AddIcon from '@/shared/assets/icons/add.svg'
import { ArticleBlockType } from '@/entities/Article'

interface DropdownArticleProps {
  className?: string
  addBlock: (type: ArticleBlockType) => void
}

export const DropdownArticle = memo(({ className, addBlock }: DropdownArticleProps) => {
  const { t } = useTranslation('createArticle')

  const dropdownItems = useMemo(() => {
    const items = [
      { content: t('Image'), type: ArticleBlockType.Image },
      { content: t('Code'), type: ArticleBlockType.Code },
      { content: t('Text'), type: ArticleBlockType.Text },
    ]
    return items.map(({ content, type }) => ({
      content,
      value: type,
      onClick: () => addBlock(type)
    }))
  }, [addBlock, t])

  return (
    <Dropdown
      direction='top right'
      trigger={<Icon Svg={AddIcon} clickable={false} />}
      items={dropdownItems}
    />
  )
})