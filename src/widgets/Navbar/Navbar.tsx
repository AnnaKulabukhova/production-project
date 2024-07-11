import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [])

  if (authData) {
    return (
      <header className={classNames(classes.navbar, {}, [className ?? ''])}>
        <Button className={classes.links} onClick={onLogout} theme={ButtonTheme.ClearInverted}>
          {t('Logout')}
        </Button>

        <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
      </header>
    )
  }

  return (
    <header className={classNames(classes.navbar, {}, [className])}>

      <Button className={classes.links} onClick={onShowModal} theme={ButtonTheme.ClearInverted}>
        {t('login')}
      </Button>
      {isAuthModal &&
        <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />}

    </header>
  )
})
