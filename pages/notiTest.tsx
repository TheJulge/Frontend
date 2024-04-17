import NotificationModal from '@/components/commons/modal/notification/NotificationModal';
import React, { useState } from 'react';
import { data } from '@/datas/noticeData';

export default function notiTest() {
  const [showModal, setShowModal] = useState(false);
  const modalData = data.items;
  const { count } = data;
  const handleClose = () => {
    setShowModal(false);
  };
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <button onClick={handleClick} type="button">
        modal
      </button>
      {showModal && (
        <NotificationModal
          showModal={showModal}
          handleClose={handleClose}
          count={count}
          notiDatas={modalData}
        />
      )}
    </>
  );
}
