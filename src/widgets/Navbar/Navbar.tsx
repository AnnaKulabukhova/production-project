import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<header className={classNames(classes.navbar, {}, [className ?? ''])}>
          <Text className={classes.appName} title="My app" />
          <AppLink theme={AppLinkTheme.Secondary} to={getRouteArticleCreate()}>
            {t('Create new article')}
          </AppLink>
          <HStack gap="16" className={classes.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
          <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
        </header>}

        on={
          <header className={classNames(classes.navbarRedesigned, {}, [className ?? ''])}>
            <HStack gap="16" className={classes.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />

    );
  }

  return (
    <header className={classNames(classes.navbar, {}, [className])}>
      <Button className={classes.links} onClick={onShowModal} theme={ButtonTheme.ClearInverted}>
        {t('login')}
      </Button>
      {isAuthModal && <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />}
    </header>
  );
});
