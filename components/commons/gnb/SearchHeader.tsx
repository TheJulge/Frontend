import SearchIcon from '@/public/images/search.svg';
import styles from './SearchHeader.module.scss';

export default function SearchHeader() {
  return (
    <form className={styles.searchForm}>
      <label htmlFor="search">
        <SearchIcon alt="검색" />
      </label>
      <input id="search" type="search" placeholder="가게 이름으로 찾아보세요" />
    </form>
  );
}
