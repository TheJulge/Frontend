import { getNoticesFromLocalStorage } from '@/utils/watchedListStoreFunctions';
import styles from './RecentViewedContainer.module.scss';
import Card from '../card/Card';

export default function RecentViewedContainer() {
  let noticesArray = getNoticesFromLocalStorage();

  return (
    <section className={styles.container}>
      <div className={styles.recentContainer}>
        {noticesArray
          ? noticesArray.map(notice => <Card noticeInfo={notice} />)
          : null}
      </div>
    </section>
  );
}
