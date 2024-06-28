import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './ArticleImageBlockComponent.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { ArticleImageBlock } from '../../model/types/article'
import { Text, TextAlign } from 'shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.articleimageblockcomponent, {}, [className])}>
      <img className={classes.img} src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align={TextAlign.Center} />}
    </div>
  )
})