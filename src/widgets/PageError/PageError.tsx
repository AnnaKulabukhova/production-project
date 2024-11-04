import { useTranslation } from 'react-i18next';
import classes from './PageError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { ToggleFeatures } from '@/shared/lib/features';

interface PageErrorProps {
  className?: string;
}

const reloadPage = () => {
  location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();


  return (
    <div className={classNames(classes.pageError, {}, [className])}>
      <p>{t('An unexpected error has occurred')}</p>
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<ButtonDeprecated onClick={reloadPage}>{t('Refresh the page')}</ButtonDeprecated>}
        on={<ButtonRedesigned onClick={reloadPage}>{t('Refresh the page')}</ButtonRedesigned>}
      />
    </div>
  );
};
