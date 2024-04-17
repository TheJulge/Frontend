import React from 'react';
import CloseIcon from '@/public/images/close.svg';
import styles from './FilterTop.module.scss';

/**
 * @param {function} props.setIsOpen 모달 보임 유무 결정
 */

interface TopProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilterTop({ setIsOpen }: TopProps) {
  // 닫기 버튼 클릭시 filter가 사라집니다.
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.filterTop}>
      <h3>상세 필터</h3>
      <button type="button" onClick={handleClose} aria-label="닫기">
        <CloseIcon viewBox="0 0 24 24" />
      </button>
    </div>
  );
}
