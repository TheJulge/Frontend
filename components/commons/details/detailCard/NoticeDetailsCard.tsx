import { useState } from 'react';
import Image from 'next/image';
import ClockIcon from '@/public/images/card/clockIcon.svg';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import { formatNoticeTime } from '@/utils/noticeDataFormetters';
import { NoticeBaseType } from '@/types/noticeTypes';
import PayIncrease from '../../card/payIncrease/PayIncrease';
import InfoModal from '../../modal/InfoModal';
import styles from './NoticeDetailsCard.module.scss';

interface NoticeDetailsCardProp {
  noticeDetails: NoticeBaseType;
}

export default function NoticeDetailsCard({
  noticeDetails,
}: NoticeDetailsCardProp) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const shopDetails = noticeDetails.shop.item;
  const [startDate, workHour] = formatNoticeTime(
    noticeDetails.startsAt,
    noticeDetails.workhour,
  );
  const profileRequestModalOpen = () => {
    setIsProfileModalOpen(true);
  };
  const profileRequestModalClose = () => {
    setIsProfileModalOpen(false);
  };
  const handleClickToApply = () => {
    //1. 쿠키에서 userId 가져옴
    //2. users/userId로 get
    //3. name 있으면 신청하기 요청 보냄, 없으면 profileModal
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardImg}>
        {noticeDetails.closed && (
          <div className={styles.closedMessage}>마감 완료</div>
        )}
        <Image src={shopDetails.imageUrl} alt="shop image" fill />
      </div>
      <div className={styles.contents}>
        <div className={styles.information}>
          <div className={styles.pay}>
            <p>시급</p>
            <PayIncrease
              hourlyPay={noticeDetails.hourlyPay}
              originalHourlyPay={shopDetails.originalHourlyPay}
              closed={false}
            />
          </div>
          <div className={styles.time}>
            <ClockIcon />
            <p>
              {startDate}
              {workHour}
            </p>
          </div>
          <div className={styles.location}>
            <LocationIcon />
            <p>{shopDetails.address1}</p>
          </div>
          <div className={styles.description}>{shopDetails.description}</div>
        </div>
        <button
          className={styles.button}
          type="button"
          disabled={noticeDetails.closed}
          onClick={profileRequestModalOpen}
        >
          {!noticeDetails.closed ? '신청하기' : '신청불가'}
        </button>
        {isProfileModalOpen && (
          <InfoModal
            showModal={isProfileModalOpen}
            handleClose={profileRequestModalClose}
          >
            내 프로필을 먼저 등록해 주세요.
          </InfoModal>
        )}
      </div>
    </div>
  );
}
