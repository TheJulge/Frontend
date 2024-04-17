import React, { ReactNode, useRef } from 'react';
import useCloseModal from '@/hooks/useCloseModal';
import CloseIcon from '@/public/images/ modal/close.svg';
import Portal from '../Portal';
import styles from './NotificationModal.module.scss';

/**
 *
 * @param {Object} props
 * @param {React.Node} props.children 모달 description
 * @param {boolean} props.showModal 모달 보임 유뮤 결정
 * @param {Function} props.handleClose  모달 닫을 때 실행할 함수
 */

interface ModalProps {
  children: ReactNode;
  showModal: boolean;
  handleClose: () => void;
}
export default function Modal({
  children,
  showModal,
  handleClose,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useCloseModal(showModal, handleClose, modalRef);
  return (
    <Portal>
      <div className={styles.wrapper}>
        <div className={styles.inner} ref={modalRef}>
          <CloseIcon viewBox="0 0 24 24" alt="close icon" />
          {children}
        </div>
      </div>
    </Portal>
  );
}
