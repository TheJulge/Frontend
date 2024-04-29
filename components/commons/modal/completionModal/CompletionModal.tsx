import React, { ReactNode } from 'react';
import Modal from '@/components/commons/modal/Modal';
import styles from '@/components/commons/modal/completionModal/CompletionModal.module.scss';

/**
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
export default function CompletionModal({
  children,
  showModal,
  handleClose,
}: ModalProps) {
  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.modalInner}>
        {children}
        <button className={styles.button} type="button" onClick={handleClose}>
          확인
        </button>
      </div>
    </Modal>
  );
}
