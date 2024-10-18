import { memo, useCallback, useState } from 'react';
import classes from './NotificationButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg';
import NotificationIcon from '@/shared/assets/icons/notification-new.svg';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';


interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => setIsOpen(true), []);
  const onCloseDrawer = useCallback(() => setIsOpen(false), []);

  const trigger = (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <ButtonDeprecated theme={ButtonTheme.Clear}>
          <IconDeprecated Svg={NotificationIconDeprecated} inverted />
        </ButtonDeprecated>
      }
      on={
        <Icon Svg={NotificationIcon} clickable={false} width={16} height={17} />
      }
    />
  );
  const triggerDrawer = (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={<ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.Clear}>
        <IconDeprecated Svg={NotificationIconDeprecated} inverted />
      </ButtonDeprecated>
      }
      on={<Icon Svg={NotificationIcon} clickable={true} onClick={onOpenDrawer} width={16} height={17} />}
    />
  );

  return (
    <>
      <BrowserView>
        <ToggleFeatures
          feature='isAppRedesigned'
          off={
            <PopoverDeprecated className={classNames(classes.notificationButton, {}, [className])} direction="bottom left" trigger={trigger}>
              <NotificationList className={classes.notifications} />
            </PopoverDeprecated>
          }
          on={
            <Popover className={classNames(classes.notificationButton, {}, [className])} direction="bottom left" trigger={trigger}>
              <NotificationList className={classes.notifications} />
            </Popover>
          }
        />

      </BrowserView>

      <MobileView>
        {triggerDrawer}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
});
