import { nextInstance } from '@/libs';

import styles from './SignOutButton.module.scss';

export default function SignOutButton() {
  const handleSignOutClick = async () => {
    try {
      await nextInstance.delete('/api/cookies');
      window.location.reload();
      window.location.href = '/';
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
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
