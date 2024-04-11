
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar = () => {
  return (
    <div className={classNames(classes.navbar)}>
            
        <div className={classNames(classes.links)}> 
            <AppLink theme={AppLinkTheme.Secondary} className={classNames(classes.link)} to={'/'} >Главная страница</AppLink>
            <AppLink theme={AppLinkTheme.Secondary} className={classNames(classes.link)} to={'/about'}>О сайте</AppLink>
        </div>
       
    </div>
  )
}
