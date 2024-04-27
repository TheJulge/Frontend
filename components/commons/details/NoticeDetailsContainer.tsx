import { SingleNoticeType } from '@/types/noticeTypes';
import ShareOpenButton from '@/components/share/ShareOpenButton';
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
  const noticeDetails = details.item;
  const shopDetails = details.item.shop.item;

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h1>
          <span>식당</span>
          <br />
          {shopDetails.name}
        </h1>
        <ul>
          <li>
            <ShareOpenButton shopName={shopDetails.name} />
          </li>
        </ul>
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
