import styles from './Filter.module.scss';
import FilterTop from './FilterTop';
import FilterLocation from './FilterLocation';

export default function Filter() {
  return (
    <div className={styles.filter}>
      <FilterTop />
      <FilterLocation />
    </div>
  );
}
