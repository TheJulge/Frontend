import NotificationModal from '@/components/commons/modal/notification/NotificationModal';
import React, { useState } from 'react';

export default function notiTest() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    console.log(showModal);
  };
  return (
    <NotificationModal
      showModal={showModal}
      handleClose={handleClose}
      count={3}
    />
  );
}
