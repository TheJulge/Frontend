import React from 'react';
import { Alert } from '@/types/alertTypes';
import CloseIcon from '@/public/images/ modal/close.svg';
import styles from './NotificationModal.module.scss';
import NotificationContent from './NotificationContent';
/**
 * @param {boolean} props.showModal 모달 보임 유뮤 결정
 * @param {Function} props.handleClose  모달 닫을 때 실행할 함수
 * @param {number} props.count  알림 개수
 * @param {any} props.notiData  알림 데이터
 */

interface ModalProps {
  handleClose: () => void;
  count: number;
  notiDatas: Alert[];
}
export default function NotificationModal({
  handleClose,
  count,
  notiDatas,
}: ModalProps) {
  return (
    <div className={styles.notiInner}>
      <div className={styles.modalHeader}>
        <span>알림 {count}개</span>
        <CloseIcon
          viewBox="0 0 24 24"
          alt="close icon"
          onClick={handleClose}
          className={styles.closeIcon}
        />
      </div>
      <ul className={styles.notiContents}>
        {notiDatas.map((data: Alert) => {
          return (
            <NotificationContent
              key={data.item.id}
              data={data}
              handleClose={handleClose}
            />
          );
        })}
      </ul>
    </div>
  );
}
