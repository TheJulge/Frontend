import { useState } from 'react';
import { SingleNoticeType } from '@/types/noticeTypes';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import AdditionalFeat from './AdditionalFeat';
import Explanation from './Explanation';
import NoticeDetailsCard from './detailCard/NoticeDetailsCard';
import styles from './NoticeDetailsContainer.module.scss';

interface DetailsProp {
  shopId: string;
  noticeId: string;
  details: SingleNoticeType;
}
export default function NoticeDetailsContainer({
  shopId,
  noticeId,
  details,
}: DetailsProp) {
  const [showModal, setShowModal] = useState(false);
  const noticeDetails = details.item;
  const shopDetails = details.item.shop.item;

  const handleFeat = () => {
    setShowModal(!showModal);
  };
  const shopAddress = `${shopDetails.address1} ${shopDetails.name}`;
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <span>식당</span>
          <h1>{shopDetails.name}</h1>
        </div>
        <div className={styles.moreButtonWrap}>
          <button
            className={styles.moreButton}
            type="button"
            onClick={handleFeat}
          >
            {showModal ? (
              <ClearOutlinedIcon
                className={styles.cancel}
                aria-label="추가 기능 닫기"
              />
            ) : (
              <MoreHorizOutlinedIcon aria-label="추가 기능 보기" />
            )}
          </button>
          {showModal && (
            <AdditionalFeat
              shopName={shopDetails.name}
              shopAddress={shopAddress}
              hourlyPay={noticeDetails.hourlyPay}
              workhour={noticeDetails.workhour}
            />
          )}
        </div>
      </div>
      <NoticeDetailsCard
        shopId={shopId}
        noticeId={noticeId}
        noticeDetails={noticeDetails}
      />
      <Explanation description={noticeDetails.description} />
    </main>
  );
}
