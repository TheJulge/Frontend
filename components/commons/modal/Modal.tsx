import React, { ReactNode, useEffect, useRef } from 'react';
import useCloseModal from '@/hooks/useCloseModal';
import Portal from './Portal';
import styles from './Modal.module.scss';

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
  useEffect(() => {
    if (showModal) {
      document.body.classList.add(styles['body-scroll-lock']);
    }
  }, [showModal]);
  return (
    <Portal>
      <div className={styles.wrapper}>
        <div ref={modalRef}>{children}</div>
      </div>
    </Portal>
  );
}
