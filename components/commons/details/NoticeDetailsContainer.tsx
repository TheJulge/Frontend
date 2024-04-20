import { CardNoticeType } from '@/types/noticeTypes';
import NoticeDetailsCard from './detailCard/NoticeDetailsCard';
import styles from './NoticeDetailsContainer.module.scss';

interface DetailsProp {
  details: CardNoticeType;
}
export default function NoticeDetailsContainer({ details }: DetailsProp) {
  const noticeDetails = details.item;
  const shopDetails = details.item.shop.item;
  return (
    <main className={styles.container}>
      <h1>
        <span>식당</span>
        <br />
        {shopDetails.name}
      </h1>
      <NoticeDetailsCard noticeDetails={noticeDetails} />
    </main>
  );
}
