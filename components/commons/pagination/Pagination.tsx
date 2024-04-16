import LeftButton from '@/public/images/leftButton.svg';
import LeftButtonOn from '@/public/images/leftButtonOn.svg';
import RightButton from '@/public/images/rightButton.svg';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import listMockData from '@/components/table/mock.data';
import styles from './Pagination.module.scss';

interface PaginationType {
  prevPage: number;
  prevPagenextPage: number;
}
const test: number[] = [1, 2, 3, 4, 5, 6, 7];
// const fetchProducts = async (page: number) => {
//   // 데이터 가져오기
// };
function Pagination(): PaginationType {
  // const router = useRouter();
  // const { page } = router.query;
  // const pages = Number(page);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState<number | null>(null);
  const data = listMockData.items;
  const postsPerPage = 5;
  // const prevPage = pages - 1 > 0 ? pages - 1 : 1;
  // const nextPage = pages + 1;

  const handlePageClick = (pageNumber: number) => {
    // router.push(`?page=${page}`, undefined, {
    //   shallow: true,
    //   scroll: true,
    // });
    setSelectedPage(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageBox}>
        {page === 1 ? (
          <LeftButton className={styles.icon} />
        ) : (
          <Link href={`?page=${prevPage}`}>
            <LeftButtonOn className={styles.icon} />
          </Link>
        )}
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
