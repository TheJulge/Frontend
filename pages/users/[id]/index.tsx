import EmployeeTable from '@/components/table/EmployeeTable';
import ProfileCard from '@/components/profilecard/ProfileCard';
import { NextPage } from 'next';
import { ApplicationPageProps } from '@/components/table/ssr/employee.ssr';
import EmptyTable from '@/components/table/emptytable/EmptyTable';
import styles from './MyPage.module.scss';

export { getServerSideProps } from '@/components/table/ssr/employee.ssr';

// eslint-disable-next-line react/function-component-definition
const Mypage: NextPage<ApplicationPageProps> = ({
  totalCount,
  itemCount,
  items,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.profileWrraper}>
          <div className={styles.profile}>
            <h2>내 프로필</h2>
            <ProfileCard />
          </div>
        </div>
        <div className={styles.tableWrraper}>
          <div className={styles.table}>
            <h2>신청 내역</h2>
            {items ? (
              <EmployeeTable
                totalCount={totalCount}
                itemCount={itemCount}
                items={items}
              />
            ) : (
              <EmptyTable
                text="아직 신청 내역이 없어요."
                buttonText="공고 보러가기"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
