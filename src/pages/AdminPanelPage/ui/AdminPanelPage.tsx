import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation();
  return (
    <Page data-testid="AdminPanelPage" className={classNames('', {}, [className])}>
      {t('Admin panel')}
    </Page>
  );
};
export default AdminPanelPage;
