import styles from '@/components/share/ShareModal.module.scss';
import React from 'react';
import Modal from '@/components/commons/modal/Modal';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/utils/constants/SHARE';
import ShareButtons from './ShareButtons';

/**
 *
 * @param {Object} props
 * @param {React.Node} props.children 모달 description
 * @param {boolean} props.showModal 모달 보임 유뮤 결정
 * @param {Function} props.handleClose  모달 닫을 때 실행할 함수
 */

interface ShareModalProps {
  shopName: string;
  showModal: boolean;
  handleClose: () => void;
}
export default function ShareModal({
  shopName,
  showModal,
  handleClose,
}: ShareModalProps) {
  const router = useRouter();
  const { query } = router;
  const { id, noticeId } = query;
  const currentUrl = `${BASE_URL}/shops/${id}/notices/${noticeId}/alba`;

  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.modalInner}>
        <div>공유하기</div>
        <ShareButtons url={currentUrl} shopName={shopName} />
        <button
          className={styles.emptyButton}
          type="button"
          onClick={handleClose}
        >
          확인
        </button>
      </div>
    </Modal>
  );
}
