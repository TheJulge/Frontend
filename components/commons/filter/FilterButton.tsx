import styles from './FilterButton.module.scss';

export default function FilterButton() {
  return (
    <div className={styles.filterButton}>
      <button type="button">초기화</button>
      <button type="button">적용하기</button>
    </div>
  );
}
