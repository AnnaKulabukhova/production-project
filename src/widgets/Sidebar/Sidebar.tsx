import { useState } from "react"
import { useTranslation } from "react-i18next"
import classes from './Sidebar.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher"

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed(value => !value)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])} >

      <button
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        {t("Переключить")}
      </button>
      <div className={classes.swithers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>

  )
}
