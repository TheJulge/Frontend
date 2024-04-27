import Image from 'next/image';
import { useState } from 'react';
import { authInstance } from '@/libs';
import ClockIcon from '@/public/images/card/clockIcon.svg';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import { formatNoticeTime } from '@/utils/noticeDataFormetters';
import findCookieValue from '@/utils/findCookieValue';
import PayIncrease from '../../card/payIncrease/PayIncrease';
import InfoModal from '../../modal/InfoModal';
import ChooseModal from '../../modal/ChooseModal';
import { NoticeBaseType } from '@/types/noticeTypes';
import styles from './NoticeDetailsCard.module.scss';

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
  const [infoModalText, setInfoModalText] = useState('');
  const [isChooseModalOpen, setIsChooseModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const shopDetails = noticeDetails.shop.item;
  const [startDate, workHour] = formatNoticeTime(
    noticeDetails.startsAt,
    noticeDetails.workhour,
  );

  const handleClickToApply = async () => {
    const cookies = document.cookie;

    //비로그인 상태이면
    if (!cookies) {
      setInfoModalText('로그인이 필요한 서비스 입니다.');
      setIsInfoModalOpen(true);
      return;
    } else {
      const isEmployer = findCookieValue(cookies, 'type') === 'employer';
      const isProfile = findCookieValue(cookies, 'isProfile') === 'true';

      //사장님인 경우
      if (isEmployer) {
        setInfoModalText('사장님은 신청할수 없어요.');
        setIsInfoModalOpen(true);
        return;
      }
      //프로필 미등록 상태
      if (!isProfile) {
        setInfoModalText('내 프로필을 먼저 등록해 주세요.');
        setIsInfoModalOpen(true);
        return;
      }
      //모두 충족 -> post 요청
      try {
        const applyResponse = await authInstance.post(
          `/shops/${shopId}/notices/${noticeId}/applications`,
        );
        if (applyResponse.status === 201) {
          setApplicationId(applyResponse.data.item.id);
          setIsApplied(true);
        }
      } catch (err) {
        alert('지원에 실패했습니다.');
      }
    }
  };

  const handleClickToCancelApply = async () => {
    //신청취소
    try {
      const status = 'canceled';
      const cancelResponse = await authInstance(
        `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
        {
          method: 'PUT',
          data: { status },
        },
      );
      if (cancelResponse.status === 200) {
        setIsApplied(false);
        setIsChooseModalOpen(false);
      }
    } catch (err) {
      alert('지원 취소에 실패했습니다.');
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

        {isInfoModalOpen && (
          <InfoModal
            showModal={isInfoModalOpen}
            handleClose={() => setIsInfoModalOpen(false)}
          >
            {infoModalText}
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
