import { useTranslation } from 'react-i18next'
import { classNames } from "shared/lib/classNames/classNames"
import { Select } from 'shared/ui/Select'
import { Country } from '../../model/types/countries'
import { memo, useCallback } from 'react'

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
  { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Selected country')}
      value={value}
      onChange={onChangeHandler}
      options={options}
      readonly={readonly}
    />
  )
})