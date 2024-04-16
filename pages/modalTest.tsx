// import InfoModal from '@/components/commons/modal/InfoModal';
import ChooseModal from '@/components/commons/modal/ChooseModal';
import { useState } from 'react';

export default function modalTest() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    console.log(showModal);
  };
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <button onClick={handleClick}>modal</button>
      {showModal && (
        <ChooseModal
          showModal={true}
          handleNo={handleClose}
          handleYes={() => console.log('yes!!!')}
        >
          신청을 거절하시겠어요?
        </ChooseModal>
      )}
    </>
  );
}

{
  /* <InfoModal showModal={showModal} handleClose={handleClose}>
          가게 정보를 등록해주세요
        </InfoModal> */
}
