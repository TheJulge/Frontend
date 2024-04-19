import PhoneIcon from '@/public/images/profilecard/phone.svg';
import PointerIcon from '@/public/images/profilecard/pointer.svg';

import styles from './ProfileCard.module.scss';

function ProfileCard() {
  return (
    <div className={styles.container}>
      <div className={styles.informationBox}>
        <p className={styles.nameTitle}>이름</p>
        <div className={styles.nameData}>이름데이터</div>
        <div className={`${styles.phoneBox} ${styles.detailBox}`}>
          <PhoneIcon />
          <p className={styles.phone}>010-1234-4321</p>
        </div>
        <div className={`${styles.regionBox} ${styles.detailBox}`}>
          <PointerIcon />
          <p className={styles.region}>선호 지역: 서울시 도봉구</p>
        </div>
        <p className={styles.bio}>
          열심히 일 하겠습니다(소개데이터)열심히 일 하겠습니다(소개데이터)열심히
          일 하겠습니다(소개데이터)열심히 일 하겠습니다(소개데이터)열심히 일
          하겠습니다(소개데이터)열심히 일 하겠습니다(소개데이터)열심히 일
          하겠습니다(소개데이터)하겠습니다(소개데이터)열심히 일
          하겠습니다(소개데이터)열심히 일
          하겠습니다(소개데이터)하겠습니다(소개데이터)열심히 일
          하겠습니다(소개데이터)열심히 일
          하겠습니다(소개데이터)하겠습니다(소개데이터)열심히 일
          하겠습니다(소개데이터)열심히 일
          하겠습니다(소개데이터)하겠습니다(소개데이터)열심히 일
          하겠습니다(소개데이터)열심히 일 하겠습니다(소개데이터)
        </p>
        <div className={styles.buttonBox}>
          <button className={styles.button} type="button">
            편집하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
