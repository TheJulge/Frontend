import { StatusButton } from '@/components/table/StatusButton';
import { ItemType } from '@/components/table/applicationTypes';
import axios from 'axios';
import { useRouter } from 'next/router';
import Modal from '../Modal';
import TableModalTop from './TableModalTop';
import TableModalText from './TableModalText';
import styles from './TableModal.module.scss';

/**
 * tableModal 컴포넌트 입니다.
 * table에서 신청 목록을 클릭하면 나오는 모달 입니다.
 * table에서 item 객체를 prop으로 받고 레이아웃을 구성합니다.
 * @param {boolean} props.showModal 모달 상태 값
 * @param {function} props.handleClose 모달 닫는 함수
 * @param {object} props.items table item의 객체
 */
interface TableModalProps {
  showModal: boolean;
  handleClose: () => void;
  items: ItemType;
}
export default function TableModal({
  showModal,
  handleClose,
  items,
}: TableModalProps) {
  const { item } = items;
  const {
    item: { user },
  } = items;
  const router = useRouter();
  const { pathname, query } = router;
  // type = 사장인지, 알바생인지 전역변수로 관리
  const type = 'employer';

  // api보내고 바로 또 쿼리 날려서 데이터 재조회
  // 로그인 기능 구현 후 수정
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
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.tableModal}>
        <div>
          <TableModalTop
            name={user.item.name!}
            phone={user.item.phone!}
            handleClose={handleClose}
          />
          <TableModalText text={user.item.bio!} />
        </div>
        <div className={styles.tableModalButton}>
          <StatusButton
            status={item.status}
            onStatusChange={handleStatusChange}
            id={user.item.id}
            type={type}
          />
        </div>
      </div>
    </Modal>
  );
}
