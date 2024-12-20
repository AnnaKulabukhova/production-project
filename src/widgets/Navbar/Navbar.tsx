import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { AppLinkTheme } from '@/shared/ui/deprecated/AppLink/AppLink';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import CreateArticleIcon from '@/shared/assets/icons/create-arrticle-new.svg'
import { Icon } from '@/shared/ui/redesigned/Icon';

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
          <AppLinkDeprecated theme={AppLinkTheme.Secondary} to={getRouteArticleCreate()}>
            {t('Create new article')}
          </AppLinkDeprecated>
          <HStack gap="16" className={classes.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
          <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
        </header>}

        on={
          <header className={classNames(classes.navbarRedesigned, {}, [className ?? ''])}>
            <HStack gap="8" className={classes.actions}>
              <AppLink to={getRouteArticleCreate()}><Icon Svg={CreateArticleIcon} /></AppLink>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />

    );
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <header className={classNames(classes.navbar, {}, [className])}>
          <ButtonDeprecated className={classes.links} onClick={onShowModal} theme={ButtonTheme.ClearInverted}>
            {t('login')}
          </ButtonDeprecated>
          {isAuthModal && <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />}
        </header>
      }
      on={
        <header className={classNames(classes.navbarRedesigned, {}, [className])}>
          <Button onClick={onShowModal} variant={'clear'}>
            {t('login')}
          </Button>
          {isAuthModal && <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />}
        </header>
      }
    />
  );
});
