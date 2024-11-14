import { Country } from '../../model/types/countries';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { useTranslation } from 'react-i18next';

interface CountrySelectProps {
  className?: string;
  value?: string;
  onChange?: (country: Country) => void;
  readonly?: boolean;
  label?: string
}

export const CountrySelect = memo(({ value, onChange, readonly, label }: CountrySelectProps) => {
  const { t } = useTranslation();

  const options = [
    { value: Country.Armenia, content: t('Armenia') },
    { value: Country.Belarus, content: t('Belarus') },
    { value: Country.Kazakhstan, content: t('Kazakhstan') },
    { value: Country.Russia, content: t('Russia') },
    { value: Country.Ukraine, content: t('Ukraine') },
  ];
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  const props = {
    label,
    items: options,
    value,
    onChange: onChangeHandler,
    readonly,
    direction: 'top right' as const
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={<ListBoxDeprecated  {...props} />}
      on={<ListBox {...props} />}
    />
  );
});
