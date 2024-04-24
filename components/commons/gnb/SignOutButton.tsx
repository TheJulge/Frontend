import { nextInstance } from '@/libs';
import Link from 'next/link';

export default function SignOutButton() {
  const handleSignOutClick = async () => {
    nextInstance.delete('/api/cookies');
  };

  return (
    <Link href="/" onClick={handleSignOutClick}>
      로그아웃
    </Link>
  );
}
