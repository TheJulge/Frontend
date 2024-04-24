import { useState } from 'react';
import Image from 'next/image';
import ClockIcon from '@/public/images/card/clockIcon.svg';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import { formatNoticeTime } from '@/utils/noticeDataFormetters';
import { NoticeBaseType } from '@/types/noticeTypes';
import PayIncrease from '../../card/payIncrease/PayIncrease';
import InfoModal from '../../modal/InfoModal';
import styles from './NoticeDetailsCard.module.scss';
import { postApplication } from '@/libs/application';
import ChooseModal from '../../modal/ChooseModal';

interface NoticeDetailsCardProp {
  shopId: string;
  noticeId: string;
  noticeDetails: NoticeBaseType;
}

export default function NoticeDetailsCard({
  shopId,
  noticeId,
  noticeDetails,
}: NoticeDetailsCardProp) {
  const [isApplied, setIsApplied] = useState(false);
  const [isChooseModalOpen, setIsChooseModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const shopDetails = noticeDetails.shop.item;
  const [startDate, workHour] = formatNoticeTime(
    noticeDetails.startsAt,
    noticeDetails.workhour,
  );

  const handleClickToApply = () => {
    //1. 쿠키에서 isProfile 가져옴 ( true 로 가정)
    // const isProfile = getCookieValue('isProfile');
    const isProfile = true;
    //2.true면 요청 , false면 프로필 요청 모달 열기

    if (isProfile) {
      //작성해야할 부분 (신청 로직-> 신청 완료되었다고 가정)
      setIsApplied(true);
    } else {
      setIsProfileModalOpen(true);
    }
  };

  const handleClickToCancelApply = () => {
    //신청취소로직 작성

    setIsApplied(false);
    setIsChooseModalOpen(false);
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
        {isApplied ? (
          <button
            className={styles.cancelButton}
            type="button"
            onClick={() => setIsChooseModalOpen(true)}
          >
            신청취소
          </button>
        ) : (
          <button
            className={styles.button}
            type="button"
            disabled={noticeDetails.closed}
            onClick={handleClickToApply}
          >
            {!noticeDetails.closed ? '신청하기' : '신청불가'}
          </button>
        )}

        {isProfileModalOpen && (
          <InfoModal
            showModal={isProfileModalOpen}
            handleClose={() => setIsProfileModalOpen(false)}
          >
            내 프로필을 먼저 등록해 주세요.
          </InfoModal>
        )}
        {isChooseModalOpen && (
          <ChooseModal
            showModal={isChooseModalOpen}
            handleNo={() => setIsChooseModalOpen(false)}
            handleYes={handleClickToCancelApply}
          >
            신청을 취소하시겠어요?
          </ChooseModal>
        )}
      </div>
    </div>
  );
}
