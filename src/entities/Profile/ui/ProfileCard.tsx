import type { Profile } from '../model/types/profile';
import type { SerializedError } from '@reduxjs/toolkit';
import type { Currency } from '@/entities/Currency';
import type { Country } from '@/entities/Country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardDeprecated, ProfileCardDeprecatedError, ProfileCardDeprecatedSkeleton } from './ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned, ProfileCardRedesignedError, ProfileCardRedesignedSkeleton } from './ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string | SerializedError;
  readonly?: boolean;
  onChangeLastName?: (value?: string) => void;
  onChangeFirstName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { isLoading, error } = props
  // const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<ProfileCardDeprecatedSkeleton />}
        on={<ProfileCardRedesignedSkeleton />}
      />
    )
  }

  if (error) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<ProfileCardDeprecatedError />}
        on={<ProfileCardRedesignedError />}
      />
    )
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={<ProfileCardDeprecated {...props} />}
      on={<ProfileCardRedesigned {...props} />}
    />
  );
};
