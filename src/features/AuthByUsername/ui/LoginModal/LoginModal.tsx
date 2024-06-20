import { Modal } from 'shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Suspense, memo } from 'react'
import { Loader } from 'shared/ui/Loader'

interface LoginModalProps {
  isOpen?: boolean,
  onClose: () => void
}

export const LoginModal = memo(({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
})