import SignModal from '@/components/sign/SignModal';
import { postSignUp } from '@/libs/user';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface CreateAuthProps {
  email: string;
  password: string;
  type: 'employee' | 'employer';
}

export default function useSignUp() {
  const [status, setStatus] = useState<string>('idle');
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const router = useRouter();

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    router.push('/signin');
  };
  const handleErrorModalClose = () => {
    setShowErrorModal(false);
  };

  const signUp = async (authData: CreateAuthProps) => {
    setStatus('fetching');
    try {
      await postSignUp(authData);
      setStatus('success');
      setShowSuccessModal(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          setStatus('error');
          setShowErrorModal(true);
        }
      }
    }
  };

  const successModal = showSuccessModal && (
    <SignModal
      showModal={showSuccessModal}
      handleClose={handleSuccessModalClose}
    >
      가입이 완료되었습니다!
    </SignModal>
  );

  const errorModal = showErrorModal && (
    <SignModal showModal={showErrorModal} handleClose={handleErrorModalClose}>
      이미 사용중인 이메일입니다.
    </SignModal>
  );

  return { status, successModal, errorModal, signUp };
}
