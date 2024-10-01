import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/currency'
import { memo, useCallback } from 'react'
import { ListBox } from '@/shared/ui/Popups'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR }
]

export const CurrencySelect = memo(({ value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation('profile')
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <ListBox
      label={t('Selected currency')}
      items={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      direction='top right'
    />
  )
})
