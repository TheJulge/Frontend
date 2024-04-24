import { FormEvent, useRef } from 'react';
import { useRouter } from 'next/router';
import SearchIcon from '@/public/images/gnb/search.svg';
import styles from './GnbSearch.module.scss';

export default function GnbSearch() {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current!.value) {
      router.push(`?keyword=${ref.current!.value}`);
      ref.current!.value = '';
    }
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <label htmlFor="search" aria-label="검색">
        <SearchIcon viewBox="0 0 20 20" />
      </label>
      <input
        ref={ref}
        id="search"
        type="search"
        placeholder="가게 이름으로 찾아보세요"
      />
    </form>
  );
}
