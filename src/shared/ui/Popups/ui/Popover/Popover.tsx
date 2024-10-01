import type { ReactNode } from 'react'
import { memo } from 'react'
import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react'
import classes from './Popover.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import classesPopups from '../../styles/popup.module.scss'
import { mapDirectionClass } from '../../styles/consts'
import type { DropdownDirection } from '@/shared/types/ui'

interface PopoverProps {
  className?: string
  direction?: DropdownDirection
  trigger: ReactNode
  children: ReactNode
}

export const Popover = memo(({ className, trigger, children, direction = 'bottom right' }: PopoverProps) => {
  return (
    <div className={classNames(classes.popover, {}, [className, classesPopups.popup])} >
      <HPopover>
        <PopoverButton as='div' className={classesPopups.trigger}>
          {trigger}
        </PopoverButton>
        <PopoverPanel className={classNames(classes.panel, {}, [className, mapDirectionClass[direction]])}>
          {children}
        </PopoverPanel>
      </HPopover>
    </div>
  )
})
