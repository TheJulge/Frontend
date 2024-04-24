import { useState } from 'react';
import Image from 'next/image';
import ClockIcon from '@/public/images/card/clockIcon.svg';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import { formatNoticeTime } from '@/utils/noticeDataFormetters';
import { NoticeBaseType } from '@/types/noticeTypes';
import PayIncrease from '../../card/payIncrease/PayIncrease';
import InfoModal from '../../modal/InfoModal';
import styles from './NoticeDetailsCard.module.scss';
import { getCookieValue } from '@/utils/getCookieDataFunctions';
import { postApplication } from '@/libs/application';

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

  const profileRequestModalClose = () => {
    setIsProfileModalOpen(false);
  };

  const handleClickToApply = () => {
    //1. 쿠키에서 isProfile 가져옴 ( true 로 가정)
    // const isProfile = getCookieValue('isProfile');
    const isProfile = true;
    //2.true면 요청 , false면 프로필 요청 모달 열기

    if (isProfile) {
      // const response = postApplication({ shopId:})
    } else {
      setIsProfileModalOpen(true);
    }
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
          onClick={handleClickToApply}
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
