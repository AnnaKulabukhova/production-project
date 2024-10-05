import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  domNode?: HTMLElement;
}

export const Portal = ({ children, domNode = document.body }: PortalProps) => {
  return createPortal(children, domNode);
};
