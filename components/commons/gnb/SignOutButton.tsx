import styles from '@/components/commons/gnb/SignOutButton.module.scss';
import { nextInstance } from '@/libs';

export default function SignOutButton() {
  const handleSignOutClick = async () => {
    nextInstance.delete('/api/cookies');
  };

  return (
    <button
      className={styles.signOutButton}
      onClick={handleSignOutClick}
      type="button"
    >
      로그아웃
    </button>
  );
}
