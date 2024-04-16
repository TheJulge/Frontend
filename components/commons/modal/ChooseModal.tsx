import React, { ReactNode } from 'react';
import CheckIcon from '@/public/images/ modal/check.svg';
import styles from './Modal.module.scss';
import Modal from './Modal';

/**
 *
 * @param {Object} props
 * @param {React.Node} props.children 모달 description
 * @param {boolean} props.showModal 모달 보임 유뮤 결정
 * @param {Function} props.handleYes  예를 누르면 실행할 함수
 * @param {Function} props.handleNo  아니오를 누르면 실행될 닫기 함수
 */

interface ModalProps {
  children: ReactNode;
  showModal: boolean;
  handleYes: () => void;
  handleNo: () => void;
}
export default function ChooseModal({
  children,
  showModal,
  handleYes,
  handleNo,
}: ModalProps) {
  return (
    <Modal showModal={showModal} handleClose={handleNo}>
      <CheckIcon viewBox="0 0 24 24" alt="check icon" />
      {children}
      <div className={styles.buttonGroup}>
        <button className={styles.emptyButton} type="button" onClick={handleNo}>
          아니오
        </button>
        <button className={styles.fillButton} type="button" onClick={handleYes}>
          예
        </button>
      </div>
    </Modal>
  );
}
