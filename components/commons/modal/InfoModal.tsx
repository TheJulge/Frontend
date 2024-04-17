import React, { ReactNode, useRef } from 'react';
import useCloseModal from '@/hooks/useCloseModal';
import InfoIcon from '@/public/images/ modal/info.svg';
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
  return (
    <Portal>
      <div className={styles.wrapper}>
        <div className={styles.inner} ref={modalRef}>
          <InfoIcon viewBox="0 0 24 24" alt="infomation icon" />
          {children}
          <button
            className={styles.emptyButton}
            type="button"
            onClick={handleClose}
          >
            확인
          </button>
        </div>
      </div>
    </Portal>
  );
}
