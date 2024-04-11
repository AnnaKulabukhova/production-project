import { useState } from "react"
import classes from './Sidebar.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher"

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(value => !value)
    }

  return (
    <div className={classNames(classes.sidebar, {[classes.collapsed]: collapsed}, [className])} >
        <button 
        onClick={onToggle}
      >
      Toggle
      </button>
      <div className={classes.swithers}>
        <ThemeSwitcher />
        <LangSwitcher/>
      </div>
    </div>
    
  )
}
