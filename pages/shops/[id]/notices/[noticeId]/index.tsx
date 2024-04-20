import { NextPage } from 'next';
import { ApplicationPageProps } from '@/components/table/ssr/employer.ssr';
import EmployerTable from '@/components/table/EmployerTable';
import EmptyTable from '@/components/table/emptytable/EmptyTable';
import styles from './MyNoticeDetailPage.module.scss';

// eslint-disable-next-line react/function-component-definition
const MyNoticeDetailPage: NextPage<ApplicationPageProps> = ({
  totalCount,
  itemCount,
  items,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.profileWrraper}>
          <div className={styles.profile}>
            <p>식당</p>
            <h2>도토리 식당</h2>
          </div>
        </div>
        <div className={styles.tableWrraper}>
          <div className={styles.table}>
            <h2>신청자 목록</h2>
            {items ? (
              <EmployerTable
                totalCount={totalCount}
                itemCount={itemCount}
                items={items}
              />
            ) : (
              <EmptyTable text="신청자가 없어요." buttonText="공고 등록하기" />
            )}
          </div>
          <EmptyTable text="신청자가 없어요." buttonText="공고 등록하기" />
        </div>
      </div>
    </div>
  );
};

export default MyNoticeDetailPage;
