import styles from '@/components/share/ShareOpenButton.module.scss';
import { useState } from 'react';
import ShareModal from '@/components/share/ShareModal';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

interface ShareOpenButtonProps {
  shopName: string;
}

export default function ShareOpenButton({ shopName }: ShareOpenButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className={styles.shareButton}
        onClick={handleOpen}
        type="button"
        aria-label="공유하기"
      >
        <ShareOutlinedIcon />
      </button>
      {showModal && (
        <ShareModal
          showModal={showModal}
          handleClose={handleClose}
          shopName={shopName}
        />
      )}
    </>
  );
}
