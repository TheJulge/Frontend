import { SingleNoticeType } from '@/types/noticeTypes';
import NoticeDetailsCard from './detailCard/NoticeDetailsCard';
import styles from './NoticeDetailsContainer.module.scss';
import Explanation from './Explanation';

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
  const noticeDetails = details.item;
  const shopDetails = details.item.shop.item;

  return (
    <main className={styles.container}>
      <h1>
        <span>식당</span>
        <br />
        {shopDetails.name}
      </h1>
      <NoticeDetailsCard
        shopId={shopId}
        noticeId={noticeId}
        noticeDetails={noticeDetails}
      />
      <Explanation description={noticeDetails.description} />
    </main>
  );
}
