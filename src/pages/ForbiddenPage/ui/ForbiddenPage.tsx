import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation();
  return (
    <Page data-testid="ForbiddenPage" className={classNames('', {}, [className])}>
      {t('Access to the page is prohibited')}
    </Page>
  );
};
