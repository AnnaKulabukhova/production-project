import { memo, useCallback, useState } from 'react'
import classes from './NotificationButton.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Popover } from '@/shared/ui/Popups'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => setIsOpen(true), [])
  const onCloseDrawer = useCallback(() => setIsOpen(false), [])

  const trigger = (
    <Button theme={ButtonTheme.Outline} >
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  )
  const triggerDrawer = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.Clear} >
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  )

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames(classes.notificationButton, {}, [className])}
          direction='bottom left'
          trigger={trigger}>
          <NotificationList className={classes.notifications} />
        </Popover>
      </BrowserView>

      <MobileView>
        {triggerDrawer}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  )
})
