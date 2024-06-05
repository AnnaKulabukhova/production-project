import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  isOpen?: boolean,
  onClose?: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} >
      <LoginForm />
    </Modal>
  )
}