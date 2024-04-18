import React from 'react';
import ApproveIcon from '@/public/images/ modal/approve.svg';
import RejectIcon from '@/public/images/ modal/reject.svg';
import styles from './NotificationContent.module.scss';

interface NotificationContentProps {
  data: any;
}
function NotificationContent({ data }: NotificationContentProps) {
  const noticeData = data.data.item;
  const noticeName = noticeData.notice.item.description;
  const isApprove = noticeData.result === 'accepted';
  const time = noticeData.createdAt;

  return (
    <div className={styles.flexContainer}>
      {isApprove ? (
        <>
          <ApproveIcon viewBox="0 0 5 5" alt="approve icon" />
          <div className={styles.text}>
            {noticeName} 공고 지원이{' '}
            <span className={styles.approveText}>승인</span>되었어요.
          </div>
        </>
      ) : (
        <>
          <RejectIcon viewBox="0 0 5 5" alt="reject icon" />
          <div className={styles.text}>
            {noticeName} 공고 지원이{' '}
            <span className={styles.rejectText}>거절</span>되었어요.
          </div>
        </>
      )}
      <div className={styles.time}>{time}</div>
    </div>
  );
}

export default NotificationContent;
