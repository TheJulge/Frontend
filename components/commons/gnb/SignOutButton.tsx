import { nextInstance } from '@/libs';
import { useRouter } from 'next/router';
import styles from './SignOutButton.module.scss';

export default function SignOutButton() {
  const router = useRouter();
  const handleSignOutClick = async () => {
    nextInstance.delete('/api/cookies');
    router.push('/');
    window.location.reload();
  };

  return (
    <button
      className={styles.signOutButton}
      type="button"
      onClick={handleSignOutClick}
    >
      로그아웃
    </button>
  );
}
