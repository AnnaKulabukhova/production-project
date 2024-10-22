import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { getRouteAdminPanel, getRouteProfile, getRouteSettings } from '@/shared/const/router';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
        {
          content: t('Admin'),
          href: getRouteAdminPanel(),
        },
      ]
      : []),
    {
      content: t('Profile'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('Settings'),
      href: getRouteSettings(),
    },
    {
      content: t('Logout'),
      onClick: onLogout,
    },
  ]

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <DropdownDeprecated
          className={className}
          direction="bottom left"
          items={items}
          trigger={<AvatarDeprecated src={authData.avatar} size={30} alt="avatar" fallbackInverted />}
        />
      }
      on={
        <Dropdown
          className={className}
          direction="bottom left"
          items={items}
          trigger={<Avatar src={authData.avatar} size={48} alt="avatar" />}
        />
      }
    />
  );
});
