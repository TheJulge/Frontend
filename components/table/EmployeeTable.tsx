import React from 'react';
import { StatusButton } from '@/components/table/StatusButton';
import Pagination from '@/components/commons/pagination/Pagination';
import { ApplicationPageProps } from '@/components/table/ssr/employee.ssr';
import styles from './Table.module.scss';

interface TableProps extends ApplicationPageProps {}

function EmployeeTable({ items, totalCount, itemCount }: TableProps) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.gridHeader}>
          <h6>가게</h6>
        </div>
        <div className={`${styles.gridHeader} ${styles.mobileHide}`}>
          <h6>일자</h6>
        </div>
        <div className={`${styles.gridHeader} ${styles.mobileHide}`}>
          <h6>시급</h6>
        </div>
        <div className={`${styles.gridHeader}`}>
          <h6>상태</h6>
        </div>

        {items.map(list => (
          <React.Fragment key={list.item.id}>
            <div className={`${styles.gridCell} ${styles.gridCellFirst}`}>
              <p>{list.item.shop.item.name}</p>
            </div>
            <div className={`${styles.gridCell}`}>
              <p>{list.item.notice.item.startsAt}</p>
            </div>
            <div className={`${styles.gridCell} `}>
              <p>{list.item.notice.item.hourlyPay}</p>
            </div>
            <div className={`${styles.gridCell} `}>
              <StatusButton
                id={list.item.id}
                status={list.item.status}
                type="employee"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <Pagination itemCount={itemCount} totalCount={totalCount} />
    </div>
  );
}

export default EmployeeTable;
