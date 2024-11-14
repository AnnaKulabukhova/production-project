import { memo } from 'react'
import classes from './CreatingBlockCode.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { Textarea } from '@/shared/ui/redesigned/Textarea'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/redesigned/Card'

interface CreatingBlockCodeProps {
  className?: string
  value: string
  onChange: (newCode: string) => void
}

export const CreatingBlockCode = memo(({ className, onChange, value }: CreatingBlockCodeProps) => {
  const { t } = useTranslation('createArticle')
  return (
    <Card padding='24' max  >
      <pre className={classNames(classes.code, {}, [className])}>
        <code>
          <Textarea onChange={onChange} value={value} placeholder={t('Add a code snippet')} />
        </code>
      </pre>
    </Card>
  )
})
