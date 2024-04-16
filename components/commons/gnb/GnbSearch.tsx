import SearchIcon from '@/public/images/gnb/search.svg';
import styles from './GnbSearch.module.scss';

export default function GnbSearch() {
  return (
    <form className={styles.searchForm}>
      <label htmlFor="search" aria-label="검색">
        <SearchIcon viewBox="0 0 20 20" />
      </label>
      <input id="search" type="search" placeholder="가게 이름으로 찾아보세요" />
    </form>
  );
}
