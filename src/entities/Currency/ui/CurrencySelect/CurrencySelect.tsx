import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
  label?: string
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo(({ value, onChange, readonly, label }: CurrencySelectProps) => {
  const { t } = useTranslation('profile');
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
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
      off={
        < ListBoxDeprecated {...props} />
      }
      on={
        < ListBox {...props} />
      }
    />
  );
});
