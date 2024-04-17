import React, { ReactNode } from 'react';
import InfoIcon from '@/public/images/ modal/info.svg';
import styles from './Modal.module.scss';
import Modal from './Modal';
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
export default function InfoModal({
  children,
  showModal,
  handleClose,
}: ModalProps) {
  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.modalInner}>
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
    </Modal>
  );
}
