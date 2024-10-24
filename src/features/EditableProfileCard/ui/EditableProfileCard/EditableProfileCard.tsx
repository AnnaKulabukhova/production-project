import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import type { Currency } from '@/entities/Currency';
import type { Country } from '@/entities/Country';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ProfileCard } from '@/entities/Profile';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileErrors } from '../../model/consts/EditableProfileCardConsts';
import { DynamicModuleLoading } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { ProfileRating } from '@/features/ProfileRating';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}
const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo(({ className, id }: EditableProfileCardProps) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const formData = useSelector(getProfileForm);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileErrors.IncorrectAge]: t('Incorrect Age'),
    [ValidateProfileErrors.IncorrectCity]: t('Incorrect City'),
    [ValidateProfileErrors.IncorrectUserData]: t('First and last name are required'),
    [ValidateProfileErrors.NoData]: t('Data is not specified'),
    [ValidateProfileErrors.ServerError]: t('Server error'),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastName: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      const validateValue = value?.replace(/\D+/gm, '');
      dispatch(profileActions.updateProfile({ age: Number(validateValue || 0) }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  if (!id) {
    return null;
  }

  const withoutProfileRating = (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <HStack justify='center' max>
          <TextDeprecated title={t('The evaluation of the profile will appear soon')} />
        </HStack>
      }
      on={
        <Card max border='16' padding='24'>
          <HStack justify='center' max>
            <Text title={t('The evaluation of the profile will appear soon')} />
          </HStack>
        </Card>
      }
    />
  )

  const profileRatingFeature = toggleFeatures({
    name: 'isProfileRatingEnabled',
    on: () => <ProfileRating profileId={id} />,
    off: () => withoutProfileRating
  })

  return (
    <DynamicModuleLoading reducers={reducers}>
      <VStack max gap="8" className={classNames('', {}, [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err: ValidateProfileErrors) => (
            <ToggleFeatures key={err}
              feature='isAppRedesigned'
              off={<TextDeprecated key={err} text={validateErrorTranslates[err]} theme={TextTheme.Error} data-testid="EditableProfileCard.Error" />}
              on={<Text key={err} text={validateErrorTranslates[err]} variant='error' data-testid="EditableProfileCard.Error" />}
            />
          ))}
        <ProfileCard
          readonly={readonly}
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
        {profileRatingFeature}
      </VStack>
    </DynamicModuleLoading>
  );
});
