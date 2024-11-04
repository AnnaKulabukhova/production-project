import { Modal } from '@/shared/ui/redesigned/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Suspense, memo } from 'react';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoginModalProps {
  isOpen?: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal className={classNames('', {}, [className])} lazy isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
});
