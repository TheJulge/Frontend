import styles from './FilterTop.module.scss';
import CloseIcon from '@/public/images/close.svg';

export default function FilterTop() {
  return (
    <div className={styles.filterTop}>
      <h3>상세 필터</h3>
      <button type="button" aria-label="닫기">
        <CloseIcon viewBox="0 0 24 24" />
      </button>
    </div>
  );
}
