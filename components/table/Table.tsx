import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/components/table/Table.module.scss';
// eslint-disable-next-line import/extensions
import listMockData from '@/components/table/mock.data';
import { StatusButton } from '@/components/table/StatusButton';
// import Pagination from '@/components/commons/pagination/Pagination.tsx';

function Table() {
  const router = useRouter();
  const { page } = router.query;
  console.log('q', page);
  const [status, setStatus] = useState('canceled');
  const handleStatusChange = newStatus => {
    setStatus(newStatus);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.gridHeader}>가게</div>
        <div className={`${styles.gridHeader} ${styles.mobileHide}`}>일자</div>
        <div className={`${styles.gridHeader} ${styles.mobileHide}`}>시급</div>
        <div className={`${styles.gridHeader}`}>상태</div>

        {listMockData.items.map(list => (
          <React.Fragment key={list.item.id}>
            <div className={`${styles.gridCell} ${styles.gridCellFirst}`}>
              {list.item.name}
            </div>
            <div className={`${styles.gridCell}`}>{list.item.startsAt}</div>
            <div className={`${styles.gridCell} `}>{list.item.hourlyPay}원</div>
            <div className={`${styles.gridCell} `}>
              <StatusButton
                // status={list.item.status as any}
                status={status}
                onStatusChange={handleStatusChange}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      {/* <Pagination /> */}
    </div>
  );
}

export default Table;
