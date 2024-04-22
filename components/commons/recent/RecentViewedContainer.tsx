import React, { useEffect, useState } from 'react';
import { getNoticesFromLocalStorage } from '@/utils/watchedListStoreFunctions';
import { SingleNoticeType } from '@/types/noticeTypes';
import Card from '../card/Card';
import styles from './RecentViewedContainer.module.scss';

export default function RecentViewedContainer() {
  const [notices, setNotices] = useState<SingleNoticeType[] | null>(null);

  useEffect(() => {
    const storageData = getNoticesFromLocalStorage();
    setNotices(storageData);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.recentContainer}>
        <h2>최근에 본 공고</h2>
        <div className={styles.cards}>
          {notices
            ? notices.map(notice => (
                <React.Fragment key={notice.item.id}>
                  <Card noticeInfo={notice} />
                </React.Fragment>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
