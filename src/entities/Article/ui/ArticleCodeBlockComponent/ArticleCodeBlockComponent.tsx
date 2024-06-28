import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './ArticleCodeBlockComponent.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { ArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui/Code'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.articleCodeBlockComponent, {}, [className])} >
      <Code text={block.code}></Code>
    </div>
  )
})