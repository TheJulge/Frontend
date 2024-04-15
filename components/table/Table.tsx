import React from 'react';
import styles from '@/components/table/Table.module.scss';
// eslint-disable-next-line import/extensions
import listMockData from '@/components/table/mock.data';
import { StatusButton } from '@/components/table/StatusButton.tsx';
import Pagination from '@/components/commons/pagination/Pagination.tsx';
// import Pagination from '@/components/commons/pagination/Pagination.tsx';

function Table() {
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
            <div className={`${styles.gridCell} ${styles.mobileHide}`}>
              {list.item.startsAt}
            </div>
            <div className={`${styles.gridCell} ${styles.mobileHide}`}>
              {list.item.hourlyPay}원
            </div>
            <div className={`${styles.gridCell} `}>
              <StatusButton status={list.item.status as any} />
            </div>
          </React.Fragment>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Table;
