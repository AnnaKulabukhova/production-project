import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.navbar)}>


    </div>
  )
}
