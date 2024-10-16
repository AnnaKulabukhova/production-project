import { Loader } from '@/shared/ui/deprecated/Loader';
import classes from './PageLoader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.pageLoader, {}, [className])}>
      <div className={classes.text}> {t('Loading')} </div>
      <Loader />
    </div>
  );
};
