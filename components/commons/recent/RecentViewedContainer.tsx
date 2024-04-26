import React, { useEffect, useState } from 'react';
import { getNoticesFromLocalStorage } from '@/utils/watchedListFunctions';
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
            ? notices.map(item => {
                const notice = item.item;
                const shop = item.item.shop.item;
                return (
                  <React.Fragment key={notice.id}>
                    <Card
                      hourlyPay={notice.hourlyPay}
                      startsAt={notice.startsAt}
                      workhour={notice.workhour}
                      closed={notice.closed}
                      shopName={shop.name}
                      address={shop.address1}
                      imageUrl={shop.imageUrl}
                      originalHourlyPay={shop.originalHourlyPay}
                      links={item.links}
                    />
                  </React.Fragment>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
}
