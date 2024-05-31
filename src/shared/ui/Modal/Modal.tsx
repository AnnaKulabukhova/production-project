import classes from './Modal.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from '../Portal'
import { useTheme } from 'app/providers/ThemeProvider/lib'

interface ModalProps {
  className?: string,
  children: ReactNode,
  isOpen?: boolean,
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      },
        ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])


  const mods: Record<string, boolean | undefined> = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing
  }


  return (
    <Portal >
      <div className={classNames(classes.modal, mods, [className ?? '', theme, 'app_modal'])} >
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}