import EmptyTable from '@/components/table/emptytable/EmptyTable';
import styles from './ProfileEmptypage.module.scss';

function ProfileEmptypage() {
  return (
    <main>
      <div>
        <div className={styles.container}>
          <div className={styles.Box}>
            <h2>내 프로필</h2>
            <EmptyTable
              link="/profile"
              buttonText="내 프로필 등록하기"
              text="내 프로필을 등록하고 원하는 가게에 지원해 보세요."
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileEmptypage;
