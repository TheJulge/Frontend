import React from 'react';
import CloseIcon from '@/public/images/ modal/close.svg';
import styles from './NotificationModal.module.scss';
import Modal from '../Modal';
// import NotificationContent from './NotificationContent';
/**
 *
 * @param {Object} props
 * @param {React.Node} props.children 모달 description
 * @param {boolean} props.showModal 모달 보임 유뮤 결정
 * @param {Function} props.handleClose  모달 닫을 때 실행할 함수
 * @param {number} props.count  알림 개수
 * @param {any} props.notiData  알림 데이터
 */

interface ModalProps {
  showModal: boolean;
  handleClose: () => void;
  count: number;
}
export default function NotificationModal({
  showModal,
  handleClose,
  count,
  // notiDatas,
}: ModalProps) {
  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.notiInner}>
        <div className={styles.modalHeader}>
          <span>알림 {count}개</span>
          <CloseIcon viewBox="0 0 24 24" alt="close icon" />
        </div>
        {/* {notiDatas.map(data => {
          <NotificationContent data={data}/>;
        })} */}
      </div>
    </Modal>
  );
}
