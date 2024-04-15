import LeftButton from '@/public/images/leftButton.svg';
import RightButton from '@/public/images/rightButton.svg';
import { useState } from 'react';
import styles from './Pagination.module.scss';

// interface PaginationType {}
const test: number[] = [1, 2, 3, 4, 5, 6, 7];
function Pagination() {
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  const handlePageClick = (pageNumber: number) => {
    setSelectedPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageBox}>
        <LeftButton className={styles.icon} />
        <div className={styles.pageNumberBox}>
          {test.map(num => (
            <div
              className={`${styles.pageNumber} ${
                num === selectedPage ? styles.selected : ''
              }`}
              key={num}
              onClick={() => handlePageClick(num)}
            >
              {num}
            </div>
          ))}
        </div>
        <RightButton className={styles.icon} />
      </div>
    </div>
  );
}

export default Pagination;
