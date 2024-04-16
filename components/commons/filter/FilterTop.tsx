import React from 'react';
import CloseIcon from '@/public/images/close.svg';
import styles from './FilterTop.module.scss';

export default function FilterTop({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
