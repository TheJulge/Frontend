import PhoneIcon from '@/public/images/profilecard/phone.svg';
import PointerIcon from '@/public/images/profilecard/pointer.svg';
import { useRef, useState, useEffect } from 'react';
import MoreIcon from '@/public/images/profilecard/downarrow.svg';

import styles from './ProfileCard.module.scss';

function ProfileCard() {
  const [cardOpen, setCardOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [bioHeight, setBioHeight] = useState('150px');

  const toggleBioHeight = () => {
    if (bioHeight === '150px') {
      setBioHeight(`${divRef.current?.scrollHeight}px`);
    } else {
      setBioHeight('150px');
    }
  };
  const handleResize = () => {
    if (divRef?.current) {
      const isOpen = divRef.current?.scrollHeight >= 150;
      setCardOpen(isOpen);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    // lint error
    return () => null;
  }, [divRef.current?.clientHeight]);

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
        <div
          onResize={() => handleResize()}
          ref={divRef}
          className={styles.bio}
          style={{ maxHeight: bioHeight }}
        >
          <p>
            열심히 일 하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다열심히 일
            하겠습니다(소개데이터)열심히 일 하겠습니다
          </p>
          <span style={{ display: bioHeight === '150px' ? 'block' : 'none' }} />
        </div>
        {cardOpen && (
          <div
            style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            <MoreIcon
              className={styles.moreIcon}
              onClick={() => toggleBioHeight()}
              width="30"
              height="30"
              style={{
                marginTop: '1rem',
                transform:
                  bioHeight === '150px' ? 'rotateX(0deg)' : 'rotateX(180deg)',
              }}
            />
          </div>
        )}

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
