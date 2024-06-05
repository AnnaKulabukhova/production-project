import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import classes from './LoginModal.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface LoginModalProps {
  className?: string
  isOpen?: boolean,
  onClose?: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(classes.loginModal, {}, [className ?? ''])} >
      <LoginForm />
    </Modal>
  )
}