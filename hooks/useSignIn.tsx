import SignModal from '@/components/sign/SignModal';
import axios from 'axios';
import { postSignIn } from '@/libs/user';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface AuthProps {
  email: string;
  password: string;
}

export default function useSignIn() {
  const [status, setStatus] = useState<string>('idle');
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  const handleClose = () => {
    setShowModal(false);
  };

  const signIn = async (authData: AuthProps) => {
    setStatus('fetching');
    try {
      const response = await postSignIn(authData);
      setStatus('success');
      document.cookie = `accessToken=${response.data.item.token}; secure`;
      document.cookie = `userId=${response.data.item.user.item.id}; secure`;
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setStatus('error');
          setShowModal(true);
        }
      }
    }
  };

  const errorModal = showModal && (
    <SignModal showModal={showModal} handleClose={handleClose}>
      비밀번호가 일치하지 않습니다.
    </SignModal>
  );

  return { status, errorModal, signIn };
}
