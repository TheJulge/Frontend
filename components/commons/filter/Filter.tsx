import styles from './Filter.module.scss';
import FilterTop from './FilterTop';
import FilterLocation from './FilterLocation';
import FilterDate from './FilterDate';
import FilterButton from './FilterButton';

export default function Filter() {
  return (
    <div className={styles.filter}>
      <FilterTop />
      <FilterLocation />
      <FilterDate />
      <FilterButton />
    </div>
  );
}
