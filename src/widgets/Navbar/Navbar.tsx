import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setIsAuthModal(value => !value)
  }, [])

  return (
    <div className={classNames(classes.navbar, {}, [className ?? ''])}>

      <Button className={classes.links} onClick={onToggleModal} theme={ButtonTheme.ClearInverted}>
        {t('login')}
      </Button>

      <Modal onClose={onToggleModal} isOpen={isAuthModal}>
        <div>
          Чтобы обойти эту проблему, react-screenshot-test по умолчанию будет запущен Puppeteer (т. е. Chrome) внутри Docker, чтобы делать снимки экрана ваших компонентов. Это гарантирует, что создаваемые снимки экрана будут единообразными независимо от того, на какой платформе вы запускаете тесты.
        </div>
      </Modal>
    </div>
  )
}
