import { useTranslation } from 'react-i18next'
import { Country } from '../../model/types/countries'
import { memo, useCallback } from 'react'
import { ListBox } from '@/shared/ui/Popups'

interface CountrySelectProps {
  className?: string
  value?: string
  onChange?: (country: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = memo(({ value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <ListBox
      label={t('Selected country')}
      items={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      direction='top right'
    />
  )
})
