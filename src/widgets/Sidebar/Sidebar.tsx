import { useState } from "react"
import { useTranslation } from "react-i18next"
import classes from './Sidebar.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button"
import { AppLink } from "shared/ui/AppLink"
import { AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { t } from "i18next"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import AboutIcon from "shared/assets/icons/about.svg"
import HomeIcon from "shared/assets/icons/home.svg"

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = () => {
    setCollapsed(value => !value)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, className ? [className] : [])} >

      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classes.collapsedBtn}
        theme={ButtonTheme.BackgroundInverted}
        square={true}
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={classNames(classes.items)}>
        <AppLink to={RoutePath.main} className={classes.item}>
          <HomeIcon className={classes.icon} />
          <span className={classNames(classes.link)}>{t("Главная страница")}</span>
        </AppLink>

        <AppLink to={RoutePath.about} className={classes.item}>
          <AboutIcon className={classes.icon} />
          <span className={classNames(classes.link)}>{t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={classes.swithers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>

  )
}
