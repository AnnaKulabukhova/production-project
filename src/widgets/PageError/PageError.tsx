import { useTranslation } from 'react-i18next';
import classes from './PageError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';

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
      <Button onClick={reloadPage}>{t('Refresh the page')}</Button>
    </div>
  );
};
