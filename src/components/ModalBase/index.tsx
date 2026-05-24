import { ReactNode } from 'react';
import { ModalHeader as StyledHeader, ModalBody as StyledBody } from './styles';

interface ModalHeaderProps {
  children: ReactNode;
}

interface ModalBodyProps {
  children: ReactNode;
}

export function ModalHeader({ children }: ModalHeaderProps) {
  return <StyledHeader>{children}</StyledHeader>;
}

export function ModalBody({ children }: ModalBodyProps) {
  return <StyledBody>{children}</StyledBody>;
}
