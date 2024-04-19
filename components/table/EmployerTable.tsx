import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/components/table/Table.module.scss';
import { StatusButton } from '@/components/table/StatusButton';
import Pagination from '@/components/commons/pagination/Pagination';
import { ApplicationPageProps } from '@/components/table/ssr/employer.ssr';
import axios from 'axios';

/**
 * @param function EmployerTable 고용인 table컴포넌트구현
 * @param items   받아오는 데이터
 * @param {number}itemCount 보여지는 리스트 개수
 * @param {number}totalCount 총 데이터수
 * @function handleStatusChange 승인 | 거절 버튼클릭시 상태 변화를 api로 PUT 리퀘스트 보내고 replace 시키는 함수
 */

interface TableProps extends ApplicationPageProps {}

function EmployerTable({ items, itemCount, totalCount }: TableProps) {
  const router = useRouter();
  const { pathname, query } = router;

  // api보내고 바로 또 쿼리 날려서 데이터 재조회
  const handleStatusChange = async (
    status: 'pending' | 'accepted' | 'rejected' | 'canceled',
    id: string,
  ) => {
    const teamId = '4-17';
    const shopId = '42a97127-18ef-4514-9211-e4d9c45e2761';
    const noticeId = 'cdb13a7a-dc72-4d5e-b60d-238dc97ccd19';
    const noticeListUrl = `https://bootcamp-api.codeit.kr/api/${teamId}/the-julge/shops/${shopId}/notices/${noticeId}/applications/${id}`;
    try {
      if (window === undefined) {
        return;
      }
      // eslint-disable-next-line no-restricted-globals
      const deleteCheck = confirm('정말 삭세하시겠습니까?');
      if (status === 'rejected' && deleteCheck) {
        const fetch = await axios(noticeListUrl, {
          method: 'PUT',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3NDUxOTVkOC05ZjI5LTQ2ZDQtYjAzNy1iZmI4ODA3ODU5NTEiLCJpYXQiOjE3MTMzMzI3ODR9.72oFn8s8qwwGSVtVlhrdOv3Ia_jZVQx2gkM2UF2_8S8',
          },
          data: {
            status,
          },
        });
        if (fetch.status === 200) {
          await router.replace(
            {
              pathname,
              query: { ...query },
            },
            undefined,
            {
              shallow: false, // getServerSideProps는 같은 주소(pathname)일 경우 한번만 호출되서 이 옵션을 false로 바꿔서 호출되게 변경
              scroll: true,
            },
          );
        }
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.gridContainer}>
        <div className={`${styles.gridHeader} ${styles.gridCellFirst}`}>
          <h6>신청자</h6>
        </div>
        <div className={`${styles.gridHeader}`}>
          <h6>소개</h6>
        </div>
        <div className={`${styles.gridHeader}`}>
          <h6>전화번호</h6>
        </div>
        <div className={`${styles.gridHeader}`}>
          <h6>상태</h6>
        </div>

        {items.map(list => {
          const { item } = list;
          const { user } = item;
          return (
            <React.Fragment key={item.id}>
              <div className={`${styles.gridCell} ${styles.gridCellFirst}`}>
                <p>{user.item?.name ?? '이름없음'}</p>
              </div>
              <div
                tabIndex={0}
                className={`${styles.gridCell} ${styles.clickDiv}`}
              >
                <p>{user.item.bio}</p>
              </div>
              <div className={`${styles.gridCell} `}>
                <p>{user.item.phone}</p>
              </div>
              <div className={`${styles.gridCell} ${styles.lastCell}`}>
                <StatusButton
                  id={item.id}
                  status={item.status}
                  onStatusChange={handleStatusChange}
                  type="employer"
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <Pagination itemCount={itemCount} totalCount={totalCount} />
    </div>
  );
}

export default EmployerTable;
