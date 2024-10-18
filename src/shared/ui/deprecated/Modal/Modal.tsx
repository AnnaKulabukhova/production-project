import classes from './Modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Mods } from '@/shared/lib/classNames/classNames';
import type { ReactNode } from 'react';

import { Overlay } from '../../redesigned/Overlay';
import { useModal } from '@/shared/lib/hooks/useModel/useModel';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Portal } from '../../redesigned/Portal';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;
/**
 * Устарел, использовать новый из папки redesigned
 * @deprecated
 */
export const Modal = ({ lazy, className, children, isOpen, onClose }: ModalProps) => {
  const { theme } = useTheme();
  const { isClosing, isMounted, close } = useModal({ isOpen, onClose, animationDelay: ANIMATION_DELAY });

  const mods: Mods = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(classes.modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={close} />
        <div className={classes.content}>{children}</div>
      </div>
    </Portal>
  );
};
