import Gnb from '@/components/commons/gnb/Gnb';
import EmployeeTable from '@/components/table/EmployeeTable';
import ProfileCard from '@/components/profilecard/ProfileCard';
import styles from './MyPage.module.scss';

function Mypage() {
  return (
    <div className={styles.container}>
      <Gnb />
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <h2>내 프로필</h2>
          <ProfileCard />
        </div>
        <div className={styles.table}>
          <h2>신청 내역</h2>
          {/* <EmployeeTable totalCount={} itemCount={} /> */}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
