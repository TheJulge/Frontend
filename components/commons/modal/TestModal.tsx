import React from 'react';
import InfoIcon from '@/public/images/ modal/info.svg';
import { Application } from '@/components/table/applicationTypes';

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
  showModal: boolean;
  handleClose: () => void;
  applicaitonItem: Application | null;
  handleStatusChange: (
    status: 'pending' | 'accepted' | 'rejected' | 'canceled',
    id: string,
  ) => void;
}
export default function Testmodal({
  showModal,
  handleClose,
  handleStatusChange,
  applicaitonItem,
}: ModalProps) {
  const StatusChangeing = () => {
    if (applicaitonItem) {
      handleStatusChange('rejected', applicaitonItem?.id);
      // 모달끄기 로직 추가
    }
  };
  console.log('!!selectItem', applicaitonItem);

  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.modalInner}>
        <InfoIcon viewBox="0 0 24 24" alt="infomation icon" />
        {applicaitonItem?.user.item.name}
        {applicaitonItem?.user.item.bio}
        <button
          className={styles.emptyButton}
          type="button"
          onClick={StatusChangeing}
        >
          거절하기
        </button>
        <button
          className={styles.emptyButton}
          type="button"
          onClick={StatusChangeing}
        >
          승인하기
        </button>
      </div>
    </Modal>
  );
}
