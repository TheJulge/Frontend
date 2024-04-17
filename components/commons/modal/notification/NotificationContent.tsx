import React from 'react';
import ApproveIcon from '@/public/images/ modal/approve.svg';
import RejectIcon from '@/public/images/ modal/reject.svg';
import styles from './NotificationContent.module.scss';

interface NotificationContentProps {
  data: any;
}
function NotificationContent(data: NotificationContentProps) {
  const isApprove = true;
  return (
    <div className={styles.flexContainer}>
      {isApprove ? (
        <>
          <ApproveIcon viewBox="0 0 5 5" alt="approve icon" />
          <div className={styles.text}>
            {data} 공고 지원이 <span>승인</span>되어있어요
          </div>
        </>
      ) : (
        <>
          <RejectIcon viewBox="0 0 5 5" alt="reject icon" />
          <div className={styles.text}>
            {data} 공고 지원이 <span>거절</span>되어있어요
          </div>
        </>
      )}
      <div className={styles.time}>{date}</div>
    </div>
  );
}

export default NotificationContent;
