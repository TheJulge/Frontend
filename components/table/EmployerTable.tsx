import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/components/table/Table.module.scss';
import { StatusButton } from '@/components/table/StatusButton';
import Pagination from '@/components/commons/pagination/Pagination';
import { ApplicationPageProps } from '@/ssr/noticeDetailSsr';
import { instance } from '@/libs';
import { API } from '@/utils/constants/API';
// import Testmodal from '../commons/modal/TestModal';
import { Application } from './applicationTypes';
import ChooseModal from '../commons/modal/ChooseModal';

/**
 * @param function EmployerTable 고용인 table컴포넌트구현
 * @param items   받아오는 데이터
 * @param {number}itemCount 보여지는 리스트 개수
 * @param {number}totalCount 총 데이터수
 * @function handleStatusChange 승인 | 거절 버튼클릭시 상태 변화를 api로 PUT 리퀘스트 보내고 replace 시키는 함수
 */

interface TableProps extends ApplicationPageProps {}
interface SelectProps {
  item: Application | null;
  type: boolean; // false = reject, true = agree
}

function EmployerTable({ items, itemCount, totalCount }: TableProps) {
  const router = useRouter();
  const { pathname, query } = router;

  const [selectItem, setSelectItem] = useState<SelectProps>({
    item: null,
    type: false,
  });

  const handleModalOpenWithSelectApplicaiton = (
    select: Application,
    type: boolean,
  ) => {
    const updateItem = { item: { ...select }, type };
    setSelectItem({ ...updateItem });
  };

  const handleInitItemAndModalClose = () => {
    const updateItem = { item: null, type: false };
    setSelectItem({ ...updateItem });
  };

  const handleStatusChange = async (type: boolean, id: string) => {
    const status = type ? 'accepted' : 'rejected';
    const shopId = query.id as string;
    const noticeId = query.noticeId as string;
    // 마라봉 2번 ,토큰형식 바꿀곳
    const employerToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNmRkODA2ZC1mZTNkLTQ1NTYtOTI1YS03Y2JjYWI0MzZiMDQiLCJpYXQiOjE3MTMzMzI3NTV9.XCtgxs6TvkP8zdkleZjgXHLehvNf4hqJgYkAlPsYPLk';

    const noticeListUrl = `${API.shop}/${shopId}${API.notice}/${noticeId}${API.application}/${id}`;

    try {
      if (window === undefined) {
        return;
      }
      // api보내고 바로 또 쿼리 날려서 데이터 재조회
      const fetch = await instance(noticeListUrl, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${employerToken}`,
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
    } catch (e) {
      console.log('error', e);
    } finally {
      handleInitItemAndModalClose();
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
                  item={item}
                  status={item.status}
                  onUpdateItemAndModalOpen={
                    handleModalOpenWithSelectApplicaiton
                  }
                  type="employer"
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <Pagination itemCount={itemCount} totalCount={totalCount} />
      {/* {selectItem && (
        <Testmodal
          showModal={!!selectItem}
          applicaitonItem={selectItem}
          handleClose={() => handleModalClose()}
          handleStatusChange={handleStatusChange}
        />
      )} */}
      {selectItem?.item?.id && (
        <ChooseModal
          showModal={!!selectItem.item}
          handleNo={() => handleInitItemAndModalClose()}
          handleYes={() =>
            handleStatusChange(selectItem.type, selectItem?.item?.id as string)
          }
        >
          {selectItem.type
            ? '신청을 승인하시겠습니까?'
            : '신청을 거절하시겠습니까?'}
        </ChooseModal>
      )}
    </div>
  );
}

export default EmployerTable;
