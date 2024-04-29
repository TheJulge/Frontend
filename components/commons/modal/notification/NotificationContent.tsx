import React from 'react';
import { getCookieValue } from '@/utils/getCookie';
import { Alert } from '@/types/alertTypes';
import { putAlert } from '@/libs/alert';
import { timeChange } from '@/utils/alertDateFormet';
import Link from 'next/link';
import ApproveIcon from '@/public/images/ modal/approve.svg';
import RejectIcon from '@/public/images/ modal/reject.svg';
import styles from './NotificationContent.module.scss';

interface NotificationContentProps {
  data: Alert;
  handleClose: () => void;
}
function NotificationContent({ data, handleClose }: NotificationContentProps) {
  const noticeData = data.item;
  const noticeName = noticeData.notice.item.description;
  const isApprove = noticeData.result === 'accepted';
  const time = noticeData.createdAt;
  const userId = getCookieValue('userId');
  const accessToken = getCookieValue('accessToken');
  const { notice } = noticeData;
  const { shop } = noticeData;
  const { id } = noticeData;

  const putNotifiData = async () => {
    await putAlert(userId, id, accessToken);
  };
  const handlePutNoti = () => {
    putNotifiData();
    handleClose();
  };

  return (
    !noticeData.read && (
      <li>
        <Link
          className={styles.flexContainer}
          href={`/shops/${shop.item.id}/notices/${notice.item.id}/alba`}
          onClick={handlePutNoti}
        >
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
          <div className={styles.time}>{timeChange(time)}</div>
        </Link>
      </li>
    )
  );
}

export default NotificationContent;
