import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { toggleFeatures } from '@/shared/lib/features/lib/toggleFeatures';
import { ProfileRating } from '@/features/ProfileRating';
import { Card } from '@/shared/ui/deprecated/Card';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/deprecated/Text';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  const profileRatingFeature = toggleFeatures({
    name: 'isProfileRatingEnabled',
    on: () => <ProfileRating profileId={id} />,
    off: () => (
      <Card>
        <Text title={t('The evaluation of the profile will appear soon')} />
      </Card>
    )
  })

  return (
    <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        {profileRatingFeature}
      </VStack>
    </Page>
  );
};

export default ProfilePage;
