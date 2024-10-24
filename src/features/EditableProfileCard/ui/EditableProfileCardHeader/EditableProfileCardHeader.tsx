import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(({ className }: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const profile = useSelector(getProfileData);
  const user = useSelector(getUserAuthData);
  const canEdit = profile?.id === user?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (

    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <HStack justify="between" max className={classNames('', {}, [className])}>
          <TextDeprecated title={t('Profile')} />
          {canEdit && (
            <>
              {readonly ? (
                <ButtonDeprecated onClick={onEdit} theme={ButtonTheme.Outline} data-testid="EditableProfileCardHeader.EditButton">
                  {t('Edit')}
                </ButtonDeprecated>
              ) : (
                <HStack gap="16">
                  <ButtonDeprecated theme={ButtonTheme.OutlineRed} onClick={onCancelEdit} data-testid="EditableProfileCardHeader.CancelButton">
                    {t('Cancel')}
                  </ButtonDeprecated>
                  <ButtonDeprecated theme={ButtonTheme.Outline} onClick={onSave} data-testid="EditableProfileCardHeader.SaveButton">
                    {t('Save')}
                  </ButtonDeprecated>
                </HStack>
              )}
            </>
          )}
        </HStack>
      }
      on={
        <Card padding='24' border='16' max>
          <HStack justify="between" max className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
              <>
                {readonly ? (
                  <Button onClick={onEdit} variant='outline' color='normal' data-testid="EditableProfileCardHeader.EditButton">
                    {t('Edit')}
                  </Button>
                ) : (
                  <HStack gap="16">
                    <Button variant='outline' color='error' onClick={onCancelEdit} data-testid="EditableProfileCardHeader.CancelButton">
                      {t('Cancel')}
                    </Button>
                    <Button variant='outline' color='success' onClick={onSave} data-testid="EditableProfileCardHeader.SaveButton">
                      {t('Save')}
                    </Button>
                  </HStack>
                )}
              </>
            )}
          </HStack>
        </Card>
      }
    />
  );
});
