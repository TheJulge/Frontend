import CompletionModal from '@/components/commons/modal/completionModal/CompletionModal';
import { postSignUp } from '@/libs/user';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function useGithubSignUp() {
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
    router.push('/signin');
  };

  const githubSignUp = async (authData: any) => {
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

  const successGithubModal = showSuccessModal && (
    <CompletionModal
      showModal={showSuccessModal}
      handleClose={handleSuccessModalClose}
    >
      가입이 완료되었습니다!
    </CompletionModal>
  );

  const errorGithubModal = showErrorModal && (
    <CompletionModal
      showModal={showErrorModal}
      handleClose={handleErrorModalClose}
    >
      일반 로그인 계정입니다. 이메일과 비밀번호로 로그인해주세요.
    </CompletionModal>
  );

  return { status, successGithubModal, errorGithubModal, githubSignUp };
}
