import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import iconLang from '@/shared/assets/icons/language-new.svg'

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <Button className={classNames('', {}, [className])} theme={ButtonTheme.ClearInverted} onClick={toggle}>
          {t(short ? 'short' : 'long')}
        </Button>
      }
      on={
        <Icon
          Svg={iconLang}
          className={classNames('', {}, [className])}
          clickable
          onClick={toggle}
        />
      }
    />
  )
})
